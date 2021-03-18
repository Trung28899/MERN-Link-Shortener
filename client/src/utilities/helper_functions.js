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

export const validateAccessLink = (accessLink) => {
  let linkExists = false;
  if (accessLink === null || accessLink === "") {
    return "Vui Lòng Điền Tên Truy Cập";
  } else if (accessLink.includes(".")) {
    return "Tên Truy Cập Không Được Có Dấu .";
  } else if (accessLink.includes(",")) {
    return "Tên Truy Cập Không Được Có Dấu ,";
  } else if (accessLink.includes("@")) {
    return "Tên Truy Cập Không Được Có Dấu @";
  } else if (accessLink.includes("(")) {
    return "Tên Truy Cập Không Được Có Dấu (";
  } else if (accessLink.includes(")")) {
    return "Tên Truy Cập Không Được Có Dấu )";
  } else if (accessLink.includes("^")) {
    return "Tên Truy Cập Không Được Có Dấu ^";
  } else if (accessLink.includes("#")) {
    return "Tên Truy Cập Không Được Có Dấu #";
  } else if (accessLink.includes("$")) {
    return "Tên Truy Cập Không Được Có Dấu $";
  } else if (accessLink.includes("[")) {
    return "Tên Truy Cập Không Được Có Dấu [";
  } else if (accessLink.includes("]")) {
    return "Tên Truy Cập Không Được Có Dấu ]";
  } else if (accessLink.includes(" ")) {
    return "Tên Truy Cập Không Được Có Khoảng Trống";
  }
  return null;
};

export const validateLink = (accessLink) => {
  if (accessLink === null || accessLink === "") {
    return "Vui Lòng Nhập Đường Link";
  } else if (accessLink.includes(" ")) {
    return "Đường Link Không Được Có Khoảng Trống";
  }
  return null;
};
