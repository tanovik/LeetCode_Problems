/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
     const leaf1 = [];
    const leaf2 = [];

    // Function to add leaves to the List
    var getLeaves = function(node, storage){
        if(node == null) return;

        if(node.left == null && node.right == null){
            // Leaf found
            storage.push(node.val);
            return;
        }
        
        getLeaves(node.right, storage);
        getLeaves(node.left, storage);
    }

    getLeaves(root1, leaf1);
    getLeaves(root2, leaf2);

    return leaf1.toString() === leaf2.toString();
};