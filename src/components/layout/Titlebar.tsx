type TitlebarProps = {
  children: React.ReactNode;
  title: string;
};

const Titlebar = ({ title = "Heading", children }: TitlebarProps) => {
  return (
    <div className="title-bar">
      <div className="title-bar__heading">
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Titlebar;
