import AddIngredient from "./components/AddIngredient/AddIngredient";
import Container from "./components/Container/Container";
import Forms from "./components/Forms/Forms";
import NewIngredientsList from "./components/NewIngredientsList/NewIngredientsList";

const App = () => {
  return (
      <Container>
        <Forms />
        <AddIngredient />
        <NewIngredientsList />
      </Container>
  );
};

export default App;