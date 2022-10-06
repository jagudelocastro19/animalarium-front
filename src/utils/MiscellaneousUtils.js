export const isValidEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isValidPassword = password => {
  const validPasswordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})');
  return validPasswordRegex.test(password);
};

export const isValidUser = user => {
  const validUserRegex = new RegExp(/^[a-z0-9_-]{2,16}$/);
  return validUserRegex.test(user);
};