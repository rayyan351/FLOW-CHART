import React, { useCallback, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
  useNodesState,
  useEdgesState,
  MarkerType,
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Download } from 'lucide-react';
import { ProcessNode } from './nodes/ProcessNode';
import { DecisionNode } from './nodes/DecisionNode';
import { StartEndNode } from './nodes/StartEndNode';
import { SubgraphNode } from './nodes/SubgraphNode';
import { flowNodes, flowEdges } from './flowchartData';

const nodeTypes = {
  process: ProcessNode,
  decision: DecisionNode,
  startEnd: StartEndNode,
  subgraph: SubgraphNode,
};

export function RestaurantFlowchart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(flowNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(flowEdges);
  const [selectedView, setSelectedView] = useState<'full' | 'admin' | 'staff'>('full');
  const { fitView } = useReactFlow();

  const filterNodesByView = useCallback(() => {
    if (selectedView === 'full') return flowNodes;
    
    const filteredNodes = flowNodes.filter(node => {
      if (node.data.section === 'common') return true;
      if (selectedView === 'admin' && node.data.section === 'admin') return true;
      if (selectedView === 'staff' && node.data.section === 'staff') return true;
      return false;
    });
    
    return filteredNodes;
  }, [selectedView]);

  const filterEdgesByView = useCallback(() => {
    if (selectedView === 'full') return flowEdges;
    
    const visibleNodeIds = new Set(filterNodesByView().map(n => n.id));
    return flowEdges.filter(edge => 
      visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
    );
  }, [selectedView, filterNodesByView]);

  React.useEffect(() => {
    setNodes(filterNodesByView());
    setEdges(filterEdgesByView());
  }, [selectedView, setNodes, setEdges, filterNodesByView, filterEdgesByView]);

  const handleExportPDF = () => {
    // Trigger browser print dialog which can save as PDF
    window.print();
  };

  return (
    <div className="relative w-full h-full">
      {/* View Controls */}
      <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg border border-slate-200 p-3 print:hidden">
        <div className="text-xs text-slate-600 mb-2">View:</div>
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedView('full')}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              selectedView === 'full'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Full System
          </button>
          <button
            onClick={() => setSelectedView('admin')}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              selectedView === 'admin'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
            }`}
          >
            Admin Flow
          </button>
          <button
            onClick={() => setSelectedView('staff')}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              selectedView === 'staff'
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            Staff Flow
          </button>
        </div>
      </div>

      {/* Export Button */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10 print:hidden">
        <div></div>
        <button
          onClick={handleExportPDF}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Export as PDF
        </button>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-lg border border-slate-200 p-4 print:block">
        <div className="text-sm mb-3">Legend</div>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-800"></div>
            <span className="text-slate-600">Start/End</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-100 border-2 border-slate-300"></div>
            <span className="text-slate-600">Process</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-50 border-2 border-amber-400 transform rotate-45"></div>
            <span className="text-slate-600">Decision</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-50 border-2 border-blue-400"></div>
            <span className="text-slate-600">Admin Flow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-50 border-2 border-emerald-400"></div>
            <span className="text-slate-600">Staff Flow</span>
          </div>
        </div>
      </div>

      {/* Flowchart */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.35 }}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#e2e8f0" />
        <Controls className="bg-white border border-slate-200 rounded-lg shadow-lg print:hidden" />
        <MiniMap
          className="bg-white border border-slate-200 rounded-lg shadow-lg print:hidden"
          nodeColor={(node) => {
            if (node.type === 'startEnd') return '#334155';
            if (node.data.section === 'admin') return '#3b82f6';
            if (node.data.section === 'staff') return '#10b981';
            return '#e2e8f0';
          }}
        />
      </ReactFlow>
    </div>
  );
}