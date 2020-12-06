export const secondsToHms = (time) => {
  const timeInSeconds = Number(time);
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor((timeInSeconds % 3600) % 60);
  return {
    hours,
    minutes,
    seconds,
  };
};
