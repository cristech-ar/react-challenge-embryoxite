import React from 'react';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-sf-pro-display font-bold text-gray-900 mb-6">
          Welcome to React Challenge - Embryoxite
        </h1>
        <div className="prose prose-lg">
          <p>
            This is a demonstration of a tree component built with React and TypeScript. 
            The component allows you to view, add, and remove nodes in a tree structure, 
            with all data being persisted in localStorage.
          </p>
          <br></br>
          <p>
            Key features include:
          </p>
          <ul>
            <li>- Add and remove nodes at any level</li>
            <li>- Collapse/expand functionality for better organization</li>
            <li>- Edit mode toggle for managing the tree structure</li>
            <li>- Persistent storage using localStorage</li>
            <li>- Responsive design for all screen sizes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};