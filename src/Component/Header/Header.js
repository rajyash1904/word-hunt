import { MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import React from "react";
import "./Header.css";
import categories from '../../data/category';

const Header = ({category, setCategory, word, setWord}) => {
    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: '#fff',
            },
          type: 'dark',
        },
      });

    const  handleChange =(language) =>{
        setCategory(language);
        setWord("");
    };
    return (
        <div className="header">
            <span className="title">{word ? word:"Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField className="search" id="standard-basic" label="Search a Word" value={word} onChange={(e)=> setWord(e.target.value)}/>
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e)=>handleChange(e.target.value)}>
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Header