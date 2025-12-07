import "./App.css";
import Login from "./components/login/Login.jsx";
import Display from "./components/display/Display.jsx";
function App() {
  return (
    <>
      <h2 className="mb-4 text-5xl capitalize">
        implement useForm, yup and redux
      </h2>
      <div className="flex gap-x-7">
        <Login />
        <Display />
      </div>
    </>
  );
}

export default App;
