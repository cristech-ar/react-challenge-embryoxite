import React, { createContext, useState, useCallback } from 'react';
import type { TreeNode } from '../types/tree';
import { useSnackbar } from 'notistack';

interface TreeContextType {
  editable: boolean;
  addNode: (path: number[]) => void;
  removeNode: (path: number[]) => void;
  toggleCollapse: (path: number[]) => void;
  collapseAll: () => void;
  expandAll: () => void;
  isAdding: boolean;
  setIsAdding: (path: number[] | null) => void;
  newNodeTitle: string;
  setNewNodeTitle: (title: string) => void;
  handleAddConfirm: () => void;
  handleAddCancel: () => void;
  currentPath: number[];
}

export const TreeContext = createContext<TreeContextType>({} as TreeContextType);

export const TreeProvider: React.FC<{
  children: React.ReactNode;
  value: TreeNode;
  onChange: (newValue: TreeNode) => void;
  editable: boolean;
}> = ({ children, value, onChange, editable }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newNodeTitle, setNewNodeTitle] = useState('');
  const [currentPath, setCurrentPath] = useState<number[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const addNode = useCallback((path: number[]) => {
    setCurrentPath(path);
    setIsAdding(true);
    setNewNodeTitle('');
  }, []);

  const removeNode = useCallback((path: number[]) => {
    const newValue = { ...value };
    let current = newValue;
    const parentPath = path.slice(0, -1);
    const index = path[path.length - 1];

    parentPath.forEach((p) => {
      current = current.children[p];
    });

    current.children.splice(index, 1);
    onChange(newValue);
    enqueueSnackbar('Node removed successfully', { variant: 'success' });
  }, [value, onChange]);

  const toggleCollapse = useCallback((path: number[]) => {
    const newValue = { ...value };
    let current = newValue;
    path.forEach((p) => {
      current = current.children[p];
    });
    current.isCollapsed = !current.isCollapsed;
    onChange(newValue);
  }, [value, onChange]);

  const handleAddConfirm = useCallback(() => {
    if (!newNodeTitle) return;

    const newValue = { ...value };
    let current = newValue;
    currentPath.forEach((p) => {
      current = current.children[p];
    });

    current.children.push({
      title: newNodeTitle,
      children: [],
    });

    onChange(newValue);
    setIsAdding(false);
    setNewNodeTitle('');
    enqueueSnackbar('Node added successfully', { variant: 'success' });
  }, [value, onChange, currentPath, newNodeTitle]);

  const handleAddCancel = useCallback(() => {
    setIsAdding(false);
    setNewNodeTitle('');
  }, []);

  const toggleAllNodes = useCallback((collapsed: boolean) => {
    const toggleNodes = (node: TreeNode) => {
      node.isCollapsed = collapsed;
      node.children.forEach(toggleNodes);
    };

    const newValue = { ...value };
    newValue.children.forEach(toggleNodes);
    onChange(newValue);
  }, [value, onChange]);

  const collapseAll = useCallback(() => toggleAllNodes(true), [toggleAllNodes]);
  const expandAll = useCallback(() => toggleAllNodes(false), [toggleAllNodes]);

  return (
    <TreeContext.Provider
      value={{
        editable,
        addNode,
        removeNode,
        toggleCollapse,
        collapseAll,
        expandAll,
        isAdding,
        setIsAdding: (path) => {
          if (path) {
            setCurrentPath(path);
            setIsAdding(true);
          } else {
            setIsAdding(false);
          }
        },
        newNodeTitle,
        setNewNodeTitle,
        handleAddConfirm,
        handleAddCancel,
        currentPath,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
};