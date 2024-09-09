import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    height:'100%',
    backgroundColor: 'black',
  },
  batman: {
    width:'auto',
    height:'60%',
    marginVertical: 50,
    marginHorizontal: 5
  },
  buttonChamarBatman: {
    borderColor : 'white',
    borderWidth: 2.5,
    borderRadius: 13,
  },
  textoButtonChamarBatman: {
    color: 'lightgray',
    fontFamily: 'sans-serif-medium',
    paddingVertical: 10,
    paddingHorizontal: 18
    // fontFamily: 'arial',
    // textShadowOffset: {width: 5, height: 5},
    // textShadowColor: 'red',
  }
});