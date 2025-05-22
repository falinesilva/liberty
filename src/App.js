import "./style.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ItemForm from "./components/ItemForm";
import NetWorth from "./components/NetWorth";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <ItemForm />
      <NetWorth />
      <ItemList />
      <Footer />
      <Counter />
    </>
  );
}

export default App;
