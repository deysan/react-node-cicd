import React from 'react';
import { Counter } from './components/Counter';
import { useFetchData } from './hook/useFetchData';

export default function App() {
  const { data, loading, error } = useFetchData('/data');

  return (
    <>
      <h1>Hello, world!</h1>

      <Counter />

      <div className="center">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <p>{data}</p>}
      </div>
    </>
  );
}
