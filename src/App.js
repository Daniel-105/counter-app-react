import { useState } from "react";
// import Demo from "./Components/Demo";
import { Box, Button, Container } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        <h1>Counter app</h1>
        <h2>{count}</h2>
        <Box display="flex" bgcolor="primary" className="buttons">
          <Box m={2} p={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCount(count + 1)}
            >
              Increase
            </Button>
          </Box>
          <Box m={2} p={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              Decrease
            </Button>
          </Box>
          <Box m={2} p={2}>
            <Button
              variant="contained"
              onClick={() => setCount(count - count)}
              disabled={count === 0}
            >
              Reset
            </Button>
          </Box>
        </Box>
        {/* <Demo /> */}
      </Container>
    </div>
  );
}

export default App;
