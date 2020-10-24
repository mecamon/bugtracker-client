//To validate names with only letters in it
function name(minLength, label, key, field) {
  if (field.length == 0) {
    return [key, `${label} is a required field!`];
  } 
  else if (field.length < parseInt(minLength)) {
    return [key, `${label} needs to be at least ${minLength} characters long`];
  } 
  else if (/[^a-zA-Z ]/.test(field)) {
    return [key, `${label} can only contains letters A-Z or a-z`];
  }

  return null
}

function date(label, key, field) {
  if (field.length == 0) {
    return [key, `${label} is a required field!`];
  } 
  return null
}

//To validate names with numbers and periods in it
function nameWithNumbers(minLength, maxLength, label, key, field) {
  if (field.length == 0) {
    return [key, `${label} is a required field!`];
  } 
  else if (field.length < parseInt(minLength)) {
    return [key, `${label} needs to be at least ${minLength} characters long`];
  } 
  else if (field.length > parseInt(maxLength)) {
    return [key, `${label} have to be max ${maxLength} characters long`];
  }
  else if (/[^a-zA-Z0-9\. ]/.test(field)) {
    return [key, `${label} field can only contains character from A-Z, a-z, 0-9 and .`];
  }

  return null
}

function username(minLength, field) {
  if (field.length < parseInt(minLength)) {
    return `Username needs to be at least ${minLength} characters long`;
  } else if (/[^a-zA-Z0-9]/.test(field)) {
    return `Username can only contains character from A-Z, a-z or 0-9`;
  }

  return null
}

function password(field) {
  if (field.length < 6) {
    return ['password', 'Password needs to be at least 6 characters long'];
  } else if (
    !/[a-z]/.test(field) ||
    !/[A-Z]/.test(field) ||
    !/[0-9]/.test(field)
  ) {
    return ['password', 'Password needs to have a-z, A-Z and 0-9'];
  }
  return null
}

function idCompany(field) {
  if (field.length == 0) {
    return ['idCompany', 'Company ID is a required field!'];
  } 
  return null
}

//To validate that the field is filled with only numbers
function number(maxLength, label, key, field) {
  if (field.length == 0) {
    return [key, `${label} is a required field!`];
  } 
  else if (/[^0-9]/.test(field)) {
    return [key, `${label} field can only contain numbers`];
  } else if (field.length > parseInt(maxLength)) {
    return [key, `${label} max length is ${maxLength}`];
  }

  return null
}

function email(field) {
  if (!/[@]/.test(field) || !/[\.]/.test(field)) {
    return ['email', 'Email address is invalid!'];
  } else if (field.indexOf('@') < 2 || field.indexOf('.') < 2) {
    return ['email', 'Email address is invalid!'];
  }

  return null
}

function gender(field) {
  if (/[^fmc]/.test(field)) {
    return `Gender entry is invalid`;
  }
}

function nameNotEmpty(label, field) {
  if (field === '') {
    return `${label} cannot be empty`;
  }

  return null
}

export default Object.freeze({
  name,
  date,
  username,
  password,
  email,
  gender,
  nameNotEmpty,
  nameWithNumbers,
  number,
  idCompany
});
