import mongoose from "mongoose";

const linkSchema = mongoose.Schema({
  accessName: String,
  redirectLink: String,
  domainName: String,
  domainURL: String,
});

const Link = mongoose.model("Link", linkSchema);

export default Link;
