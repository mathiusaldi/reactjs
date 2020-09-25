import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: 0,
  },
  iconHeader: {
    display: "block",
    float: "right",
  },
  storeLogo: {
    maxWidth: 120,
    padding: "10px 0px",
    width: "100%",
    float: "left",
  },
  iconButton: {
    height: 65,
  },
  iconHeaderColor: {
    color: "#000000",
  },
  headerContainer: {
    backgroundColor: "#ff9f1a",
    position: "fixed",
    top: 0,
  },
  baseContainer: {
    marginTop: 85,
  },
  bannerTopImg: {
    width: '100%',
  },
  imgProduct: {
    width: '80%',
  },
  leftSectionHome: {
    width: '30%',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  rightSectionHome: {
    width: '70%',
    display: 'inline-block',
    verticalAlign: 'top',
  },
}));

export default useStyles;
