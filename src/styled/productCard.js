import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  containerCars: {
    marginTop: "3rem",
    textAlign: "center",
  },
  imgCar: {
    width: "268px",
    height: "132px",
    margin: "22px 0 0",
    objectFit: "contain",
    display: "block",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paragraphDivider: {
    display: "flex",
  },
  titleCar: {
    width: "221px",
    height: "30px",
    margin: "0 24px 8px 23px",
    fontFamily: "Montserrat",
    fontSize: "28px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.07",
    letterSpacing: "-0.65px",
    textAlign: "center",
    color: "#000000",
  },
}));
