import "./layout.scss";

type PageContainerProps = {
  left: React.ReactChild;
  right: React.ReactChild;
};

const PageContainer = ({ left, right }: PageContainerProps) => {
  return (
    <section className="row page-container">
      <div className="col-3">{left}</div>
      <div className="col">{right}</div>
    </section>
  );
};

export default PageContainer;
