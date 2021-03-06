import * as React from 'react'
import { FormEvent, useEffect } from 'react'
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Fade,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  Popper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../utilities/auth'
import { useGet, useMutate } from 'restful-react'
import { User } from '../../openapi-types'
import CardFormField from './CardFormField'

interface LoginFormErrors {
  username?: string
  password?: string
  non_field_errors?: string
}

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(2),
    borderRadius: '20em'
  },
  loginCard: {
    margin: theme.spacing(1),
    borderRadius: '1em'
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center'
  },
  nameContainer: {
    marginLeft: theme.spacing(1)
  },
  popper: {
    zIndex: 1250
  },
  popperPaper: {
    padding: theme.spacing(1)
  },
  loginForm: {
    display: 'flex'
  },
  loginFormGrid: {
    margin: theme.spacing(1)
  },
  signUp: {
    padding: theme.spacing(1)
  },
  mobileAvatar: {
    alignSelf: 'center',
    margin: theme.spacing(2)
  }
}))

const AvatarPanel: React.FC<{}> = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [user, setUser] = React.useState<User>(null)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [loginUsername, setLoginUsername] = React.useState('')
  const [loginPassword, setLoginPassword] = React.useState('')
  const [formErrors, setFormErrors] = React.useState<LoginFormErrors>({})

  // @ts-ignore
  const {authToken, setAuthToken} = useAuth()

  const {refetch: refetchUser} = useGet({
    path: '/rest-auth/user/',
    resolve: data => {
      setUser(data)
    }
  })

  const {mutate: postLogOut} = useMutate({
    verb: 'POST',
    path: '/rest-auth/logout/'
  })

  const {mutate: postLogin} = useMutate({
    verb: 'POST',
    path: '/rest-auth/login/'
  })

  useEffect(() => {
    authToken && refetchUser().then((res) => console.log('Refetched User object, ' + res))
  }, [authToken])

  const login = (event: FormEvent) => {
    event.preventDefault()
    postLogin({
      username: loginUsername,
      password: loginPassword
    }).then((response) => {
      console.log('Received login response, key: ' + response.key)
      setAuthToken(response.key)
      setLoginPassword('')
      setLoginUsername('')
    }).catch((error) => {
      console.log(error)
      error.data && setFormErrors(error.data)
    })
  }

  const logOut = () => {
    postLogOut({}).then((res) => {
      console.log(res)
      setAuthToken(null)
      localStorage.removeItem('token')
    })
  }

  return (
    <>
      {
        !authToken && !isMobile ?
          <Card variant='outlined' className={classes.loginCard}>
            <Grid container direction='column'>
              <Grid item>
                <form onSubmit={login} className={classes.loginForm}>
                  <Grid container spacing={1} direction='column' className={classes.loginFormGrid}>
                    <Grid item>
                      <Typography variant='h2'>
                        Log in
                      </Typography>
                    </Grid>
                    <CardFormField fieldName='Username' required={true}>
                      <TextField fullWidth size='small' label='Username' variant='outlined' value={loginUsername}
                                 onChange={e => setLoginUsername(e.target.value)}
                                 error={formErrors.hasOwnProperty('username')}
                                 helperText={formErrors['username']} />
                    </CardFormField>
                    <CardFormField fieldName='Password' required={true}>
                      <TextField fullWidth size='small' label='Password' variant='outlined' value={loginPassword}
                                 type='password' onChange={e => setLoginPassword(e.target.value)}
                                 error={formErrors.hasOwnProperty('password')} helperText={formErrors['password']} />
                    </CardFormField>
                    {
                      formErrors.hasOwnProperty('non_field_errors') &&
                      <Grid item>
                        <Typography variant='caption'>
                          {formErrors.non_field_errors}
                        </Typography>
                      </Grid>
                    }
                    <Grid item container justify='flex-end'>
                      <Button type='submit'>
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Typography align='center' className={classes.signUp}>
                  or <Link href='/register'>Sign up</Link>
                </Typography>
              </Grid>
            </Grid>
          </Card>
          :
          isMobile ?
            authToken &&
            <Avatar
              onClick={(event) => anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget)}
              className={classes.mobileAvatar}>
              {
                user && user.first_name && user.last_name &&
                user.first_name[0] + user.last_name[0]
              }
            </Avatar>
            :
            <Card className={classes.card} variant='outlined'>
              <CardActionArea>
                <CardContent className={classes.cardContent}
                             onClick={(event) => anchorEl ? setAnchorEl(null) : setAnchorEl(event.currentTarget)}>
                  <Avatar>
                    {
                      user && user.first_name && user.last_name &&
                      user.first_name[0] + user.last_name[0]
                    }
                  </Avatar>
                  <div className={classes.nameContainer}>
                    <Typography>
                      {
                        user &&
                        user.first_name + ' ' + user.last_name
                      }
                    </Typography>
                    <Typography variant='subtitle1' color='textSecondary'>
                      {
                        user &&
                        user.username
                      }
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
      }
      {
        user &&
        <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} className={classes.popper} transition>
          {({TransitionProps}) => (
            <Fade {...TransitionProps}>
              <Paper className={classes.popperPaper}>
                <List component='nav' subheader={
                  <ListSubheader component='div'>
                    Logged in as {user.username}
                  </ListSubheader>
                }>
                  <ListItem button onClick={logOut}>
                    <ListItemText>
                      Log Out
                    </ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Fade>
          )}
        </Popper>
      }
    </>
  )
}

export default AvatarPanel
