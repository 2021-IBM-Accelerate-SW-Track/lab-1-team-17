import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField  from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

//import FormHelperText from '@material-ui/core/FormHelperText';
import Select  from '@material-ui/core/Select';
//import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'
import { statement } from '@babel/template';

const useStyles = makeStyles ((theme) => ({
    root : {
        flexGrow: 1,
        margin: theme.spacing(1),
        width: '25ch',
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,

    },
}));



const Form = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        status: '',

    });

    const handleChange = (event) => {
        const status = event.target.status;
        setState({
            ...state,
            [status]: event.target.value,
        });
    };

    return(
        <FormControl className={classes.root}>
            <Grid container spacing ={4}> 

            <TextField 
            error
            id="outlined-basic"
            class="todo-input"
            label="Todo List"
            defaultValue="Wake Up!!"
            helperText="Take a nap"
            variant="outlined"
            
            />
            <Button variant="contained"
            color="Primary"
            class="todo-button"
            type="submit">
                 Submit
            </Button>
            
                <FormControl variant="outlined" className={classes.FormControl}>
                    <InputLabel htmlFor="outlined-status-native-simple">Status</InputLabel>
                    <Select
                        native
                        value={statement.status}
                        onChange ={handleChange}
                        label="Status"
                        inputProps={{
                            name: 'status',
                            id: 'outlined-status-native-simple',
                        }}
                    >
                        <option aria-label="None" value=""/>
                        <option value = "Complete">Complete</option>
                        <option value ="Uncomplete">Uncomplete</option>

                    </Select> 


                </FormControl>

            </Grid>
        </FormControl>

    );
}

export default Form;