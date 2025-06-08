import { useState } from "react";
import ItemForm from "./ItemForm";

function Menu({ setItems }) {
  return <ItemForm setItems={setItems} />;
}

export default Menu;
