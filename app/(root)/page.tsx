import React from 'react'
import HeaderBox from '../../components/HeaderBox';
import TotalBalanceBox from '../../components/TotalBalanceBox';

const Home = () => {

  const loggedIn = {firstName: 'Wonjala'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your accoutno and transactions effeciently"
          />

        <TotalBalanceBox 
          accounts={[]}
          totalBanks = {1}
          totalCurrentBalance={1221.27}
        />      
        </header>
      </div>
    </section>
  )
}

export default Home