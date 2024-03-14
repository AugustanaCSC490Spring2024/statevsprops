import logo from './logo.svg';
import './App.css';
import { Typography, Box, Grid, Container, Card, CardContent, Button } from "@mui/material";
import { useState } from 'react';
import Labelexample from './labelexample';

function App() {

  const [num, updateNumber] = useState(0);

  return (
    <Container>
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop={10}
      >
        <Grid item xs={12}>
          <Labelexample color={'Green'} text={'Click meee '} number ={num}></Labelexample>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={()=> updateNumber(num+1)}>{'click'}</Button>
        </Grid>
        <Grid item xs={12}>
          <h2>{num}</h2>
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
