import { useContext, createContext } from "react";

const Theme = createContext("light");

function DisplayTheme() {
  const theme = useContext(Theme);
  return <p>Active theme: {theme}</p>;
}

// ...
export default function App() {
  return (
    <Theme.Provider value="light">
        <DisplayTheme />
    </Theme.Provider>
  );
}
