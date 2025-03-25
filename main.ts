type numberOrString = number | string;

export function getFizzBuzzValue(value: numberOrString): numberOrString {
  if (value.toString() === "") return "Nenhum valor inserido";

  const numericValue = Number(value);
  if (isNaN(numericValue)) return "Número inválido";

  const isMultipleOf3 = numericValue % 3 === 0;
  const isMultipleOf5 = numericValue % 5 === 0;

  if (isMultipleOf3 && isMultipleOf5) return "FizzBuzz";

  if (isMultipleOf3) return "Fizz";

  if (isMultipleOf5) return "Buzz";

  return value;
}
