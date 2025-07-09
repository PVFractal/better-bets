export class Validator {
  static validateCreateAccount(username: string, email: string, password: string, confirmPassword: string): string {

    // Email validation
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      return 'Please enter a valid email address';
    }

    // UserName validation
    if (!Validator.isAlphaNumeric(username)) {
      return 'Username must only be numers and letters';
    }
  
    if (password !== confirmPassword) {
      return 'Passwords do not match'
    }


    return '';
  }

  static isAlphaNumeric(str: string) {
    var code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };
}