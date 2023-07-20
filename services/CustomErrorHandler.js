class CustomErrorHandler extends Error {
  constructor(status, msg) {
    super();
    this.status = status;
    this.message = msg;
  }

  static alreadyExist(message) {
    return new CustomErrorHandler(409, message);
  }

  static wrongCredential (message = 'Username or password is wrong!'){
    return new CustomErrorHandler(401,message);
  }

  static unauthorized (message = 'unauthorized'){
    return new CustomErrorHandler(401,message);
  }

}
module.exports = CustomErrorHandler;
