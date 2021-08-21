import { createTheme , makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  appBarStyle: {
    backgroundColor: "#0F7F9E",
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1,
    boxShadow: 'none',
  },
  appBarStyle2: {
    marginTop: '64px',
    backgroundColor: "#15A9D1",
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1
  },
  appBarButton: {
    backgroundColor: "#AB449A",
  }
}));

