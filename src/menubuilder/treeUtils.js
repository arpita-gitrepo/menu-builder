// export function addNode(treeData, parentKey, newTitle) {
//     return treeData.map(node => {
//         if (node.key === parentKey) {
//             return {
//                 ...node,
//                 children: [
//                     ...(node.children || []),
//                     { key: `${node.key}-${node.children?.length || 0}`, title: newTitle }
//                 ]
//             }
//         }
//         if (node.children) {
//             return { ...node, children: addNode(node.children, parentKey, newTitle) }
//         }
//         return node
//     })
// }

// export function editNode(treeData, nodeKey, newTitle) {
//     return treeData.map(node => {
//         if (node.key === nodeKey) {
//             return { ...node, title: newTitle }
//         }
//         if (node.children) {
//             return { ...node, children: editNode(node.children, nodeKey, newTitle) }
//         }
//         return node
//     })
// }

// export function deleteNode(treeData, nodeKey) {
//     return treeData.filter(node => {
//         if (node.key === nodeKey) {
//             return false
//         }
//         if (node.children) {
//             node.children = deleteNode(node.children, nodeKey)
//         }
//         return true
//     })
// }



// treeUtils.js

export const addNode = (treeData, parentKey, newTitle) => {
    return treeData.map(node => {
        if (node.key === parentKey) {
            return {
                ...node,
                children: [
                    ...(node.children || []),
                    { key: `${node.key}-${node.children?.length || 0}`, title: newTitle }
                ]
            }
        }
        if (node.children) {
            return { ...node, children: addNode(node.children, parentKey, newTitle) }
        }
        return node
    })
}

export const editNode = (treeData, nodeKey, newTitle) => {
    return treeData.map(node => {
        if (node.key === nodeKey) {
            return { ...node, title: newTitle }
        }
        if (node.children) {
            return { ...node, children: editNode(node.children, nodeKey, newTitle) }
        }
        return node
    })
}

export const deleteNode = (treeData, nodeKey) => {
    return treeData.filter(node => {
        if (node.key === nodeKey) {
            return false
        }
        if (node.children) {
            node.children = deleteNode(node.children, nodeKey)
        }
        return true
    })
}
