import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "../src/components/Button";

describe("Button 컴포넌트", () => {
  it("label을 렌더링한다", () => {
    render(<Button label="클릭" />);
    expect(screen.getByText("클릭")).toBeInTheDocument();
  });
});
