import React from 'react';
import { Handle, Position } from 'reactflow';

export function SubgraphNode({ data }: any) {
  const sectionColors = {
    common: 'bg-slate-50 border-slate-400 text-slate-900',
    admin: 'bg-blue-100 border-blue-600 text-blue-900',
    staff: 'bg-emerald-100 border-emerald-600 text-emerald-900',
  };

  const color = sectionColors[data.section as keyof typeof sectionColors] || sectionColors.common;

  return (
    <div className={`px-5 py-3 rounded-lg border-2 border-dashed ${color} min-w-[220px] max-w-[320px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-slate-400" />
      <div className="text-center">
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-slate-400" />
    </div>
  );
}
