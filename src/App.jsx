import Profile from './components/Profile/Profile'
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics'
import data from './data/data.json'

import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json'

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json'

import Section from './components/Section';

export default function App() {
    return (
        <div>
            <Section title={'Task 1'}>
                 <Profile
                    avatar={user.avatar}
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    stats={user.stats}
            />
            </Section>
            
            <Section title={'Task 2'}> 
                <Statistics
                    title={'Upload stats'}
                    stats={data}
                />
            </Section>

            <Section title={'Task 3'}>
                <FriendList friends={friends}/>
            </Section>

            <Section title={'Task 4'}>
                <TransactionHistory items={transactions}/>
            </Section>            
        </div>   
    )
 }