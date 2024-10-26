import { useState } from "react";
import "../../styles.css";

const ButtonComponent = (props) => {
    var [count, setCount] = useState(props?.count||42);
    return (
      <>
        <div>
          <h2 className="counter" data-testid="counter-value">{count}</h2>
        </div>
        <style>{`
                  .counter-button {
                      font-size: 1rem;
                      padding: 5px 10px;
                      color:  #585858;
                  }
                `}</style>
        <button
          className="counter-button"
          onClick={() => {
            setCount(++count);
          }}
        >
          Click
        </button>
      </>
    );
  };

export default ButtonComponent;