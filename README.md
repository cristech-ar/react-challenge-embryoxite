
# React Challenge Embryoxite - Cristian Ríos 🔧

![React](https://img.shields.io/badge/React-v18.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-v4.0-blue) ![Vite](https://img.shields.io/badge/Vite-fast-lightblue) 

![Logo-Embryoxite-recortado](https://github.com/user-attachments/assets/362f9f97-1ec4-4452-9b53-d830ee9fc2e4)

## Overview
This project is a React application written in TypeScript, designed to manage and display a tree structure with data stored in localStorage. The app features a clean and modern UI inspired by Apple's typography and design standards. Users can:

- View the tree in a read-only mode.
- Add and delete nodes in an editable mode.
- Expand and collapse individual nodes or the entire tree.
- Enjoy real-time notifications and smooth animations.

The app leverages Material UI (MUI) components for a polished user experience and integrates Vite for blazing-fast development and optimized production builds.

---

## Features 🌟

### Tree Component
- **Dynamic Properties**:
  - `title`: Displays the root node name.
  - `value`: Accepts a JSON structure representing the tree.
  - `onChange`: Callback triggered with the updated JSON on node addition or deletion.
  - `editable`: Toggles between edit and view modes.

- **Editable Mode**:
  - Add a child node with a validated text input form.
  - Delete a node while preserving tree integrity.

- **View Mode**:
  - Display a structured tree using `<ul>` and `<li>` tags.
  - Collapse or expand nodes using intuitive icon buttons.

- **Global Controls**:
  - Collapse/Expand All functionality for efficient navigation.

### Notifications
- Real-time feedback with Snackbar for node additions and deletions.

### Persistent Data
- Automatically saves the tree structure in `localStorage` as JSON.

### Responsive UI
- Styled using MUI for a seamless, visually appealing interface.

### Storybook Integration
- Preview the `Tree` component in isolation using [Storybook](https://storybook.js.org/).

### Routing with React Router
- Two pages:
  - **Home**: A static landing page.
  - **Tree Page**: Displays the interactive tree component.
  - Navigation menu for switching between pages.

---

## Getting Started 🚀

### Prerequisites
- [Node.js](https://nodejs.org) v18+


### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/cristian-rios/react-challenge-embryoxite.git
   cd react-challenge-embryoxite
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```


## JSON Tree Structure
```json
{
  "title": "Tree Root",
  "children": [
    {
      "title": "Child Node 1",
      "children": []
    },
    {
      "title": "Child Node 2",
      "children": [
        {
          "title": "Grandchild Node",
          "children": []
        }
      ]
    }
  ]
}
```

---

## Scripts

| Command             | Description                        |
|---------------------|------------------------------------|
| `npm run dev`       | Starts the development server.     |
| `npm run build`     | Builds the application.            |
| `npm run preview`   | Previews the production build.     |
| `npm run storybook` | Runs Storybook for components.     |

---


## Author
**Cristian Ríos**  
Software Developer from Argentina 🇦🇷  
Feel free to connect on [LinkedIn](https://www.linkedin.com/in/christian-rios-dev/).

---

## Preview

https://challenge-embryoxite.crisdev.tech


![capture](https://github.com/user-attachments/assets/d35087b1-861f-4c86-8c24-d10d88cfebff)

