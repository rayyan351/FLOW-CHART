import React from 'react';
import { Handle, Position } from 'reactflow';

export function DecisionNode({ data }: any) {
  const sectionColors = {
    common: 'bg-amber-50 border-amber-400 text-amber-900',
    admin: 'bg-blue-100 border-blue-500 text-blue-900',
    staff: 'bg-emerald-100 border-emerald-500 text-emerald-900',
  };

  const color = sectionColors[data.section as keyof typeof sectionColors] || sectionColors.common;

  return (
    <div className="relative" style={{ width: '180px', height: '180px' }}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-slate-400" />
      <div
        className={`absolute inset-0 transform rotate-45 border-2 ${color} shadow-md`}
        style={{ width: '180px', height: '180px' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm text-center px-4 max-w-[140px] leading-tight">
          {data.label}
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-slate-400" />
      <Handle type="source" position={Position.Right} className="w-3 h-3 bg-slate-400" id="yes" />
      <Handle type="source" position={Position.Left} className="w-3 h-3 bg-slate-400" id="no" />
    </div>
  );
}
