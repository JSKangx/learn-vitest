import { describe, it, expect } from "vitest";
import { add } from "./math";

describe("add 함수", () => {
  it("두 숫자의 합을 반환한다", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("음수도 처리할 수 있다", () => {
    expect(add(-1, -2)).toBe(-3);
  });
});
