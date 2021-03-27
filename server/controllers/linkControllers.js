import Link from "../models/linkModel.js";

const createLink = async (req, res, next) => {
  const { accessName, redirectLink, domainName, domainURL } = req.body;
  try {
    const linkRecord = await Link.find({
      accessName: accessName,
      domainName: domainName,
    });
    if (linkRecord.length === 0) {
      const newLink = new Link({
        accessName: accessName,
        redirectLink: redirectLink,
        domainName: domainName,
        domainURL: domainURL,
      });
      newLink.save();
      res.json({ linkCreated: true, error: false });
    } else {
      res.json({
        linkCreated: false,
        error: `${domainName}/${accessName} is taken. Please choose another Access Name`,
      });
    }
  } catch (err) {
    res.status(409).json({ linkCreated: false, error: err.message });
  }
};

const fetchLink = async (req, res, next) => {
  const { accessName } = req.params;
  const { domainURL } = req.body;
  console.log(accessName);
  console.log(domainURL);

  try {
    const linkRecord = await Link.find({
      accessName: accessName,
      domainURL: domainURL,
    });
    if (linkRecord.length > 0) {
      res.json({
        redirectLink: linkRecord[0].redirectLink,
        error: false,
        errorMessage: "",
      });
    } else {
      res.json({
        redirectLink: null,
        error: true,
        errorMessage: "Link Doesn't Exist",
      });
    }
  } catch (err) {
    res
      .status(409)
      .json({ redirectLink: null, error: true, errorMessage: err.message });
  }
};

const getMainPage = async (req, res, next) => {
  res.json({ message: "This is the main Page !!" });
};

export { createLink, fetchLink, getMainPage };
