function App() {
  return (
    <div id='main-page'>
      <div className='content-row main-page-header'>
        <p className='logo'>TripStarter</p>
        <div className='main-page-nav'>
          <a>Why TripStarter?</a>
          <a>FAQ</a>
          <a>About</a>
          <div className='main-page-nav-buttons'>
            <button className='main-page-sign-in-button'>Log In</button>
            <button className='main-page-sign-in-button'>Sign Up</button>
          </div>
        </div>
      </div>
      <div className='content-row main-page-body'></div>
      <div className='main-page-problem'>
        <div className='main-page-problem-text'>
            <h2>The Problem</h2>
            <h1>Trip planning often fails, before it even starts</h1>
            <p>
            Many find it true that the toughest (and most boring) part of starting a group trip is figuring out the dates
            everyone can agree on.
            </p>
            <p>
            This needs to happen before logistics (lodging, flights, and itinerary planning) can even start to be
            coordinated.
            </p>
            <p>
            Once the ball gets rolling, planning these logistics is straightforward as there already exist a plethora of
            solutions to choose from.
            </p>
        </div>
      </div>
      <div className='content-row main-page-solution'></div>
    </div>
  );
}

export default App;
