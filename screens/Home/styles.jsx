import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4563E4',
    justifyContent: 'space-between',
  },

  containerContentStyle: {

    height: '100%',
    width: '100%',
    alignItems: 'center',
  },

  subContainer: {
    width: '100%',
    backgroundColor: '#FEFEFE',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    paddingBottom:'1%'
  },

  scrollViewContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

})

export default styles;