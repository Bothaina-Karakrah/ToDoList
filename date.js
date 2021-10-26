//jshint esversion: 6
exports.getDate = function(){
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  constconst today = new Date();
  const day = today.toLocaleDateString("en-US", options);
  return day;
}
