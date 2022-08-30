import './App.css';
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  Outlet,
  useParams,
  useRoutes
} from 'react-router-dom';

//  Day 14 每日任務
const Logout = () => {
  const navigate = useNavigate();
  return <button type='button' onClick={() => navigate('/login')}>登出</button>
}

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面
      </p>
      <Logout />
    </>
  )
    ;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};


const Post = () => {
  return (
    <>
      <h2> post 頁面</h2>
      <Outlet />
    </>
  )
}

const PostId = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      PostId : {id}
    </>
  )
}

function App() {
  
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post  頁面</p>
          </NavLink>
          <NavLink to="/post/123">
            <p>Post  詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* Day 13 每日任務 */}
        <Routes>
          <Route path="Todo" element={<Todo />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="post" element={<Post />}>
            <Route path=":id"  element={<PostId /> } ></Route>
          </Route>
          {/* <Route path="*" element={ <h1> 404 </h1>}></Route> */}
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}
export default App;
