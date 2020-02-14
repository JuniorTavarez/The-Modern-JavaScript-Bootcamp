const isValidPassword = password => {
  if (password.length < 8 || password.includes('password')) {
    return 'invalid password';
  } else {
    return 'you have full access';
  }
};

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('asdfpogkjegjpore'));
console.log(isValidPassword('asdfppassword'));
