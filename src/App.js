import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {

  const fetchQuestions = async (category = '', difficulty = '') => {

    const {data} = await axios.get(`
    https://opentdb.com/api.php?amount=10${
      category && `&category=${category}` 
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  const [name,setName] = useState('');
  const [questions,setQuestions] = useState();
  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage: 'url(./ques1.png)'}}>
        <Header />
        <Routes>
            <Route exact path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/> } />
            <Route exact path='/quiz' element={<Quiz 
              name = {name}
              questions = {questions}
              score = {score}
              setScore = {setScore}
              setQuestions =  {setQuestions}
            /> } />
            <Route exact path='/result' element={<Result score={score} name={name}/> } />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
