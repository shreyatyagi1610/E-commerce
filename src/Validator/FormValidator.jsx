import passwordValidator from 'password-validator';

const schema = new passwordValidator();
schema
  .is().min(8)                                    // Minimum length 8
  .is().max(100)                                  // Maximum length 100
  .has().uppercase(1)                             // Must have at least 1 uppercase letter
  .has().lowercase(1)                             // Must have at least 1 lowercase letter
  .has().digits(2)                                // Must have at least 2 digits
  .has().not().spaces()                           // Should not have spaces
  .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

export default function FormValidator(e) {
  let { name, value } = e.target;

  switch (name) {
    case "name":
    case "username":
    case "icon":
    case "color":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (value.length < 3 || value.length > 50)
        return name + " Field length must be 3-50";
      else
        return "";

    case "password":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (!schema.validate(value))
        return name + " Invalid Password, must contain 8-100 characters, 1 uppercase, 1 lowercase, 2 digits, no spaces";
      else
        return "";

    case "question":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (value.length < 10)
        return name + " Field length must be 10 or more characters";
      else
        return "";

    case "email":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (value.length < 13 || value.length > 100)
        return name + " Field length must be 13-100";
      else
        return "";

    case "phone":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (value.length !== 10)
        return name + " Field must be exactly 10 digits";
      else if (!"9876".includes(value[0]))
        return "Invalid Phone number, it must start with 6, 7, 8, or 9";
      else
        return "";

    case "size":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (value.length > 10)
        return name + " Field length must be up to 10 characters";
      else
        return "";

    case "baseprize":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (Number(value) < 1)
        return "Base Prize must be greater than zero";
      else
        return "";

    case "stockquantity":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (Number(value) < 0)
        return "Stock quantity must not be negative";
      else
        return "";

    case "discount":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (Number(value) < 0 || Number(value) > 100)
        return "Discount must be 0-100";
      else
        return "";

    case "message":
    case "description":
    case "answer":
      if (!value || value.length === 0)
        return name + " Field is Mandatory";
      else if (value.length < 50)
        return name + " Field length must be 50 characters or more";
      else
        return "";

    default:
      return "";
  }
}
