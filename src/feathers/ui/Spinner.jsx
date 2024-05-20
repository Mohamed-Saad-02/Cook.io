function Spinner() {
  return (
    <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-light-background border-t-light-primary" />
    </div>
  );
}

export default Spinner;
