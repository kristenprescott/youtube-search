import "./App.css";
import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";

// const App = () => {
//   return (
//     <div>
//       <h1>Youtube Clone</h1>
//     </div>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <Grid justify="center" container spacing={16}>
        <Grid item xs={11}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              {/* SEARCHBAR */}
            </Grid>
            <Grid item xs={8}>
              {/* VIDEO DETAILS */}
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
