import { createStyles, getStylesRef } from "@mantine/core";

export const useStyles = createStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",

    "&:not(:last-child)": {
      marginBottom: "40px",
    },

    "&[data-user-message=true]": {
      justifyContent: "right",
      direction: "rtl",

      [`& .${getStylesRef("avatar")}`]: {
        marginLeft: "20px",
        marginRight: "0",
      },

      [`& .${getStylesRef("text")}::after`]: {
        content: '""',
        position: "absolute",
        width: "0",
        height: "0",
        top: "10px",
        right: "-20px",
        border: "10px solid",
        borderColor: "transparent transparent transparent #fff",
      },

      [`& .${getStylesRef("text")}::before`]: {
        display: "none",
      },

      [`& .${getStylesRef("status")} svg`]: {
        marginRight: "5px",
      },
    },
  },

  avatar: {
    ref: getStylesRef("avatar"),
    marginRight: "20px",
    fontSize: ".75rem",
    color: "#999999",
    textAlign: "center",
  },

  text: {
    ref: getStylesRef("text"),
    padding: "0.4rem 1rem",
    borderRadius: "4px",
    background: "#ffffff",
    fontWeight: 300,
    lineHeight: "150%",
    position: "relative",
    direction: "ltr",
    minHeight: "40px",

    "&::before": {
      content: '""',
      position: "absolute",
      width: "0",
      height: "0",
      top: "10px",
      left: "-20px",
      border: "10px solid",
      borderColor: "transparent #ffffff transparent transparent",
    },
  },

  time: {
    marginRight: "10px",
    marginLeft: "10px",
  },

  status: {
    ref: getStylesRef("status"),
    display: "flex",
    alignItems: "center",

    fontSize: ".75rem",
    color: "#999999",
    textAlign: "center",

    "& svg": {
      marginLeft: "5px",
    },

    '&[data-status="sent"] svg': {
      fontSize: "16px",
      color: "#9ec94a",
    },

    '&[data-status="error"] svg': {
      fontSize: "16px",
      color: "#b71e3c",
    },
  },
});
