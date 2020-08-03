import React, {useEffect, useState} from 'react'

function Counter({count}: { count?: number }) {
  useEffect(() => {
    console.log("### useEffect", count);
  }, [count])
  return <div>Count: {count}</div>
}

export default function Hello() {
  const [version, setVersion] = useState(0);

  return <div>
    <h1>{JSON.stringify(version)}</h1>
    <button onClick={() => setVersion(v => v + 1)}>Force Reload</button>
    <Counter/>
  </div>
};
