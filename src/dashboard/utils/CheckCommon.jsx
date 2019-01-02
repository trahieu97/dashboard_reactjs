// Check Email format
const isEmail = (value) => {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
}
// Check Length
const isLength = (value, length) => {
  if (value.length >= length) {
    return true;
  }
  return false;
}
// Compare 2 string 
const compare = (string1, string2) => {
  if (string1 === string2) {
    return true;
  }
  return false;
}
// Check Number
const isNumber = (value) => {
  var numberRex = new RegExp("^[0-9]+$");
  if (numberRex.test(value)) {
    return true;
  }
  return false;
}
// Check valid URL
const isUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
}

export default {
  isEmail,
  isLength,
  isNumber,
  isUrl,
  compare
};