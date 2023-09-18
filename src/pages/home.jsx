import Intro from 'components/Intro/Intro';
import LibraryBlock from 'components/LibraryBlock/LibraryBlock';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Home() {
  const userAuthDone = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      {userAuthDone ? (
        <div>
          <Link to="library">Liba</Link>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
}
export default Home;
