import "./layout.scss";

type PageContainerProps = {
  side: React.ReactChild;
  main: React.ReactChild;
};

const PageContainer = ({ side, main }: PageContainerProps) => {
  return (
    <section className="page-container">
      <div className="row g-0">
        {side}
        {main}
      </div>
    </section>
  );
};

export default PageContainer;
