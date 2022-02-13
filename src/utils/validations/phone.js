const isValidPhoneSimple = (phone) => {
  const re = /\(?\b([0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b$/;

  return re.test(String(phone));
};

export { isValidPhoneSimple };
