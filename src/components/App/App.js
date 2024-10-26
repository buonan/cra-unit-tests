import "../../styles.css";
import ButtonComponent from "../Button/Button";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ButtonComponent count={10}/>
    </div>
  );
}
