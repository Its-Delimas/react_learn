import './App.css';

/* props.children – sending content from different components */

function Son(props) {
  return (
    <div style={{ background: "lightgreen", padding: "10px", marginBottom: "10px" }}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  return (
    <div style={{ background: "orangered", padding: "10px" }}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default function Parent() {
  return (
    <div>
      <Son>
        <p>
          Written in parent component<br />
          but displayed in Son component
        </p>
      </Son>

      <Daughter>
        <p>
          Written in parent component<br />
          but displayed in Daughter component
        </p>
      </Daughter>
    </div>
  );
}
