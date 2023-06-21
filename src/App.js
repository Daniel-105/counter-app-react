import { useState } from "react";
// import Demo from "./Components/Demo";
import {
  Box,
  Button,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          //style={{ backgroundColor: "green" }}
          height={"80vh"}
        >
          <h1>Counter app</h1>
          <h2>{count}</h2>
          <Box
            //style={{ backgroundColor: "red" }}
            flexDirection="row"
            justifyContent={"space-around"}
            display="flex"
            className="buttons"
          >
            <Box
              m={5}
              p={5}
              //style={{ backgroundColor: "orange" }}
            >
              <Button
                variant="contained"
                onClick={() => setCount(count + 1)}
                style={{ fontSize: "2em" }}
              >
                Increase
              </Button>
            </Box>
            <Box
              m={5}
              p={5}
              // style={{ backgroundColor: "orange" }}
            >
              <Button
                variant="contained"
                color="secondary"
                // style=a{{ padding: "14px" }}
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
                style={{ fontSize: "2em" }}
              >
                Decrease
              </Button>
            </Box>
            <Box
              m={5}
              p={5}
              //style={{ backgroundColor: "orange" }}
            >
              <Button
                variant="contained"
                onClick={() => setCount(count - count)}
                disabled={count === 0}
                style={{ fontSize: "2em" }}
              >
                Reset
              </Button>
            </Box>
          </Box>
          {/* <Demo /> */}
        </Box>
      </Container>
    </div>
  );
}

export default App;
