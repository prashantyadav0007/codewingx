import React from 'react';

// Import components with error checking and proper file extensions
import Header from './Components/Header/Header';
import About from './Components/About/About'; // Updated path with subfolder
// import Features from './Components/Features/Features';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';

// Import global styles
import './App.css';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component rendering error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          color: 'red', 
          border: '1px solid red', 
          borderRadius: '4px',
          margin: '10px 0',
          backgroundColor: '#ffe6e6'
        }}>
          <h3>Component Error</h3>
          <p>Failed to render: {this.props.componentName}</p>
          <details>
            <summary>Error Details</summary>
            <pre style={{ fontSize: '12px', overflow: 'auto' }}>
              {this.state.error?.toString()}
            </pre>
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}

// Debug component imports (remove in production)
console.log('Component Import Check:', {
  Header: typeof Header,
  About: typeof About,
  // Features: typeof Features,
 
  Services: typeof Services,
  Footer: typeof Footer
});

// Safe Component Wrapper
function SafeComponent({ children, name }) {
  return (
    <ErrorBoundary componentName={name}>
      {children}
    </ErrorBoundary>
  );
}

function App() {
  return (
    <div className="App">
      {/* Header section */}
      <SafeComponent name="Header">
        <Header />
      </SafeComponent>

      {/* Main content */}
      <main>
        <SafeComponent name="About">
          <About />
        </SafeComponent>
{/*         
        <SafeComponent name="Features">
          <Features />
        </SafeComponent> */}
        
      
        
        <SafeComponent name="Testimonials">
          <Services />
        </SafeComponent>
      </main>

      {/* Footer section */}
      <SafeComponent name="Footer">
        <Footer />
      </SafeComponent>
    </div>
  );
}

export default App;