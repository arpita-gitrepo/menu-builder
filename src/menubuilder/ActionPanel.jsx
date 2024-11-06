// import React from 'react'
// import { PlusCircle, Pencil, Trash2 } from 'lucide-react'

// export default function ActionPanel({ onAdd, onEdit, onDelete, isNodeSelected }) {
//     const buttonClass = "w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"

//     return (
//         <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-4">Actions</h2>
//             <div className="space-y-2">
//                 <button onClick={onAdd} className={buttonClass} disabled={!isNodeSelected}>
//                     <PlusCircle className="mr-2 h-4 w-4" /> Add Child
//                 </button>
//                 <button onClick={onEdit} className={buttonClass} disabled={!isNodeSelected}>
//                     <Pencil className="mr-2 h-4 w-4" /> Edit
//                 </button>
//                 <button onClick={onDelete} className={buttonClass} disabled={!isNodeSelected}>
//                     <Trash2 className="mr-2 h-4 w-4" /> Delete
//                 </button>
//             </div>
//         </div>
//     )
// }



import React from 'react';
import { PlusCircle, Pencil, Trash2 } from 'lucide-react';

export default function ActionPanel({ onAdd, onEdit, onDelete, isNodeSelected }) {
    const buttonClass = "flex items-center justify-center w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition";

    return (
        <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Actions</h2>
            <div className="space-y-2">
                <button onClick={onAdd} className={buttonClass} disabled={!isNodeSelected}>
                    <PlusCircle className="mr-2 h-5 w-5" /> Add Child
                </button>
                <button onClick={onEdit} className={buttonClass} disabled={!isNodeSelected}>
                    <Pencil className="mr-2 h-5 w-5" /> Edit
                </button>
                <button onClick={onDelete} className={buttonClass} disabled={!isNodeSelected}>
                    <Trash2 className="mr-2 h-5 w-5" /> Delete
                </button>
            </div>
        </div>
    );
}
