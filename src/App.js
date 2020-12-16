import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PokemonList from './pages/pokemon-list'
import PokemonDetails from './pages/pokemon-details'
import MyPokemonList from './pages/my-pokemon-list'
import NavigationMenu from './components/navigation-menu'
import backgroundImage from "./pattern.png";

const stylePage = {
  position: `relative`,
  paddingBottom: `4rem`,
  minHeight: `100vh`,
  background: `url(${backgroundImage})`
}

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="page page__pokemon" style={stylePage}>
          <Switch>
            <Route exact path="/" component={PokemonList}/>
            <Route path="/pokemon/:pokemon" component={PokemonDetails} />
            <Route path="/my-pokemon" component={MyPokemonList} />
          </Switch>
          <NavigationMenu />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
