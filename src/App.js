import { Route, Routes, Navigate, Link } from 'react-router-dom';

import AllTodos from './pages/AllTodos';
import TodoDetail from './pages/TodoDetail';
import NewTodo from './pages/NewTodo';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Descriptions from './components/descriptions/Descriptions';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/ToDoApp' element={<Navigate replace to='/todo' />} />
        <Route path='/' element={<Navigate replace to='/todo' />} />
        <Route path='/todo' element={<AllTodos />} />
        <Route path='/todo/:todoId' element={<TodoDetail />}>
          <Route
            path=''
            element={
              <div className='centered'>
                <Link className='btn--flat' to={`description`}>
                  Załaduj opisy
                </Link>
              </div>
            }
          />
          <Route path={`description`} element={<Descriptions />} />
        </Route>
        <Route path='/new-todo' element={<NewTodo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
