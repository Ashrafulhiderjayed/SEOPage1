import { useState } from "react";

function About() {
  const [incompletes, setIncompletes] = useState([1, 2, 3, 4, 5]);
  const [done] = useState([1, 2, 3, 4, 5]);


  return (
    <div>
      <div style={{ display: "flex", gap: 20 }}>
        <div
          style={{ minHeight: 300, marginTop: 20, width: 300, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <h3 style={{ color: "green" }}>Incomplete</h3>
          {incompletes.map((incom, index) => {
            return (
              <>
                <div
                onClick={()=>{
                  alert(`incomplete ${index}`)
                }}
                  key={index}
                  style={{ border: "1px solid gray", padding: 10, marginTop: 20, cursor: "pointer",
                  }}
                >
                  <h4> Incomplete {incom}</h4>
                </div>
              </>
            );
          })}
        </div>
        <div
          style={{ minHeight: 300, marginTop: 20, width: 300, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <h3 style={{ color: "green" }}>Done</h3>

          {done.map((d, index) => {
            return (
              <>
                <div
                onClick={()=>{
                  alert(`done ${index}`)
                }}
                  key={index}
                  style={{ border: "1px solid gray", padding: 10, marginTop: 20, cursor: "pointer",
                  }}
                >
                  <h4> done {d}</h4>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;