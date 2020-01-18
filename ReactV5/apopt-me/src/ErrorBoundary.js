import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false
  };

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary caught an error", error, info);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.
          <Link to="/">Click Here</Link> to go to the home page or wait for five
          seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
