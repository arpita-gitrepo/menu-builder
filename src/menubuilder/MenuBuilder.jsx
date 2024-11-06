// import React, { useState } from 'react'
// import TreeView from './TreeView'
// import ActionPanel from './ActionPanel'
// import EditDialog from './EditDialog'
// import { addNode, editNode, deleteNode } from './treeUtils'

// const initialTreeData = [
//     {
//         key: '0',
//         title: 'Home',
//         children: [
//             { key: '0-0', title: 'About' },
//             { key: '0-1', title: 'Services' },
//             {
//                 key: '0-2',
//                 title: 'Products',
//                 children: [
//                     { key: '0-2-0', title: 'Category 1' },
//                     { key: '0-2-1', title: 'Category 2' },
//                 ],
//             },
//         ],
//     },
//     { key: '1', title: 'Contact' },
// ]

// export default function MenuBuilder() {
//     const [treeData, setTreeData] = useState(initialTreeData)
//     const [selectedNode, setSelectedNode] = useState(null)
//     const [isDialogOpen, setIsDialogOpen] = useState(false)
//     const [dialogMode, setDialogMode] = useState('add')

//     const handleSelect = (selectedKeys, info) => {
//         setSelectedNode(info.node)
//     }

//     const handleAdd = () => {
//         setDialogMode('add')
//         setIsDialogOpen(true)
//     }

//     const handleEdit = () => {
//         if (selectedNode) {
//             setDialogMode('edit')
//             setIsDialogOpen(true)
//         }
//     }

//     const handleDelete = () => {
//         if (selectedNode) {
//             setTreeData(deleteNode(treeData, selectedNode.key))
//             setSelectedNode(null)
//         }
//     }

//     const handleDialogConfirm = (newNodeTitle) => {
//         if (dialogMode === 'add' && selectedNode) {
//             setTreeData(addNode(treeData, selectedNode.key, newNodeTitle))
//         } else if (dialogMode === 'edit' && selectedNode) {
//             setTreeData(editNode(treeData, selectedNode.key, newNodeTitle))
//         }
//         setIsDialogOpen(false)
//     }

//     return (
//         <div className="p-4 max-w-4xl mx-auto">
//             <h1 className="text-2xl font-bold mb-4">Menu Builder</h1>
//             <div className="flex flex-col md:flex-row gap-4">
//                 <TreeView treeData={treeData} onSelect={handleSelect} />
//                 <ActionPanel
//                     onAdd={handleAdd}
//                     onEdit={handleEdit}
//                     onDelete={handleDelete}
//                     isNodeSelected={!!selectedNode}
//                 />
//             </div>
//             <EditDialog
//                 isOpen={isDialogOpen}
//                 onClose={() => setIsDialogOpen(false)}
//                 onConfirm={handleDialogConfirm}
//                 mode={dialogMode}
//                 initialValue={dialogMode === 'edit' && selectedNode ? selectedNode.title : ''}
//             />
//         </div>
//     )
// }



import React, { useState } from 'react';
import TreeView from './TreeView';
import ActionPanel from './ActionPanel';
import EditDialog from './EditDialog';
import { addNode, editNode, deleteNode } from './treeUtils';

const initialTreeData = [
    {
        key: '0',
        title: 'Home',
        children: [
            { key: '0-0', title: 'About' },
            { key: '0-1', title: 'Services' },
            {
                key: '0-2',
                title: 'Products',
                children: [
                    { key: '0-2-0', title: 'Category 1' },
                    { key: '0-2-1', title: 'Category 2' },
                ],
            },
        ],
    },
    { key: '1', title: 'Contact' },
];

export default function MenuBuilder() {
    const [treeData, setTreeData] = useState(initialTreeData);
    const [selectedNode, setSelectedNode] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogMode, setDialogMode] = useState('add');

    const handleSelect = (selectedKeys, info) => {
        setSelectedNode(info.node);
    };

    const handleAdd = () => {
        setDialogMode('add');
        setIsDialogOpen(true);
    };

    const handleEdit = () => {
        if (selectedNode) {
            setDialogMode('edit');
            setIsDialogOpen(true);
        }
    };

    const handleDelete = () => {
        if (selectedNode) {
            setTreeData(deleteNode(treeData, selectedNode.key));
            setSelectedNode(null);
        }
    };

    const handleDialogConfirm = (newNodeTitle) => {
        if (dialogMode === 'add' && selectedNode) {
            setTreeData(addNode(treeData, selectedNode.key, newNodeTitle));
        } else if (dialogMode === 'edit' && selectedNode) {
            setTreeData(editNode(treeData, selectedNode.key, newNodeTitle));
        }
        setIsDialogOpen(false);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Menu Builder</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <TreeView treeData={treeData} onSelect={handleSelect} />
                <ActionPanel
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    isNodeSelected={!!selectedNode}
                />
            </div>
            <EditDialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onConfirm={handleDialogConfirm}
                mode={dialogMode}
                initialValue={dialogMode === 'edit' && selectedNode ? selectedNode.title : ''}
            />
        </div>
    );
}
