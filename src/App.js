import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import memories from './assets/images/memories.jpeg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './actions/posts'

import useStyles from './styles'

function App() {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  const dispatch = useDispatch()
  const classes = useStyles()
  const [currentId, setCurrentId] = useState(0)
  // const [fetchedData, setFetchedData] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img className={classes} src={memories} alt='memories' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
