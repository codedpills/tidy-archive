import "./layout.scss";

type PageContainerProps = {
  left: React.ReactChild;
  right: React.ReactChild;
};

const PageContainer = ({ left, right }: PageContainerProps) => {
  return (
    <section className="page-container">
      <div className="row g-0">
        {left}
        {right}
      </div>
    </section>
  );
};

export default PageContainer;
