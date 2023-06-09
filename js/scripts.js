function subsituteNumber(text) {
  const values = text.split(", ");

  const subsitutedValues = [];
  values.forEach((value) => {
    if (value.includes("1")) {
      subsitutedValues.push("Beep!");
    } else {
      subsitutedValues.push(value);
    }
  });
  return subsitutedValues.join(", ");