import Intro from 'components/Intro/Intro';
import TrainingBlock from 'components/TrainingBlock/TrainingBlock';
import Header from 'layuot/Header';
// import LibraryBlock from 'components/LibraryBlock/LibraryBlock';
import React from 'react';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
function Home() {
  const userAuthDone = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      {userAuthDone ? (
        <div>
          <TrainingBlock />
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
}
export default Home;
