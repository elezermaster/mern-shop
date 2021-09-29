import React from 'react';
import {TiThMenu} from "react-icons/ti";
//import {StyleSheet} from 'react-native';
const HamburgerMenu = () => {
    return (
        <div style={styles.menu_container}>
            <TiThMenu />
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

const styles = { //StyleSheet.create({
    menu_container: {
        width: 30,
        height: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            // background: '#dd219e',
            color: 'white',
            background: 'white',
            backgroundColor: 'white',
            "& TiThMenu": {
                color: "purple",
              },
        },
        div: {
            width: '100%',
            height: 3,
            background: '#f4f4f4',
        },

    },
    all: {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
    },
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
    },
    logo: {
      height: 150,
      width: 480,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
}//});

export default HamburgerMenu;
