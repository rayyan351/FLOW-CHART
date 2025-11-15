import React from 'react';
import { Handle, Position } from 'reactflow';

export function StartEndNode({ data }: any) {
  return (
    <div className="relative">
      {data.type === 'start' && (
        <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-slate-400" />
      )}
      {data.type === 'end' && (
        <Handle type="target" position={Position.Top} className="w-3 h-3 bg-slate-400" />
      )}
      <div className="w-32 h-32 rounded-full bg-slate-700 border-4 border-slate-800 shadow-lg flex items-center justify-center">
        <div className="text-white text-center">
          {data.label}
        </div>
      </div>
    </div>
  );
}
