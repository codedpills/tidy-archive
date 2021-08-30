type TitlebarProps = {
  children: React.ReactNode;
  heading: string;
};

const Titlebar = ({ heading = "Heading", children }: TitlebarProps) => {
  return (
    <div className="title-bar">
      <div className="title-bar__heading">
        <h2>{heading}</h2>
      </div>
      {children}
    </div>
  );
};

export default Titlebar;
