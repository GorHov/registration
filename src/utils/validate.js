export const validateSignIn = (values) => {
    const errors = {};
    const { email, password } = values;
  
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is not correct';
    }
  
    if (!password) {
      errors.password = 'Password is required';
    }
  
    return errors;
  };
  
  export const validateSignUp = (values) => {
    const errors = {};
    const { firstName, lastName, email, phone, region, city, school, subject, grade, password, confirmPassword } = values;
  
    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
  
    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
  
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Email is not correct';
    }
  
    if (!phone) {
      errors.phone = 'Phone is required';
    } else if (!/^\+?\d{10,15}$/.test(phone)) {
      errors.phone = 'Phone is not correct';
    }
  
    if (!region) {
      errors.region = 'Region is required';
    }
  
    if (!city) {
      errors.city = 'City is required';
    }
  
    if (!school) {
      errors.school = 'School is required';
    }
  
    if (!subject) {
      errors.subject = 'Subject is required';
    }
  
    if (!grade.length) {
      errors.grade = 'Grade is required';
    }
  
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password is too short';
    }
  
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords don't match";
    }
  
    return errors;
  };
  