import { assertEquals } from "@std/assert";
import { getFizzBuzzValue } from "./main.ts";

Deno.test(`Retorna "Nenhum valor inserido", caso a input estiver vazia`, () => {
  const input = "";

  const finalResult = getFizzBuzzValue(input);

  assertEquals(finalResult, "Nenhum valor inserido");
});

Deno.test("Retorna 1, caso a input receber 1", () => {
  const input = 1;

  const finalResult = getFizzBuzzValue(input);

  assertEquals(finalResult, 1);
});

Deno.test("Retorna 2, caso a input receber 2", () => {
  const input = 2;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 2);
});

Deno.test("Retorna Fizz, caso a input receber 3", () => {
  const input = 3;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna 4, caso a input receber 4", () => {
  const input = 4;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 4);
});

Deno.test("Retorna Buzz, caso a input receber 5", () => {
  const input = 5;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Buzz");
});

Deno.test("Retorna Fizz, caso a input receber 6", () => {
  const input = 6;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna 7, caso a input receber 7", () => {
  const input = 7;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 7);
});

Deno.test("Retorna 8, caso a input receber 8", () => {
  const input = 8;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 8);
});

Deno.test("Retorna Fizz, caso a input receber 9", () => {
  const input = 9;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna Buzz, caso a input receber 10", () => {
  const input = 10;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Buzz");
});

Deno.test("Retorna 11, caso a input receber 11", () => {
  const input = 11;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 11);
});

Deno.test("Retorna Fizz, caso a input receber 12", () => {
  const input = 12;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna 13, caso a input receber 13", () => {
  const input = 13;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 13);
});

Deno.test("Retorna 14, caso a input receber 14", () => {
  const input = 14;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 14);
});

Deno.test("Retorna FizzBuzz, caso a input receber 15", () => {
  const input = 15;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "FizzBuzz");
});

Deno.test("Retorna 16, caso a input receber 16", () => {
  const input = 16;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 16);
});

Deno.test("Retorna 17, caso a input receber 17", () => {
  const input = 17;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 17);
});

Deno.test("Retorna Fizz, caso a input receber 18", () => {
  const input = 18;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna 19, caso a input receber 19", () => {
  const input = 19;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 19);
});

Deno.test("Retorna Buzz, caso a input receber 20", () => {
  const input = 20;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Buzz");
});

Deno.test("Retorna Fizz, caso a input receber 21", () => {
  const input = 21;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna 22, caso a input receber 22", () => {
  const input = 22;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 22);
});

Deno.test("Retorna 23, caso a input receber 23", () => {
  const input = 23;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 23);
});

Deno.test("Retorna Fizz, caso a input receber 24", () => {
  const input = 24;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna Buzz, caso a input receber 25", () => {
  const input = 25;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Buzz");
});

Deno.test("Retorna 26, caso a input receber 26", () => {
  const input = 26;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 26);
});

Deno.test("Retorna Fizz, caso a input receber 27", () => {
  const input = 27;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "Fizz");
});

Deno.test("Retorna 28, caso a input receber 28", () => {
  const input = 28;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 28);
});

Deno.test("Retorna 29, caso a input receber 29", () => {
  const input = 29;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, 29);
});

Deno.test("Retorna FizzBuzz, caso a input receber 30", () => {
  const input = 30;
  const finalResult = getFizzBuzzValue(input);
  assertEquals(finalResult, "FizzBuzz");
});