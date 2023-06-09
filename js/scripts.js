function substituteNumber(text) {
  const values = text.split(", ");

  const substitutedValues = [];
  values.forEach((value) => {
    if (value.includes("1")) {
      substitutedValues.push("Beep!");
    } else if (value.includes("2")) {
      substitutedValues.push("Boop!");
    } else {
      substitutedValues.push(value);
    }
  });
  return substitutedValues.join(", ");
}