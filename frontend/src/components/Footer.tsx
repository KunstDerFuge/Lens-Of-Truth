import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { AppBar, Grid, Paper, Theme, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    textAlign: 'center',
    marginTop: 120,
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    fontFamily: 'garamond-premier-pro',
    fontSize: '18px'
  },
  footerPaper: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main
  },
  gridRoot: {
    width: '100%',
    height: '100%'
  },
  margin: {
    margin: theme.spacing(2)
  }
}))

const Footer: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid container direction='column' className={classes.gridRoot}>
        <Grid item className={classes.margin}>
          <i>Quaerendo Invenietis</i>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer