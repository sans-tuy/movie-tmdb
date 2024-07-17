const colorCircle = (number: number) => {
  if (number < 5) {
    return "danger";
  } else if (number < 7) {
    return "warning";
  } else return "success";
};

export { colorCircle };
