import React from 'react';
import { Handle, Position } from 'reactflow';

export function ProcessNode({ data }: any) {
  const sectionColors = {
    common: 'bg-slate-100 border-slate-300 text-slate-900',
    admin: 'bg-blue-50 border-blue-400 text-blue-900',
    staff: 'bg-emerald-50 border-emerald-400 text-emerald-900',
  };

  const color = sectionColors[data.section as keyof typeof sectionColors] || sectionColors.common;

  return (
    <div className={`px-6 py-4 rounded-lg border-2 shadow-sm ${color} min-w-[200px] max-w-[300px]`}>
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-slate-400" />
      <div className="text-sm leading-relaxed text-center">
        {data.label}
      </div>
      {data.details && (
        <div className="mt-2 text-xs opacity-75 leading-relaxed">
          {data.details}
        </div>
      )}
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-slate-400" />
    </div>
  );
}
