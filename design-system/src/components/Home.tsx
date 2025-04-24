const Home = () => (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-primary mb-6">Welcome, Riya! 🎨</h2>
      <p className="text-gray-600 mb-6">
        Use the sidebar to navigate between components and explore your design system.
      </p>
      <div className="text-center space-y-4">
        <p className="text-lg font-medium text-gray-700">
          <span className="text-secondary">Accordion</span> component helps to organize content.
        </p>
        <p className="text-lg font-medium text-gray-700">
          <span className="text-accent">Badge</span> component gives information highlights.
        </p>
        <button className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
  
  export default Home;
  