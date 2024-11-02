import Navbar from "./components/Navbar";

function App({ element }) {
  return (
    <>
      <Navbar />
      <section>{element}</section>
    </>
  );
}

export default App;
