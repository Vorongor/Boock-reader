import FirstIn from 'components/FirstModal/FirstModal';
import LibraryBlock from 'components/LibraryBlock/LibraryBlock';
import React from 'react';
import { useSelector } from 'react-redux';

function Library() {
  const firstIn = useSelector(state => state.modal.firstIn);

  return (
    <div
      className="boo"
      style={{ backgroundColor: '#f6f7fb', height: '100vh' }}
    >
      {firstIn && <FirstIn />}
      <LibraryBlock />
    </div>
  );
}
export default Library;
