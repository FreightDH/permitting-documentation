import { Intro } from 'sections';
import cl from './App.module.scss';

const App = () => {
  return (
    <>
      <main className={cl.page}>
        <Intro />
      </main>
    </>
  );
};

export default App;
