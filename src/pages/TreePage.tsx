import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { Tree } from '../components/Tree';
import { treeService } from '../services/treeService';
import type { TreeNode } from '../types/tree';

export const TreePage: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeNode>(treeService.getTree());
  const [editable, setEditable] = useState(false);

  const handleTreeChange = (newValue: TreeNode) => {
    setTreeData(newValue);
    treeService.saveTree(newValue);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6 flex justify-end">
          <FormControlLabel
            control={
              <Switch
                checked={editable}
                onChange={(e) => setEditable(e.target.checked)}
                color="primary"
              />
            }
            label="Edit Mode"
            className="font-sf-pro"
          />
        </div>
        
        <Tree
          title="My Tree"
          value={treeData}
          onChange={handleTreeChange}
          editable={editable}
        />
      </div>
    </div>
  );
};