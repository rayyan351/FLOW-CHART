import { Node, Edge, MarkerType } from 'reactflow';

export const flowNodes: Node[] = [
  // START & INITIALIZATION
  { id: '1', type: 'startEnd', position: { x: 2400, y: 0 }, data: { label: 'START', type: 'start', section: 'common' } },
  { id: '2', type: 'process', position: { x: 2300, y: 180 }, data: { label: 'Initialize System Data', details: 'Set up arrays:\nmenu[][], orders[][], inventory[],\ntableStatus[], users[]', section: 'common' } },
  { id: '3', type: 'process', position: { x: 2300, y: 400 }, data: { label: 'Display Welcome Screen', section: 'common' } },
  
  // LOGIN PROCESS
  { id: '4', type: 'process', position: { x: 2300, y: 550 }, data: { label: 'Login Screen', section: 'common' } },
  { id: '5', type: 'process', position: { x: 2300, y: 700 }, data: { label: 'Enter Username & Password', section: 'common' } },
  { id: '6', type: 'decision', position: { x: 2310, y: 870 }, data: { label: 'Valid Credentials?', section: 'common' } },
  { id: '7', type: 'process', position: { x: 1950, y: 930 }, data: { label: 'Show Error Message', section: 'common' } },
  
  // USER ROLE CHECK
  { id: '8', type: 'decision', position: { x: 2310, y: 1150 }, data: { label: 'User Role?', section: 'common' } },
  
  // ==================== ADMIN FLOW (LEFT SIDE) ====================
  
  // ADMIN MAIN MENU
  { id: 'a1', type: 'subgraph', position: { x: 800, y: 1400 }, data: { label: '📋 ADMIN MAIN MENU', section: 'admin' } },
  { id: 'a2', type: 'process', position: { x: 750, y: 1550 }, data: { label: 'Display Admin Menu', section: 'admin' } },
  { id: 'a3', type: 'decision', position: { x: 760, y: 1720 }, data: { label: 'Admin Selection', section: 'admin' } },
  
  // MENU MANAGEMENT MODULE
  { id: 'm1', type: 'subgraph', position: { x: -500, y: 2050 }, data: { label: '🍽️ MENU MANAGEMENT', section: 'admin' } },
  { id: 'm2', type: 'decision', position: { x: -490, y: 2200 }, data: { label: 'Menu Action?', section: 'admin' } },
  { id: 'm3', type: 'process', position: { x: -900, y: 2500 }, data: { label: 'View Menu\n→ Display All Menu Items', section: 'admin' } },
  { id: 'm4', type: 'process', position: { x: -600, y: 2500 }, data: { label: 'Add Item\n→ Input Details\n→ Store in menu[]', section: 'admin' } },
  { id: 'm5', type: 'process', position: { x: -300, y: 2500 }, data: { label: 'Edit Item\n→ Select & Modify\n→ Update array', section: 'admin' } },
  { id: 'm6', type: 'process', position: { x: 0, y: 2500 }, data: { label: 'Delete Item\n→ Remove from array', section: 'admin' } },
  { id: 'm7', type: 'process', position: { x: -500, y: 2720 }, data: { label: 'Return to Menu Management', section: 'admin' } },
  
  // INVENTORY MANAGEMENT
  { id: 'i1', type: 'subgraph', position: { x: 350, y: 2050 }, data: { label: '📦 INVENTORY MANAGEMENT', section: 'admin' } },
  { id: 'i2', type: 'decision', position: { x: 360, y: 2200 }, data: { label: 'Inventory Action?', section: 'admin' } },
  { id: 'i3', type: 'process', position: { x: 50, y: 2500 }, data: { label: 'View Stock\n→ Display Levels', section: 'admin' } },
  { id: 'i4', type: 'process', position: { x: 350, y: 2500 }, data: { label: 'Update Stock\n→ Enter Quantity\n→ Update inventory[]', section: 'admin' } },
  { id: 'i5', type: 'process', position: { x: 650, y: 2500 }, data: { label: 'Low Stock Alert\n→ Display Warnings', section: 'admin' } },
  { id: 'i6', type: 'process', position: { x: 350, y: 2720 }, data: { label: 'Return to Inventory Mgmt', section: 'admin' } },
  
  // REPORTS MODULE
  { id: 'r1', type: 'subgraph', position: { x: 1000, y: 2050 }, data: { label: '📊 REPORTS MODULE', section: 'admin' } },
  { id: 'r2', type: 'decision', position: { x: 1010, y: 2200 }, data: { label: 'Report Type?', section: 'admin' } },
  { id: 'r3', type: 'process', position: { x: 750, y: 2500 }, data: { label: 'Daily Sales\n→ Calculate & Display', section: 'admin' } },
  { id: 'r4', type: 'process', position: { x: 1050, y: 2500 }, data: { label: 'Monthly Report\n→ Sum & Display', section: 'admin' } },
  { id: 'r5', type: 'process', position: { x: 1350, y: 2500 }, data: { label: 'Popular Items\n→ Count & Display', section: 'admin' } },
  { id: 'r6', type: 'process', position: { x: 1000, y: 2720 }, data: { label: 'Return to Reports', section: 'admin' } },
  
  // USER MANAGEMENT
  { id: 'u1', type: 'subgraph', position: { x: 1600, y: 2050 }, data: { label: '👥 USER MANAGEMENT', section: 'admin' } },
  { id: 'u2', type: 'decision', position: { x: 1610, y: 2200 }, data: { label: 'User Action?', section: 'admin' } },
  { id: 'u3', type: 'process', position: { x: 1400, y: 2500 }, data: { label: 'Add User\n→ Input Details\n→ Store in users[]', section: 'admin' } },
  { id: 'u4', type: 'process', position: { x: 1700, y: 2500 }, data: { label: 'Remove User\n→ Delete from array', section: 'admin' } },
  { id: 'u5', type: 'process', position: { x: 1600, y: 2720 }, data: { label: 'Return to User Management', section: 'admin' } },
  
  // ADMIN LOGOUT
  { id: 'a4', type: 'process', position: { x: 750, y: 3000 }, data: { label: 'Logout → Return to Login', section: 'admin' } },
  
  // ==================== STAFF FLOW (RIGHT SIDE) ====================
  
  // STAFF MAIN MENU
  { id: 's1', type: 'subgraph', position: { x: 3800, y: 1400 }, data: { label: '🍴 STAFF MAIN MENU', section: 'staff' } },
  { id: 's2', type: 'process', position: { x: 3750, y: 1550 }, data: { label: 'Display Staff Menu', section: 'staff' } },
  { id: 's3', type: 'decision', position: { x: 3760, y: 1720 }, data: { label: 'Staff Selection', section: 'staff' } },
  
  // ORDER CREATION PROCESS
  { id: 'o1', type: 'subgraph', position: { x: 2600, y: 2050 }, data: { label: '🛒 ORDER CREATION', section: 'staff' } },
  { id: 'o2', type: 'process', position: { x: 2550, y: 2200 }, data: { label: 'Select Table Number', section: 'staff' } },
  { id: 'o3', type: 'decision', position: { x: 2560, y: 2370 }, data: { label: 'Check tableStatus[table]', section: 'staff' } },
  { id: 'o4', type: 'process', position: { x: 2200, y: 2430 }, data: { label: 'Show Error: Table Busy', section: 'staff' } },
  { id: 'o5', type: 'process', position: { x: 2550, y: 2650 }, data: { label: 'Mark tableStatus[table] = 1', section: 'staff' } },
  { id: 'o6', type: 'process', position: { x: 2550, y: 2820 }, data: { label: 'LOOP START: Item Selection\n→ Display Menu Categories', section: 'staff' } },
  { id: 'o7', type: 'process', position: { x: 2550, y: 2990 }, data: { label: 'Select Category & Item\nEnter Quantity', section: 'staff' } },
  { id: 'o8', type: 'decision', position: { x: 2560, y: 3160 }, data: { label: 'inventory[item]\n>= quantity?', section: 'staff' } },
  { id: 'o9', type: 'process', position: { x: 2200, y: 3220 }, data: { label: 'Show "Out of Stock" Error', section: 'staff' } },
  { id: 'o10', type: 'process', position: { x: 2550, y: 3440 }, data: { label: 'Update orders[table][item]\nUpdate inventory[item]', section: 'staff' } },
  { id: 'o11', type: 'decision', position: { x: 2560, y: 3610 }, data: { label: 'Add More Items?', section: 'staff' } },
  { id: 'o12', type: 'process', position: { x: 2550, y: 3860 }, data: { label: 'Return to Staff Menu', section: 'staff' } },
  
  // ACTIVE ORDERS DISPLAY
  { id: 'ao1', type: 'subgraph', position: { x: 3350, y: 2050 }, data: { label: '📋 ACTIVE ORDERS', section: 'staff' } },
  { id: 'ao2', type: 'process', position: { x: 3300, y: 2200 }, data: { label: 'Initialize order_count = 0', section: 'staff' } },
  { id: 'ao3', type: 'process', position: { x: 3300, y: 2370 }, data: { label: 'LOOP: For each table', section: 'staff' } },
  { id: 'ao4', type: 'decision', position: { x: 3310, y: 2540 }, data: { label: 'Table has orders?', section: 'staff' } },
  { id: 'ao5', type: 'process', position: { x: 3300, y: 2820 }, data: { label: 'Display Table & Orders\norder_count++', section: 'staff' } },
  { id: 'ao6', type: 'decision', position: { x: 3310, y: 2990 }, data: { label: 'order_count\n== 0?', section: 'staff' } },
  { id: 'ao7', type: 'process', position: { x: 3000, y: 3050 }, data: { label: 'Display "No Active Orders"', section: 'staff' } },
  { id: 'ao8', type: 'process', position: { x: 3300, y: 3270 }, data: { label: 'Display Total Active Orders', section: 'staff' } },
  { id: 'ao9', type: 'process', position: { x: 3300, y: 3440 }, data: { label: 'Return to Staff Menu', section: 'staff' } },
  
  // BILLING PROCESS
  { id: 'b1', type: 'subgraph', position: { x: 4100, y: 2050 }, data: { label: '💰 BILLING PROCESS', section: 'staff' } },
  { id: 'b2', type: 'process', position: { x: 4050, y: 2200 }, data: { label: 'Select Table to Bill', section: 'staff' } },
  { id: 'b3', type: 'decision', position: { x: 4060, y: 2370 }, data: { label: 'Table has orders?', section: 'staff' } },
  { id: 'b4', type: 'process', position: { x: 3750, y: 2430 }, data: { label: 'Show Error: No Orders', section: 'staff' } },
  { id: 'b5', type: 'process', position: { x: 4050, y: 2650 }, data: { label: 'Initialize total = 0', section: 'staff' } },
  { id: 'b6', type: 'process', position: { x: 4050, y: 2820 }, data: { label: 'LOOP: For each menu item', section: 'staff' } },
  { id: 'b7', type: 'decision', position: { x: 4060, y: 2990 }, data: { label: 'orders[table]\n[item] > 0?', section: 'staff' } },
  { id: 'b8', type: 'process', position: { x: 4050, y: 3270 }, data: { label: 'Calculate subtotal\nAdd to total', section: 'staff' } },
  { id: 'b9', type: 'process', position: { x: 4050, y: 3440 }, data: { label: 'Calculate tax = total × 0.05\nfinal_total = total + tax', section: 'staff' } },
  { id: 'b10', type: 'process', position: { x: 4050, y: 3610 }, data: { label: 'Generate & Print Invoice', section: 'staff' } },
  { id: 'b11', type: 'process', position: { x: 4050, y: 3780 }, data: { label: 'Clear orders[table]\nMark tableStatus[table] = 0', section: 'staff' } },
  { id: 'b12', type: 'process', position: { x: 4050, y: 3950 }, data: { label: 'Return to Staff Menu', section: 'staff' } },
  
  // TABLE MANAGEMENT
  { id: 't1', type: 'subgraph', position: { x: 4800, y: 2050 }, data: { label: '🪑 TABLE MANAGEMENT', section: 'staff' } },
  { id: 't2', type: 'process', position: { x: 4750, y: 2200 }, data: { label: 'Display All Table Statuses', section: 'staff' } },
  { id: 't3', type: 'decision', position: { x: 4760, y: 2370 }, data: { label: 'Select Action', section: 'staff' } },
  { id: 't4', type: 'process', position: { x: 4500, y: 2650 }, data: { label: 'View Only', section: 'staff' } },
  { id: 't5', type: 'process', position: { x: 4900, y: 2650 }, data: { label: 'Update Status\n→ Update tableStatus[]', section: 'staff' } },
  { id: 't6', type: 'process', position: { x: 4750, y: 2820 }, data: { label: 'Return to Staff Menu', section: 'staff' } },
  
  // STAFF LOGOUT
  { id: 's4', type: 'process', position: { x: 3750, y: 4200 }, data: { label: 'Logout → Return to Login', section: 'staff' } },
  
  // ==================== END ====================
  { id: 'end', type: 'startEnd', position: { x: 2400, y: 4450 }, data: { label: 'END', type: 'end', section: 'common' } },
];

