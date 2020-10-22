import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const NotFound = () => (
  <Layout>
    <h2>404 - Not Found!</h2>
    <Link to="/">Return to Homepage</Link>
  </Layout>
);
