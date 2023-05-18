import { FruitsType } from '../types/fruits';

function Home({ data }: { data: FruitsType[] }) {
  return (
    <>
      <p>Home</p>
      {data &&
        data.map(fruit => {
          return (
            <div key={fruit.id}>
              <p>{fruit.name}</p>
              <p>{fruit.quantity}</p>
            </div>
          );
        })}
    </>
  );
}

export default Home;
