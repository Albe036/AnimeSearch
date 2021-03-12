import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './header';
import Input from './input';
import Contents from './contents';
import Paginator from './paginator';
import Contact from './contact';
import Page from './page';
import Card from './card';


const App = () =>{

const [titulo, setTitulo] = useState("");
const [inicio, setInicio] = useState(0);
const [final, setFinal] = useState(10);
const [indice, setIndice] = useState(0);

const nextPrevious = (ini = 0, fin = 0) =>{
    setInicio(ini);
    setFinal(fin);
};

const nextPreviousbutton = (ini = 0, fin = 0) =>{
    setInicio(inicio + ini);
    setFinal(final + fin);
};

const ChangeTitulo = (e) =>{
    setTitulo(e.target.value);
};

const changeIndice = (ind) =>{
    setIndice(ind)
};

    return(
        <Router>
            <div className="container_main">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Input Ctitulo = {ChangeTitulo} />
                    <Contents titulo = {titulo} inicio={inicio} final={final} nextPrevious = {nextPrevious} cIndice={changeIndice}/>
                    <Paginator nextPrevious = {nextPrevious} nextButton = {nextPreviousbutton}/>
                </Route>
                <Route path="/contactme">
                    <Contact/>
                </Route>
                <Route path="/onpage">
                    <Page/>
                </Route>
                <Route path="/card">
                    <Card titulo={titulo} indice={indice}/>
                </Route>
            </Switch>
            </div>
        </Router>
    )
};

export default App;