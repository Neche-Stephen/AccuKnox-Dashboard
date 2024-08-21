import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget';
import AddWidget from './AddWidgetModal';
import { updateWidgetSelection } from '../store/widgetsSlice'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useSelector((state) => state.widgets.categories);
  const [openCategory, setOpenCategory] = useState(null);
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State for offcanvas
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(categories)[0]); // First category selected by default
  const [pendingSelection, setPendingSelection] = useState({}); // Track pending widget selections


  const openModal = (category) => { // function to open modal for adding widget
    setOpenCategory(category);
  };

  const closeModal = () => { // function to close modal for adding widget
    setOpenCategory(null);
  };

  const handleSearchChange = (event) => { // function to handle searching of widgets
    setSearchTerm(event.target.value);
  };

  const filteredWidgets = (widgets) => { // function to filter widgets based on search term
    return widgets
      .filter((widget) => widget.selected) // Only show selected widgets
      .filter((widget) =>
        widget.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  // Function to toggle offcanvas
  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  // Function to filter widgets in offcanvas based on selected category
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle checkbox change in offcanvas
  const handleWidgetCheckboxChange = (category, widgetId, isSelected) => {
    setPendingSelection((prev) => ({
      ...prev,
      [widgetId]: { category, selected: isSelected },
    }));
    console.log(pendingSelection)
  };

  // Function to confirm widget selection in offcanvas
  const handleConfirmSelection = () => {
    Object.entries(pendingSelection).forEach(([widgetId, { category, selected }]) => {
      dispatch(updateWidgetSelection({ category, widgetId: Number(widgetId), selected }));
    });
    setPendingSelection({});
    toggleOffcanvas(); // Close offcanvas
    toast.success('Widget selection updated successfully!');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white shadow-md p-4 rounded-md mb-6">
        <div>
          <h1 className="text-xl font-semibold">Dashboard V2</h1>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            className="bg-blue-600 text-white rounded-md px-4 py-2"
            onClick={toggleOffcanvas}
          >
            Add Widget
          </button>
        </div>
      </nav>
      <div className="p-4">
        {Object.keys(categories).map((category) => {
          const widgets = filteredWidgets(categories[category]);

          return (
            <div key={category} className="mb-8">
              <h2 className="text-xl font-bold mb-4">{category.replace(/_/g, ' ')}</h2>
              <div className="flex flex-wrap gap-[10px]">
                {widgets.map((widget) => (
                  <Widget key={widget.id} widget={widget} category={category} />
                ))}
                {widgets.length === 0 && (
                  <div className='h-40 w-[30%] flex justify-center items-center'>
                    <p>No widgets found</p>
                  </div>
                )}
                <div className='bg-[#FAFAFA] h-40 border w-[30%] rounded-xl flex justify-center items-center'>
                  <button className='border px-3 py-2 rounded' onClick={() => openModal(category)}>+ Add Widget</button>
                </div>
              </div>
              {openCategory === category && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <AddWidget category={category} />
                    <button className="mt-2 text-red-500" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Offcanvas */}
      {showOffcanvas && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
          <div className="bg-white w-1/3 h-full p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add/Remove Widgets</h2>
            <div className="flex mb-4">
              {Object.keys(categories).map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 ${
                    selectedCategory === category ? 'bg-blue-600 text-white' : ''
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
            <div>
              {categories[selectedCategory].map((widget) => (
                <div key={widget.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={
                      pendingSelection[widget.id]?.selected ?? widget.selected
                    }
                    onChange={(e) =>
                      handleWidgetCheckboxChange(
                        selectedCategory,
                        widget.id,
                        e.target.checked
                      )
                    }
                    className="mr-2"
                  />
                  <span>{widget.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleConfirmSelection}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={toggleOffcanvas}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;