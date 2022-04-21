import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4563E4',
    justifyContent: 'flex-end'
  },

  containerContentStyle: {
    
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  subContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center'
  },

  userInputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingTop:'25%'
  },

  profileContainer: {
    flex: 1,
    width: '32%',
    height: 140,
    borderRadius: 70,
    position: 'absolute',
    top: '-8%',
    borderWidth: 2,
    borderColor: '#ffffff',


  },

  profileEditContainer: {
    flex: 1,
    width: '30%',
    height: '30%',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    position: 'absolute',
    end: -5,
    bottom: 10,
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textInputContainer: {
    fontFamily: 'PoppinsMedium',
    width: '90%',
    height: 60,
    margin: '2%',
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
    paddingLeft: 20,
    fontSize: 18,
    paddingRight: 20
  },

  textInputLabel: { 
    alignSelf: 'flex-start', 
    paddingLeft: '5%', 
    fontFamily: 'PoppinsRegular', 
    fontSize: 16,
    color: '#416475'
},

    buttonContainer: {
    fontFamily: 'PoppinsSemiBold',
    width: '90%',
    height: 60,
    margin: '2%',
    borderRadius: 30,
    backgroundColor: '#4563E4',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default styles;

