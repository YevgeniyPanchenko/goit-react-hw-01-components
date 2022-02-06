import Profile from './components/Profile'
import user from './data/user.json';

import Statistics from './components/Statistics'
import data from './data/data.json'

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
        </div>
        
    )


 }