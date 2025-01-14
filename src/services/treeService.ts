const TREE_STORAGE_KEY = 'tree-data';

export const treeService = {
  saveTree(tree: any) {
    localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(tree));
  },

  getTree() {
    const data = localStorage.getItem(TREE_STORAGE_KEY);
    if (!data) {
      const initialTree = {
        title: 'My Tree',
        children: []
      };
      this.saveTree(initialTree);
      return initialTree;
    }
    return JSON.parse(data);
  }
};