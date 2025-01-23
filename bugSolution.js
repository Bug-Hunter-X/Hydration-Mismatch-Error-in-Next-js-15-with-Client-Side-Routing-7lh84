```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <p>Data from API: {data.message}</p>
    </div>
  );
}

// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the API!' });
}
```