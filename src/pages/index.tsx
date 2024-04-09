import type { ReactElement } from 'react'
import Layout from '../app/components/layout'
import type { NextPageWithLayout } from './_app'
import './index.scss'
const Page: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page