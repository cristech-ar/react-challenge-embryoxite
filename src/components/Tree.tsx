import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import type { TreeProps } from '../types/tree';
import { TreeProvider, TreeContext } from './TreeContext';
import { TreeNode } from './TreeNode';

interface TreeContentProps extends TreeProps {
  value: TreeProps['value'];
}

const TreeContent: React.FC<TreeContentProps> = ({ title, value }) => {
  const { collapseAll, expandAll } = useContext(TreeContext);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-sf-pro-display font-semibold text-gray-900">
          {title}
        </h2>
        <div className="flex gap-2">
          <Button
            startIcon={<ExpandLess className="w-4 h-4" />}
            onClick={collapseAll}
            variant="outlined"
            size="small"
            className="border-gray-300 text-gray-600"
          >
            Collapse All
          </Button>
          <Button
            startIcon={<ExpandMore className="w-4 h-4" />}
            onClick={expandAll}
            variant="outlined"
            size="small"
            className="border-gray-300 text-gray-600"
          >
            Expand All
          </Button>
        </div>
      </div>
      <ul className="ml-4">
        <TreeNode
          node={value}
          path={[]}
          isRoot={true}
        />
      </ul>
    </div>
  );
};

export const Tree: React.FC<TreeProps> = (props) => {
  return (
    <TreeProvider {...props}>
      <TreeContent {...props} />
    </TreeProvider>
  );
};