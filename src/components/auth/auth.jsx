import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
    // Add your authentication logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-header">
            <h1 className="auth-title">Sign in to your account</h1>
            <p className="auth-subtitle">
              Enter your details below to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="mb-4">
              <label htmlFor="email" className="form-label auth-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control auth-input"
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label auth-label">
                Password
              </label>
              <input
                type="password"
                className="form-control auth-input"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <button type="submit" className="btn btn-primary auth-button w-100" onClick={() => navigate('/home')}>
                Sign up
              </button>
            </div>

            <div className="auth-footer">
              <a href="#" className="auth-link">
                Forgot your password?
              </a>
            </div>

            <div className="auth-divider">
              <span>or</span>
            </div>

            <div className="auth-alternative">
              <p className="text-center mb-0">
                Don't have an account?{' '}
                <a href="#" className="auth-link-bold">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="auth-security">
          <div className="d-flex align-items-center justify-content-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0L2 3V7C2 10.866 4.634 14.168 8 15C11.366 14.168 14 10.866 14 7V3L8 0Z"
                fill="#4CAF50"
              />
            </svg>
            <span className="auth-security-text">
              Secured by 256-bit SSL encryption
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

