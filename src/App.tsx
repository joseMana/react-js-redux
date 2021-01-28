import React, { useState } from 'react';
import './App.css';
import { Grid, Button, Typography, TextField, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { AddCounterAction, DecrementAction, IncrementAction, ResetAction } from './redux/ActionCreators';
import { CounterState } from './redux/CounterState';
import { RootState } from './redux/Store';


export default () => {

  const [NewCounter, setNewCounter] = useState<number>(0);
  const dispatch = useDispatch();
  const counter = useSelector<RootState>(state => state.Counter.Counter);
  const sample = useSelector<RootState>(state => state.Sample.test);
  // const counter = useSelector<CounterState>(state => state.Counter);

  const handleIncrement = () => dispatch(IncrementAction());
  const handleDecrement = () => dispatch(DecrementAction());
  const handleReset = () => dispatch(ResetAction());

  const handleSubmitCounter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(AddCounterAction(NewCounter))
  }

  return (
    <div className="App">
      <div className="App-content">
        <Grid>
          <Grid item>
            <Paper style={{margin: 20}}>
              {sample}
              <form onSubmit={handleSubmitCounter}>
                <TextField
                  value={NewCounter}
                  id="counterId"
                  label="Input Counter"
                  variant="filled"
                  color="secondary"
                  onChange={(e) => setNewCounter(+e.target.value)}
                />
              </form>
              <Typography variant="h2" >Counter: {counter}</Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Grid container spacing={2}>
              <Grid item xs>
                <Button variant="contained" onClick={handleIncrement} >INCREMENT </Button>
              </Grid>
              <Grid item xs>
                <Button variant="contained" color="secondary" onClick={handleDecrement}>DECREMENT</Button>
              </Grid>
              <Grid item xs>
                <Button variant="contained" color="primary" onClick={handleReset}>RESET</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


