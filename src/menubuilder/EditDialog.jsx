// import React, { useState, useEffect } from 'react'

// export default function EditDialog({ isOpen, onClose, onConfirm, mode, initialValue }) {
//     const [newNodeTitle, setNewNodeTitle] = useState(initialValue)

//     useEffect(() => {
//         setNewNodeTitle(initialValue)
//     }, [initialValue])

//     const handleConfirm = () => {
//         onConfirm(newNodeTitle)
//         setNewNodeTitle('')
//     }

//     if (!isOpen) return null

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <div className="bg-white p-6 rounded-lg">
//                 <h2 className="text-xl font-bold mb-4">{mode === 'add' ? 'Add New Item' : 'Edit Item'}</h2>
//                 <input
//                     type="text"
//                     value={newNodeTitle}
//                     onChange={(e) => setNewNodeTitle(e.target.value)}
//                     placeholder="Enter item title"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
//                 />
//                 <div className="flex justify-end space-x-2">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleConfirm}
//                         className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//                     >
//                         {mode === 'add' ? 'Add' : 'Save'}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';

export default function EditDialog({ isOpen, onClose, onConfirm, mode, initialValue }) {
    const [newNodeTitle, setNewNodeTitle] = useState(initialValue);

    useEffect(() => {
        setNewNodeTitle(initialValue);
    }, [initialValue]);

    const handleConfirm = () => {
        onConfirm(newNodeTitle);
        setNewNodeTitle('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-xl font-bold mb-4 text-gray-800">{mode === 'add' ? 'Add New Item' : 'Edit Item'}</h2>
                <input
                    type="text"
                    value={newNodeTitle}
                    onChange={(e) => setNewNodeTitle(e.target.value)}
                    placeholder="Enter item title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                        {mode === 'add' ? 'Add' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    );
}
