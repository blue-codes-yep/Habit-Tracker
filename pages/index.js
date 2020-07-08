import Head from 'next/head'
import Layout from '../components/Layout'
import HabitList from '../components/HabitList'
import HabitForm from '../components/HabitForm'

import { useState } from 'react'
import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
}
`

function Home() {
  const { data, loading, error } = useQuery(HELLO_QUERY)
  const [habits, setHabits] = useState(['Get money'])
  if (loading) return <div />
  console.log(data);
  return (
    <Layout>
      <Head>
        <title> Habit Tracker </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {data.sayHello}
        </h1>

      </main>
      <div className="list">
        <HabitForm setHabits={setHabits} />
        <HabitList habits={habits} />
      </div>
      <style jsx>{`
  
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

  
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          } 
        }

        .list {
          max-width: 600px;
          margin: 0 auto;
        }
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout >
  )
}

export default withApollo(Home);