import * as React from 'react'
import { AppBar, IconButton, Theme, Toolbar, Typography } from '@material-ui/core'
import { Route, Switch, useHistory } from 'react-router'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  roboto: {
    fontFamily: 'gill-sans-roman',
    fontSize: '1.4rem'
  },
  contrastButton: {
    color: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(-2)
  }
}))

const BackButton: React.FC<{}> = () => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <IconButton aria-label='back' className={classes.contrastButton} onClick={() => history.goBack()}>
      <ArrowBackIcon />
    </IconButton>
  )
}

export function HeaderAppBar() {
  const classes = useStyles()
  return (
    <AppBar position='sticky'>
      <Toolbar variant='dense'>
        <Switch>
          <Route path='/claim/'>
            <BackButton />
            <Typography variant='h3' className={classes.roboto}>
              Claim
            </Typography>
          </Route>
          <Route path='/evidence/'>
            <BackButton />
            <Typography variant='h3' className={classes.roboto}>
              Evidence
            </Typography>
          </Route>
          <Route path='/submit/claim'>
            <BackButton />
            <Typography variant='h3' className={classes.roboto}>
              Submit Claim
            </Typography>
          </Route>
          <Route path='/submit/evidence/'>
            <BackButton />
            <Typography variant='h3' className={classes.roboto}>
              Submit Evidence
            </Typography>
          </Route>
          <Route path='/review'>
            <BackButton />
            <Typography variant='h3' className={classes.roboto}>
              Review Evidence
            </Typography>
          </Route>
          <Route path='/register'>
            <BackButton />
            <Typography variant='h3' className={classes.roboto}>
              Register an Account
            </Typography>
          </Route>
          <Route path='/login'>
            <BackButton />
            <Typography variant='h3' className={classes.roboto}>
              Log in
            </Typography>
          </Route>
          <Route path='/'>
            <Typography variant='h3' className={classes.roboto}>
              Claims
            </Typography>
          </Route>
        </Switch>
      </Toolbar>
    </AppBar>
  )
}
