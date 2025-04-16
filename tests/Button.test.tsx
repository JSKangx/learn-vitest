import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Button from "../src/components/Button";

describe("Button 컴포넌트", () => {
  it("label을 정상적으로 표시한다", () => {
    render(<Button label="클릭" />);
    expect(screen.getByText("클릭")).toBeInTheDocument();
  });

  it("버튼 클릭 시 onClick이 호출된다", async () => {
    const handleClick = vi.fn();
    render(<Button label="클릭" onClick={handleClick} />);

    const button = screen.getByText("클릭");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
