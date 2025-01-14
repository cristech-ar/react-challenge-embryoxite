import React, { useContext } from 'react';
import { IconButton, TextField, Button } from '@mui/material';
import { Plus, Minus, X, ChevronRight, ChevronDown } from 'lucide-react';
import { TreeContext } from './TreeContext';
import type { TreeNode as TreeNodeType } from '../types/tree';

interface TreeNodeProps {
  node: TreeNodeType;
  path: number[];
  isRoot?: boolean;
}

export const TreeNode: React.FC<TreeNodeProps> = ({ node, path, isRoot = false }) => {
  const {
    editable,
    addNode,
    removeNode,
    toggleCollapse,
    isAdding,
    setIsAdding,
    newNodeTitle,
    setNewNodeTitle,
    handleAddConfirm,
    handleAddCancel,
    currentPath,
  } = useContext(TreeContext);

  const isCurrentNodeAdding = isAdding && currentPath.join('.') === path.join('.');
  const hasChildren = node.children && node.children.length > 0;
  const showCollapseButton = !isRoot && hasChildren;

  return (
    <li className="my-2">
      <div className="flex items-center gap-2">
        {showCollapseButton && (
          <IconButton
            size="small"
            onClick={() => toggleCollapse(path)}
            className="text-gray-600 hover:text-gray-800"
          >
            {node.isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </IconButton>
        )}
        
        <span className="font-sf-pro text-gray-800">{node.title}</span>
        
        {editable && (
          <div className="flex items-center gap-1">
            <IconButton
              size="small"
              onClick={() => setIsAdding(path)}
              className="text-blue-600 hover:text-blue-800"
            >
              <Plus className="w-4 h-4" />
            </IconButton>
            
            {!isRoot && (
              <IconButton
                size="small"
                onClick={() => removeNode(path)}
                className="text-red-600 hover:text-red-800"
              >
                <X className="w-4 h-4" />
              </IconButton>
            )}
          </div>
        )}
      </div>

      {isCurrentNodeAdding && (
        <div className="ml-8 mt-2 flex items-center gap-2">
          <TextField
            size="small"
            value={newNodeTitle}
            onChange={(e) => setNewNodeTitle(e.target.value)}
            placeholder="Node title"
            error={!newNodeTitle}
            helperText={!newNodeTitle ? 'Title is required' : ''}
            className="w-48"
          />
          <Button
            size="small"
            onClick={handleAddConfirm}
            variant="contained"
            disabled={!newNodeTitle}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Add
          </Button>
          <Button
            size="small"
            onClick={handleAddCancel}
            variant="outlined"
            className="border-gray-300 text-gray-600"
          >
            Cancel
          </Button>
        </div>
      )}

      {hasChildren && !node.isCollapsed && (
        <ul className="ml-8">
          {node.children.map((child, index) => (
            <TreeNode
              key={`${child.title}-${index}`}
              node={child}
              path={[...path, index]}
            />
          ))}
        </ul>
      )}
    </li>
  );
};