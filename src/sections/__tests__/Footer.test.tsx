import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { axe } from "vitest-axe";
import * as navigation from "next/navigation";
import { Footer } from "@/sections/Footer";

const setPathname = (
  navigation as unknown as { __setPathname: (p: string) => void }
).__setPathname;

describe("Footer", () => {
  beforeEach(() => {
    setPathname("/en");
  });

  it("renders English copy and EN-prefixed legal links by default", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveAttribute("dir", "ltr");
    expect(within(footer).getByText("Company")).toBeInTheDocument();
    const privacy = within(footer).getByRole("link", {
      name: /privacy policy/i,
    });
    expect(privacy).toHaveAttribute("href", "/en/legal/privacy-policy");
  });

  it("has no axe violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results.violations).toEqual([]);
  });
});
