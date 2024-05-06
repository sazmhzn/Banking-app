import React from 'react'
import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {

  // const loggedIn = {firstName: 'Wonjala', lastName: 'Joshi', email: 'wonju2joshi@gmail.com'};

  const loggedIn = await getLoggedInUser();

  console.log(loggedIn || "no user found");
//what will this loggedIn return?
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your accoutno and transactions effeciently"
          />

        <TotalBalanceBox 
          accounts={[]}
          totalBanks = {1}
          totalCurrentBalance={1221.27}
        />      
        </header>
        Recent transaction
      </div>

      <RightSidebar 
      user={loggedIn} 
      transactions={[]}
      banks={[{currentBalance: 123.50}, {currentBalance: 123.50}]}
      />
    </section>
  )
}

export default Home