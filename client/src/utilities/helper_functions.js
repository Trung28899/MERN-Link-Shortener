export const validateUser = (password) => {
  switch (password) {
    case "trungtrinh":
      return password;
    case "28899":
      return password;
    case "dumbotran":
      return password;
    case "otcmember":
      return password;
    default:
      return false;
  }
};

export const validateAccessName = (accessName) => {
  if (accessName === null || accessName === "") {
    return "Please enter Access Name";
  } else if (accessName.includes(",")) {
    return ", symbol not accepted";
  } else if (accessName.includes("(")) {
    return "( symbol not accepted";
  } else if (accessName.includes(")")) {
    return ") symbol not accepted";
  } else if (accessName.includes("^")) {
    return "^ symbol not accepted";
  } else if (accessName.includes("/")) {
    return "/ symbol not accepted";
  } else if (accessName.includes("$")) {
    return "$ symbol not accepted";
  } else if (accessName.includes("[")) {
    return "[ symbol not accepted";
  } else if (accessName.includes("]")) {
    return "] symbol not accepted";
  } else if (accessName.includes("@")) {
    return "@ symbol not accepted";
  } else if (accessName.includes("*")) {
    return "* symbol not accepted";
  } else if (accessName.includes("!")) {
    return "! symbol not accepted";
  } else if (accessName.includes("?")) {
    return "? symbol not accepted";
  } else if (accessName.includes(">")) {
    return "> symbol not accepted";
  } else if (accessName.includes("<")) {
    return "< symbol not accepted";
  } else if (accessName.includes(";")) {
    return "; symbol not accepted";
  } else if (accessName.includes("|")) {
    return "| symbol not accepted";
  }
  return "";
};

export const validateLink = (link) => {
  if (link === null || link === "") {
    return "Please enter your Link";
  } else if (!link.includes("http")) {
    return "Invalid link. Please copy and paste the full link";
  }
  return "";
};

export function copyToClipboard(copyValue) {
  let stringCopied = document.createElement("textarea");

  stringCopied.value = copyValue;
  stringCopied.setAttribute("readonly", "");
  stringCopied.style = {
    position: "absolute",
    left: "-9999px",
    display: "none",
  };

  document.body.appendChild(stringCopied);
  stringCopied.select();
  document.execCommand("copy");

  document.body.removeChild(stringCopied);
}
