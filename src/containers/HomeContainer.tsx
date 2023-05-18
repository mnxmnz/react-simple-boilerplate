import { useState, useEffect } from 'react';

import { getFruits } from '../apis/fruits';
import Home from '../components/Home';
import { FruitsType } from '../types/fruits';

function HomeContainer() {
  const [fruits, setFruits] = useState<FruitsType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getFruits();
      setFruits(data);
    }
    // fetchData();
  }, []);

  return <Home data={fruits} />;
}

export default HomeContainer;
