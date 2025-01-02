import './style.scss';

// Importing Components

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <button className="go-back-btn" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
