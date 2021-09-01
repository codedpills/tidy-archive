import { useState, useEffect } from "react";

import PageContainer from "../components/layout/PageContainer";
import MainArea from "../components/layout/MainArea";
import Sidebar from "../components/layout/Sidebar";

import { Frontpage } from "../types/frontpage";

const sampleFrontpages = [
  { id: "1", title: "Folder 1", icon: "bi-folder" },
  { id: "2", title: "Folder 2", icon: "bi-folder-x" },
  { id: "3", title: "Cash 1", icon: "bi-cash" },
  { id: "4", title: "Calender 2", icon: "bi-calender2" },
  { id: "5", title: "Cloud 1", icon: "bi-cloud-minus" },
  { id: "6", title: "Emoji 5", icon: "bi-emoji-smile" },
];
const sampleArchived = [
  { id: "7", title: "App indicator", icon: "bi-app-indicator" },
  { id: "8", title: "Award 1", icon: "bi-award" },
  { id: "9", title: "Broadcast 1", icon: "bi-broadcast" },
  { id: "10", title: "Image 1", icon: "bi-image" },
  { id: "11", title: "Subtract 1", icon: "bi-subtract" },
  { id: "12", title: "Wallet 2", icon: "bi-wallet2" },
  { id: "13", title: "Telephone", icon: "bi-telephone" },
];

type ArchiveState = {
  frontpages: Frontpage[];
  archived: Frontpage[][];
};

const Archive = () => {
  const initialState: ArchiveState = {
    frontpages: [],
    archived: Array(26)
      .fill(0)
      .map((i) => []),
  };

  const [state, setState] = useState<ArchiveState>(initialState);

  useEffect(() => {
    const sortedArchived = Array(26)
      .fill(0)
      .map((e) => new Array<Frontpage>());
    sampleArchived.forEach((archivedFrontpage: Frontpage) => {
      const index = archivedFrontpage.title.toLowerCase().charCodeAt(0) - 97;
      sortedArchived[index].push(archivedFrontpage);
    });
    setState({ ...state, archived: sortedArchived });
  }, []);

  return (
    <PageContainer
      side={<Sidebar />}
      main={<MainArea archivedFrontpages={state.archived} />}
    />
  );
};

export default Archive;
