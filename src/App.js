
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Portal from './Portal/Portal';
import Login from './Login';
import Studentlist from './Teacher/Studentlist';
import Teacherlist from './Teacher/Teacherlist';
import Createuser from './Teacher/Createstudent';
import Viewstudent from './Teacher/Viewstudent';
import Editstudent from './Teacher/Editstudent';
import Viewteacher from './Teacher/Viewteacher';
import Editteacher from './Teacher/Editteacher';
import Createteacher from './Teacher/Createteacher';
import Studentdb from './Student/Studentdb';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/portal' element={<Portal />}>
            <Route path="student" element={<Studentdb />} />
            <Route path="studentlist" element={<Studentlist />} />
            <Route path="teacherlist" element={<Teacherlist />} />
            <Route path="createstudent" element={<Createuser />} />
            <Route path="viewstudent/:id" element={<Viewstudent />} />
            <Route path="editstudent/:id" element={<Editstudent />} />
            <Route path="createteacher" element={<Createteacher />} />
            <Route path="viewteacher/:id" element={<Viewteacher />} />
            <Route path="editteacher/:id" element={<Editteacher />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
