"use client";
import type { Unit } from "./definition";

export const Units: { [key: string]: Unit } = {
  ko: {
    name: "個",
    toString(quantity: string) {
      return `${quantity}個`;
    },
  },
  hon: {
    name: "本",
    toString(quantity: string) {
      return `${quantity}本`;
    },
  },
  g: {
    name: "g",
    toString(quantity: string) {
      return `${quantity}g`;
    },
  },
  go: {
    name: "合",
    toString(quantity: string) {
      return `${quantity}合`;
    },
  },
  kosaji: {
    name: "小さじ",
    toString(quantity: string) {
      return `小さじ${quantity}`;
    },
  },
  mai: {
    name: "枚",
    toString(quantity: string) {
      return `${quantity}枚`;
    },
  },
  teaspoon: {
    name: "小さじ",
    toString(quantity: string) {
      return `小さじ${quantity}`;
    },
  }
};
