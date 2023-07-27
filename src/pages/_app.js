import React from 'react';
import '@/styles/style.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Layout } from '@/components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp