const formatDates = date => {
  const firstSplit = date.split("-");
  const secondSplit = firstSplit[2].split("T");
  const time = secondSplit[1].slice(0, 5);
  return `${time} ${secondSplit[0]}/${firstSplit[1]}/${firstSplit[0]}`;
};
export default formatDates;
