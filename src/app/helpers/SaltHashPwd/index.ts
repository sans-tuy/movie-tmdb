const saltHashPwd = async (password: string) => {
  const saltRounds = 10;
  const bcrypt = require("bcrypt");
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const comparePwd = async (password: string, hash: string) => {
  const bcrypt = require("bcrypt");
  const compare = await bcrypt.compare(password, hash);
  return compare;
};

export { saltHashPwd, comparePwd };
