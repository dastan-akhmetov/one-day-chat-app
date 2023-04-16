import React from "react";

type Props = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>App crashed.</h1>;
    }

    return this.props.children;
  }
}
