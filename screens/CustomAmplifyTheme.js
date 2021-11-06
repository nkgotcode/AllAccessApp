import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

var deepSquidInk = '#152939';
exports.deepSquidInk = deepSquidInk;
var linkUnderlayColor = '#FFF';
exports.linkUnderlayColor = linkUnderlayColor;
// var textInputColor = '#000000';
var textInputColor = '#FFF';
exports.textInputColor = textInputColor;
var textInputBorderColor = '#C4C4C4';
exports.textInputBorderColor = textInputBorderColor;
var placeholderColor = '#C7C7CD';
exports.placeholderColor = placeholderColor;
var buttonColor = '#ff9900';
exports.buttonColor = buttonColor;
var disabledButtonColor = '#ff990080'; // Theme

exports.disabledButtonColor = disabledButtonColor;

let isDarkMode;

var CustomAmplifyTheme = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    width: '100%',
    // backgroundColor: '#FFF'
    backgroundColor: '#0F0F0F',
  },
  section: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  sectionScroll: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  sectionHeader: {
    width: '100%',
    marginBottom: 32,
    paddingTop: 20,
  },
  sectionHeaderText: {
    // color: deepSquidInk,
    color: '#FFFF',
    fontSize: 24,
    fontWeight: '500',
  },
  sectionFooter: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20,
  },
  sectionFooterLink: {
    fontSize: 14,
    // color: buttonColor,
    color: 'tomato',
    alignItems: 'baseline',
    textAlign: 'center',
    backgroundColor: '#0F0F0F',
    borderRadius: 10,
  },
  sectionFooterLinkDisabled: {
    fontSize: 14,
    // color: disabledButtonColor,
    color: '#FF634780',
    alignItems: 'baseline',
    textAlign: 'center',
  },
  navBar: {
    marginTop: 35,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  navButton: {
    marginLeft: 12,
    borderRadius: 4,
  },
  cell: {
    flex: 1,
    width: '50%',
  },
  errorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorRowIcon: {
    height: 25,
    width: 25,
  },
  errorRowText: {
    marginLeft: 10,
    color: '#ffff',
  },
  photo: {
    width: '100%',
  },
  album: {
    width: '100%',
  },
  button: {
    // backgroundColor: buttonColor,
    backgroundColor: 'tomato',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
  },
  buttonDisabled: {
    // backgroundColor: disabledButtonColor,
    backgroundColor: '#FF634780',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  formField: {
    marginBottom: 22,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: textInputBorderColor,
    // color: textInputColor
    color: '#fff',
  },
  inputLabel: {
    marginBottom: 8,
    color: '#fff',
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneInput: {
    flex: 2,
    padding: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: textInputBorderColor,
    // color: textInputColor
    color: '#fff',
  },
  picker: {
    flex: 1,
    height: 44,
    borderRadius: 10,
  },
  pickerItem: {
    height: 44,
  },
  signedOutMessage: {
    textAlign: 'center',
    padding: 20,
    color: '#fff',
  },
});

export {CustomAmplifyTheme};
