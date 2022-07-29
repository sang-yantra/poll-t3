import { PrismaClient } from '@prisma/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {prisma} from "../db/client"
import { trpc } from '../utils/trpc'

const Home: NextPage = (props: any) => {

  const {data , isLoading} = trpc.useQuery(["questions"])

  if(isLoading || !data){
    return (<div>Loading...</div>)
  }else{
    return (<div>{data[0]?.question}</div>)
  }
}

// export const getServerSideProps = async () => {

//   const questions = await prisma.pollQuestion.findMany();
//   return {
//     props : {
//       questions: JSON.stringify(questions)
//     }
//   }
// }

export default Home
