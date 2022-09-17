import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import useUsers from '../api/userApi';

const App = () => {
  const { users, isLoading } = useUsers();
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }

  useEffect(() => {
      setRobots(users);
  },[users]);

  if (isLoading) {
    return (<h1>Loading...</h1>);
  }

  const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox onChange={onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  )
}

export default App;