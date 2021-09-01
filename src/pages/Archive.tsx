import PageContainer from "../components/layout/PageContainer";
import MainArea from "../components/layout/MainArea";
import Sidebar from "../components/layout/Sidebar";

const Archive = () => {
  return <PageContainer side={<Sidebar />} main={<MainArea />} />;
};

export default Archive;
