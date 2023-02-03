import "./App.css";
import ProductoCard from "./componentes/ProductoCard";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./productos.json";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

function App() {
  const titulo = "Galería de Imágenes con React";
  const txtFooter = "Desarrollado por VVA";

  const productos = data.products.map((prod) => (
    <ProductoCard
      title={prod.title}
      imagen={prod.images[0]}
      descripcion={prod.description}
      key={prod.id}
      id={prod.id}
    />
  ));

  return (
    <div className="App">
      <Header titulo={titulo} />
      <div className="App-header">{productos}</div>
      <Footer text={txtFooter} />
    </div>
  );
}

export default App;
