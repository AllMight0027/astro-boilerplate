import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("table renders correctly", () => {
  const headings = [{ label: "ID" }, { label: "Unit" }];

  const rows = [
    [{ label: "109" }, { label: "Miles" }],
    [{ label: "110" }, { label: "Meters" }],
  ];

  render(<Table headings={headings} rows={rows} />);

  headings.forEach((obj) => expect(screen.getByText(obj.label)).toBeTruthy());
  rows.forEach((row) =>
    row.forEach((obj) => expect(screen.getByText(obj.label)).toBeTruthy()),
  );
});
