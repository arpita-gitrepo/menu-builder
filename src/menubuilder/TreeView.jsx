import React from 'react';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';
import { MdFolder } from 'react-icons/md'; // Updated import

export default function TreeView({ treeData, onSelect }) {
    // Define a common icon function for all nodes
    const renderIcon = () => <MdFolder className="text-blue-500" />;

    return (
        <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow">
            <Tree
                treeData={treeData}
                onSelect={onSelect}
                icon={renderIcon} // Use the same icon for all nodes
                className="text-sm"
            />
        </div>
    );
}
