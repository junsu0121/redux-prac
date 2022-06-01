import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";
import FruitMain from "./FruitMain";
import VegeMain from "./VegeMain";
import FruitDetail from "./FruitDetail";
import VegeDetail from "./VegeDetail";
import FruitAdd from "./FruitAdd";
import VegeAdd from "./VegeAdd";

function App() {
  return (
    <Container>
      <Menu></Menu>
      <Switch>
        <Route path="/" exact>
          <FruitMain />
        </Route>
        <Route path="/vegemain" exact>
          <VegeMain />
        </Route>
        <Route path="/fruitadd" exact>
          <FruitAdd />
        </Route>
        <Route path="/vegeadd" exact>
          <VegeAdd />
        </Route>
        <Route path="/fruitdetail" component={FruitDetail}></Route>
        <Route path="/vegedetail" component={VegeDetail}></Route>
      </Switch>
    </Container>
  );
}

export default App;

const Container = styled.div``;
