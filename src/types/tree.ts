export interface TreeNode {
  title: string;
  children: TreeNode[];
  isCollapsed?: boolean;
}

export interface TreeProps {
  title: string;
  value: TreeNode;
  onChange: (newValue: TreeNode) => void;
  editable: boolean;
}