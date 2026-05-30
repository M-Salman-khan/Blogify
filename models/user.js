const { createHmac, randomBytes } = require("crypto");

const { Schema, model } = require("mongoose");
const { createTokenForUser } = require("../services/authentication");

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "/images/user-avatar.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true },
);


userSchema.pre("save", function () {
  if (!this.isModified("password")) return;

  const salt = randomBytes(16).toString();

  const hashedPassword = createHmac("sha256", salt)
    .update(this.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;
});

userSchema.static('matchedPasswordAndGenerateToken',async function(email,password){
  const user =await this.findOne({email})

  if(!user) throw new Error("User not found");
  // console.log(user);
  
  const salt = user.salt;
  const hashedPassword = user.password;
  const userProvidedHashed = createHmac('sha256',salt)
  .update(password)
  .digest('hex')
  if(hashedPassword !== userProvidedHashed) throw new Error("Password incorrect");
  const token = createTokenForUser(user)
  return token;
})

const User = model("user", userSchema);
module.exports = User;
