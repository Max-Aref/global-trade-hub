import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import { EducationalMegaMenu } from "@/components/learn/EducationalMegaMenu";

describe("EducationalMegaMenu", () => {
  it("renders the trigger and expands when clicked (en)", () => {
    render(<EducationalMegaMenu lang='en' />);
    const trigger = screen.getByRole("button", { name: /educational/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    // fireEvent.click avoids extra pointer events that happy-dom maps to mouseenter,
    // which would race with the component's hover-to-open handler.
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    // Panel content is now visible
    expect(document.getElementById("educational-menu-panel")).not.toBeNull();
  });

  it("renders Arabic trigger label in ar", () => {
    render(<EducationalMegaMenu lang='ar' />);
    expect(
      screen.getByRole("button", { name: /التعليمية/ }),
    ).toBeInTheDocument();
  });

  it("has no a11y violations when expanded", async () => {
    const { container } = render(<EducationalMegaMenu lang='en' />);
    fireEvent.click(screen.getByRole("button", { name: /educational/i }));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
