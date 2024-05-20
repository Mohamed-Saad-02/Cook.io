export function formatTime(value) {
  if (value === 0) {
    return `+1 minutes`;
  } else if (value > 0 && value <= 60) {
    return `${value} minutes`;
  } else if (value > 60 && value <= 1440) {
    return `${Math.floor(value / 60)} hour`;
  } else {
    return `${Math.floor(value / 60 / 24)} day`;
  }
}
