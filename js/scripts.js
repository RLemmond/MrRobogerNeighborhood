function substituteNumber(text) {
  const values = text.split(", ");

  const substitutedValues = [];
  values.forEach((value) => {
    if (value.includes("1")) {
      substitutedValues.push("Beep!");
    } else if (value.includes("2")) {
      substitutedValues.push("Boop!");
    } else if (value.includes("3")) {
      substitutedValues.push("Won't you be my neighbor?");
    } else {
      substitutedValues.push(value);
    }
  });
  return substitutedValues.join(", ");
}