export const flowEdges: Edge[] = [
  // START & INITIALIZATION
  { id: 'e1-2', source: '1', target: '2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-3', source: '2', target: '3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-4', source: '3', target: '4', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4-5', source: '4', target: '5', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-6', source: '5', target: '6', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // LOGIN VALIDATION
  { id: 'e6-7', source: '6', target: '7', sourceHandle: 'no', label: 'No', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e7-4', source: '7', target: '4', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e6-8', source: '6', target: '8', label: 'Yes', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // USER ROLE CHECK
  { id: 'e8-a1', source: '8', target: 'a1', sourceHandle: 'no', label: 'Admin', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e8-s1', source: '8', target: 's1', sourceHandle: 'yes', label: 'Staff', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // ==================== ADMIN FLOW EDGES ====================
  
  // Admin Main Menu
  { id: 'ea1-a2', source: 'a1', target: 'a2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ea2-a3', source: 'a2', target: 'a3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Menu Management
  { id: 'ea3-m1', source: 'a3', target: 'm1', label: 'Menu', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em1-m2', source: 'm1', target: 'm2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em2-m3', source: 'm2', target: 'm3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em2-m4', source: 'm2', target: 'm4', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em2-m5', source: 'm2', target: 'm5', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em2-m6', source: 'm2', target: 'm6', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em3-m7', source: 'm3', target: 'm7', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em4-m7', source: 'm4', target: 'm7', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em5-m7', source: 'm5', target: 'm7', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em6-m7', source: 'm6', target: 'm7', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'em7-m2', source: 'm7', target: 'm2', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Inventory Management
  { id: 'ea3-i1', source: 'a3', target: 'i1', label: 'Inventory', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei1-i2', source: 'i1', target: 'i2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei2-i3', source: 'i2', target: 'i3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei2-i4', source: 'i2', target: 'i4', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei2-i5', source: 'i2', target: 'i5', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei3-i6', source: 'i3', target: 'i6', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei4-i6', source: 'i4', target: 'i6', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei5-i6', source: 'i5', target: 'i6', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ei6-i2', source: 'i6', target: 'i2', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Reports Module
  { id: 'ea3-r1', source: 'a3', target: 'r1', label: 'Reports', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er1-r2', source: 'r1', target: 'r2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er2-r3', source: 'r2', target: 'r3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er2-r4', source: 'r2', target: 'r4', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er2-r5', source: 'r2', target: 'r5', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er3-r6', source: 'r3', target: 'r6', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er4-r6', source: 'r4', target: 'r6', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er5-r6', source: 'r5', target: 'r6', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'er6-r2', source: 'r6', target: 'r2', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // User Management
  { id: 'ea3-u1', source: 'a3', target: 'u1', label: 'Users', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eu1-u2', source: 'u1', target: 'u2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eu2-u3', source: 'u2', target: 'u3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eu2-u4', source: 'u2', target: 'u4', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eu3-u5', source: 'u3', target: 'u5', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eu4-u5', source: 'u4', target: 'u5', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eu5-u2', source: 'u5', target: 'u2', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Admin Logout
  { id: 'ea3-a4', source: 'a3', target: 'a4', label: 'Logout', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'ea4-4', source: 'a4', target: '4', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // ==================== STAFF FLOW EDGES ====================
  
  // Staff Main Menu
  { id: 'es1-s2', source: 's1', target: 's2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'es2-s3', source: 's2', target: 's3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Order Creation
  { id: 'es3-o1', source: 's3', target: 'o1', label: 'Create Order', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo1-o2', source: 'o1', target: 'o2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo2-o3', source: 'o2', target: 'o3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo3-o4', source: 'o3', target: 'o4', sourceHandle: 'no', label: 'Occupied', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo4-o2', source: 'o4', target: 'o2', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo3-o5', source: 'o3', target: 'o5', label: 'Vacant', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo5-o6', source: 'o5', target: 'o6', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo6-o7', source: 'o6', target: 'o7', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo7-o8', source: 'o7', target: 'o8', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo8-o9', source: 'o8', target: 'o9', sourceHandle: 'no', label: 'No', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo9-o7', source: 'o9', target: 'o7', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo8-o10', source: 'o8', target: 'o10', label: 'Yes', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo10-o11', source: 'o10', target: 'o11', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo11-o6', source: 'o11', target: 'o6', sourceHandle: 'yes', label: 'Yes', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo11-o12', source: 'o11', target: 'o12', label: 'No', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eo12-s3', source: 'o12', target: 's3', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Active Orders
  { id: 'es3-ao1', source: 's3', target: 'ao1', label: 'View Orders', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao1-ao2', source: 'ao1', target: 'ao2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao2-ao3', source: 'ao2', target: 'ao3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao3-ao4', source: 'ao3', target: 'ao4', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao4-ao5', source: 'ao4', target: 'ao5', sourceHandle: 'yes', label: 'Yes', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao5-ao3', source: 'ao5', target: 'ao3', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao4-ao6', source: 'ao4', target: 'ao6', sourceHandle: 'no', label: 'No', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao6-ao7', source: 'ao6', target: 'ao7', sourceHandle: 'yes', label: 'Yes', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao6-ao8', source: 'ao6', target: 'ao8', label: 'No', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao7-ao9', source: 'ao7', target: 'ao9', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao8-ao9', source: 'ao8', target: 'ao9', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eao9-s3', source: 'ao9', target: 's3', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Billing Process
  { id: 'es3-b1', source: 's3', target: 'b1', label: 'Generate Bill', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb1-b2', source: 'b1', target: 'b2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb2-b3', source: 'b2', target: 'b3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb3-b4', source: 'b3', target: 'b4', sourceHandle: 'no', label: 'No', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb4-b2', source: 'b4', target: 'b2', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb3-b5', source: 'b3', target: 'b5', label: 'Yes', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb5-b6', source: 'b5', target: 'b6', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb6-b7', source: 'b6', target: 'b7', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb7-b8', source: 'b7', target: 'b8', sourceHandle: 'yes', label: 'Yes', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb8-b6', source: 'b8', target: 'b6', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb7-b9', source: 'b7', target: 'b9', sourceHandle: 'no', label: 'No', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb9-b10', source: 'b9', target: 'b10', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb10-b11', source: 'b10', target: 'b11', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb11-b12', source: 'b11', target: 'b12', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'eb12-s3', source: 'b12', target: 's3', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Table Management
  { id: 'es3-t1', source: 's3', target: 't1', label: 'Table Status', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'et1-t2', source: 't1', target: 't2', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'et2-t3', source: 't2', target: 't3', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'et3-t4', source: 't3', target: 't4', sourceHandle: 'no', label: 'View', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'et3-t5', source: 't3', target: 't5', sourceHandle: 'yes', label: 'Update', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'et4-t6', source: 't4', target: 't6', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'et5-t6', source: 't5', target: 't6', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'et6-s3', source: 't6', target: 's3', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // Staff Logout
  { id: 'es3-s4', source: 's3', target: 's4', label: 'Logout', animated: false, markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'es4-4', source: 's4', target: '4', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  
  // ==================== END CONNECTION ====================
  { id: 'ea3-end', source: 'a3', target: 'end', label: 'Exit', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'es3-end', source: 's3', target: 'end', label: 'Exit', animated: false, type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
];