import {normalize} from "../utils/normalizeSize";

export const theme = {
  TouchableHighlight: {
    category: {
      shadowColor: "black",
      backgroundColor: "white",
      borderRadius: "50px",
      elevation: normalize(7),
      width: `${normalize(55)}px`,
      height: `${normalize(55)}px`,
      alignItems: "center",
      justifyContent: "center",
    },
    numberButton: {
      borderColor: "#dedcdc",
      borderWidth: `${normalize(1)}px`,
      marginBottom: `${normalize(10)}px`,
    },
    submit: {
      shadowColor: "black",
      borderRadius: "50px",
      elevation: 5,
      marginTop: `${normalize(10)}px`,
      position: 'absolute',
      bottom: `${normalize(15)}px`,
    },
    nav: {
      flex: 1,
      alignItems: "center",
    }
  },
  Input: {
    addTransaction: {
      marginBottom: `${normalize(10)}px`,
      fontSize: `${normalize(18)}px`,
      width: `${normalize(260)}px`,
      height: `${normalize(40)}px`,
      paddingLeft: `${normalize(6)}px`,
    },
    addCategory: {
      fontSize: `${normalize(18)}px`,
      width: `${normalize(200)}px`,
      height: `${normalize(35)}px`,
      paddingLeft: `${normalize(6)}px`,
    }
  },

};
