import "./layout.scss";

type PageContainerProps = {
  left: React.ReactChild;
  right: React.ReactChild;
};

const PageContainer = ({ left, right }: PageContainerProps) => {
  return (
    <section className="page-container overflow-hidden">
      <div className="row">
        <div className="col-2">{left}</div>
        <div className="col">{right}</div>
      </div>
    </section>
  );
};

export default PageContainer;
