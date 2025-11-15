import React, { useState } from 'react';
import { ReactFlowProvider } from 'reactflow';
import { RestaurantFlowchart } from './components/RestaurantFlowchart';

export default function App() {
  return (
    <div className="w-full h-screen bg-slate-50">
      <div className="h-full flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
          <h1 className="text-slate-900">Console-Based Restaurant Management System</h1>
          <p className="text-slate-600 text-sm mt-1">Complete System Flowchart - Basic Programming Concepts</p>
        </header>
        <div className="flex-1 overflow-hidden">
          <ReactFlowProvider>
            <RestaurantFlowchart />
          </ReactFlowProvider>
        </div>
      </div>
    </div>
  );
}