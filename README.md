# AccuKnox-Dashboard
AccuKnox-Dashboard is a dynamic and interactive dashboard application that allows users to manage widgets across different categories. The application provides features for adding, removing, and searching widgets, as well as dynamically updating the selection of widgets.
It is built with React, Redux, and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## Features

- **Widget Management**: Add, remove, and search widgets within categories.
- **Offcanvas Navigation**: Manage widget selections using an offcanvas menu.
- **Category Handling**: View and interact with widgets grouped by categories.
- **Responsive Design**: A mobile-friendly layout for improved usability on all devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A state management tool for managing and centralizing application state.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **JavaScript**: For all dynamic behaviors and logic.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) (which includes npm).
- **Git**: [Download and install Git](https://git-scm.com/) (Optional, for cloning via GitHub).

### Installation

#### Option 1: Extract the Zipped Folder
    Extract the folder from the zipped file [here](https://drive.google.com/file/d/1YwlhQcP2gXZqE2qD_WPLbBdaFwnnlqHo/view?usp=sharing)
    cd path-to-extracted-folder/AccuKnox-Dashboard
    npm install


#### Option 2: Clone from GitHub

1. **Clone the Repository**

   ```bash
    git clone https://github.com/Neche-Stephen/AccuKnox-Dashboard.git
    cd AccuKnox-Dashboard
    npm install 
    ```

### Running the Application
    npm run dev
    After it runs, visit: http://localhost:5173 in your browser

## Project Structure
```bash
├── public/                       # Static assets
├── src/                          # Main source code
│   ├── components/
│   │   ├── Dashboard.jsx         # Main dashboard component
│   │   ├── Widget.jsx            # Widget component
│   │   ├── AddWidget.jsx         # Modal for adding widgets
│   ├── store/
│   │   ├── index.js              # Redux store setup
│   │   ├── widgetsSlice.js       # Redux slice for widget management
│   ├── utils/
│   │   ├── DonutChart.jsx        # Utility for donut chart
│   │   ├── BarChart.jsx          # Utility for bar chart
│   │   ├── ColorPalette.jsx      # Utility for chart
│   ├── App.jsx                   # Main application entry point
│   ├── main.jsx                  # Entry point for rendering the app
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
└── .gitignore                    # Files to ignore in git
└── ...                           # Additional configurations
```


