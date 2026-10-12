interface LoadingSpinnerProps {
  message?: string;
}

export function LoadingSpinner({ message = "Carregando..." }: LoadingSpinnerProps) {
  return (
    <div className="loader-container">
      <div className="spinner" />
      <p>{message}</p>
    </div>
  );
}
