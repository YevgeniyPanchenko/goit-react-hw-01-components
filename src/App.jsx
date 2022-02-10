import Profile from './components/Profile/Profile'
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics'
import data from './data/data.json'

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json'

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json'

import Section from './components/Section/Section';

export default function App() {
    return (
        <div>
            <Section>
                 <Profile
                    avatar={user.avatar}
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    stats={user.stats}
            />
            </Section>
            
            <Section> 
                <Statistics
                    title={'Upload stats'}
                    stats={data}
                />
            </Section>

            <Section>
                <FriendList friends={friends}/>
            </Section>

            
                <TransactionHistory items={transactions}/>
                    
        </div>   
    )
 }