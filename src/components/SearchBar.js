import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "10px 0px",
    paddingBottom: "20px",
    marginTop: "1%",
  },
  searchbar: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "1px 1px 0px rgba(0,0,0,0.7",
    outline: "none",
    width: "500px",
    height: "25px",
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
  },
  search: {
    paddingLeft: "10px",
    margin: "10px 0px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: "100px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = ({ onSubmit }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onKeyUp = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);

      setSearchTerm("");
    }
  };

  return (
    <Paper elevation={6} className={classes.search}>
      <div className={classes.wrapper}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{ margin: "1rem", fontSize: "2rem" }} />
          <TextField
            className={classes.searchbar}
            fullWidth
            label=""
            placeholder="Search for videos..."
            value={searchTerm}
            onChange={handleChange}
            onKeyUp={onKeyUp}
          />
        </div>
      </div>
    </Paper>
  );
};

export default SearchBar;
