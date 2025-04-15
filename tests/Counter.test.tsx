import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Counter from "@/components/Counter";

describe("Counter 컴포넌트", () => {
  it("버튼 클릭 시 count가 증가한다", async () => {
    render(<Counter />);

    const button = screen.getByText("+1");
    await userEvent.click(button);

    expect(screen.getByText("현재 카운트 : 1")).toBeInTheDocument();
  });
});
