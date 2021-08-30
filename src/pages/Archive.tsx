import PageContainer from "../components/layout/PageContainer";
import MainArea from "../components/layout/MainArea";
import Sidebar from "../components/layout/Sidebar";

const Archive = () => {
  return <PageContainer left={<Sidebar />} right={<MainArea />} />;
};

export default Archive;
