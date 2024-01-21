const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>Featured products</h2>
    </div>
  );
};

export default ProductLayout;
