import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

test("button renders correctly and handles click event", async () => {
  const handleClick = vi.spyOn(
    {
      fn: () => {
        console.log("hello");
      },
    },
    "fn",
  ) as unknown as () => void;

  render(<Button label="Click Me" onClick={handleClick} />);

  expect(screen.getByRole("button")).toBeTruthy();
  expect(screen.getByText("Click Me")).toBeTruthy();

  await userEvent.click(screen.getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
