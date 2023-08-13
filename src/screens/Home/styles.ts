import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#022251",
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectImage: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  description: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    fontSize: 16,
    textAlignVertical: "center",
    width: 250,
    marginTop: 20
  },
  button: {

  },
  content: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    backgroundColor: "#001739",
    paddingHorizontal: 16,
    width: '100%',
    marginTop: 200,
    paddingTop: 26,
  },
  items: {
    flex: 1,
    gap: 12,
  },
  containerImage: {
    top: '13%',
    position: 'relative'
  },
  buttonEdit: {
    position: 'absolute',
    bottom: 22,
    right: 22,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 32,
    borderWidth: 3,
    borderColor: '#3450CE'
  },
  image: {
    backgroundColor: '#000',
    width: 350,
    height: 350,
    borderRadius: 200,
    borderWidth: 6,
    borderColor: '#001739'
  },
});