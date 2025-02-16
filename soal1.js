class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left); // Kunjungi anak kiri
        result.push(node.val); // Kunjungi akar
        traverse(node.right); // Kunjungi anak kanan
    }
    
    traverse(root);
    return result;
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(inorderTraversal(root)); // Output: [1, 3, 2]
