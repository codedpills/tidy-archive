import { useQuery, gql, useMutation } from "@apollo/client";

import PageContainer from "../components/layout/PageContainer";
import MainArea from "../components/layout/MainArea";
import Sidebar from "../components/layout/Sidebar";

import { Frontpage } from "../types/frontpage";


const Archive = () => {

  const GET_FRONTPAGES_AND_ARCHIVED = gql`
    query getFrontpagesAndArchived {
      frontpages {
        id
        title
        icon
      }
      archived {
        id
        title
        icon
      }
    }
  `;

  const ARCHIVE_FRONTPAGE = gql`
    mutation ArchiveMutation($archiveId: String!) {
      archive(id: $archiveId)
    }
  `;

  const RESTORE_FRONTPAGE = gql`
    mutation RestoreMutation($restoreId: String!) {
      restore(id: $restoreId)
    }
  `;

  const {
    loading: fetchLoading,
    error: fetchError,
    data: fetchData,
  } = useQuery(GET_FRONTPAGES_AND_ARCHIVED);

  const archived = fetchData?.archived || [];
  const frontpages = fetchData?.frontpages || [];

  const [archiveFP] =
    useMutation(ARCHIVE_FRONTPAGE, {
      refetchQueries: [
        GET_FRONTPAGES_AND_ARCHIVED, 
        'getFrontpagesAndArchived' 
      ],
    });

  const [restoreFP] =
    useMutation(RESTORE_FRONTPAGE, {
      refetchQueries: [
        GET_FRONTPAGES_AND_ARCHIVED, 
        'getFrontpagesAndArchived' 
      ],
    });


  const handleArchive = (id: string) => {
    archiveFP({ variables: { archiveId: id } });
  };

  const handleRestore = (id: string, collectionLetter: string) => {
    restoreFP({ variables: { restoreId: id } });
  };

  if (fetchLoading) return <p>Loading...</p>;
  if (fetchError) return <p>Oops! something went wrong. ${fetchError}</p>;

  const sortedArchived = Array(26)
    .fill(0)
    .map((i) => new Array<Frontpage>());

  archived.forEach((archivedFrontpage: Frontpage) => {
    const index = archivedFrontpage.title.toLowerCase().charCodeAt(0) - 97;
    sortedArchived[index].push(archivedFrontpage);
  });

  
  return (
    <PageContainer
      side={
        <Sidebar frontpages={frontpages} handleArchive={handleArchive} />
      }
      main={
        <MainArea
          archivedFrontpages={sortedArchived}
          handleRestore={handleRestore}
        />
      }
    />
  );
};

export default Archive;
