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

  it("renders Arabic copy and font-arabic class on /ar paths", () => {
    setPathname("/ar/legal/imprint");
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveAttribute("dir", "rtl");
    expect(footer.className).toMatch(/font-arabic/);
    expect(within(footer).getByText("الشؤون القانونية")).toBeInTheDocument();
  });

  it("language switcher mirrors the current path between locales", () => {
    setPathname("/en/learn/incoterms-2020-explained");
    const { rerender } = render(<Footer />);
    let footer = screen.getByRole("contentinfo");
    // From EN, switcher should target the equivalent /ar path
    const arSwitch = within(footer).getByRole("link", { name: /عربي|arabic/i });
    expect(arSwitch).toHaveAttribute(
      "href",
      "/ar/learn/incoterms-2020-explained",
    );

    setPathname("/ar/legal/privacy-policy");
    rerender(<Footer />);
    footer = screen.getByRole("contentinfo");
    const enSwitch = within(footer).getByRole("link", { name: /english|en/i });
    expect(enSwitch).toHaveAttribute("href", "/en/legal/privacy-policy");
  });

  it("has no axe violations", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
