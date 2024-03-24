import React, { useEffect, useState } from 'react';

function Counter({ label, count }: { label: string, count?: number }) {
  useEffect(() => {
    console.log(`### ${label} useEffect`, count);
  }, [count])
  return <div>{label} Count: {count}</div>
}

export default function Hello() {
  const [version, setVersion] = useState<number>();

  return <div>
    <button onClick={() => setVersion(v => (v ?? 0) + 1)}>Force Reload</button>
    <Counter label="counter1" />
    <Counter label="counter2" count={version} />
  </div>
};
