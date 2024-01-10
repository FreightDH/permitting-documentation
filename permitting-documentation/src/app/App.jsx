import { Description, Footer, Intro, Request, Services, Stages } from 'widgets';

const App = () => {
  return (
    <>
      <main>
        <Intro />
        <Description />
        <Services />
        <Stages />
        <Request />
      </main>
      <Footer />
    </>
  );
};

export default App;
