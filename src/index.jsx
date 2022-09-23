import ReactDOM from 'react-dom';
import './index.css'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
    </Routes>
    </BrowserRouter>,
document.getElementById('root')


);


