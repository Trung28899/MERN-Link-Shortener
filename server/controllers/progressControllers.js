import fs from "fs";

const fetchProgress = async (req, res, next) => {
  let rawdata = fs.readFileSync("progress.json");
  let data = JSON.parse(rawdata);
  res.json({ completed: data.progress });
};

const increment = async (req, res, next) => {
  let rawdata = fs.readFileSync("progress.json");
  let data = JSON.parse(rawdata);
  let newProgress;
  if (data.progress < 30) {
    newProgress = data.progress + 0.5;
  }

  fs.writeFileSync(
    "progress.json",
    JSON.stringify({ progress: newProgress }, null, 2)
  );

  res.json({ success: true });
};

const decrement = async (req, res, next) => {
  let rawdata = fs.readFileSync("progress.json");
  let data = JSON.parse(rawdata);
  let newProgress;
  if (data.progress > 0) {
    newProgress = data.progress - 0.5;
  }

  fs.writeFileSync(
    "progress.json",
    JSON.stringify({ progress: newProgress }, null, 2)
  );
  res.json({ success: true });
};

export { increment, decrement, fetchProgress };
