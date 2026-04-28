import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { MobileDrawer } from "@/components/nav/MobileDrawer";

describe("MobileDrawer", () => {
  it("renders nothing when closed", () => {
    const { container } = render(
      <MobileDrawer open={false} onClose={() => {}} lang='en' />,
    );
    expect(container.querySelector('[role="dialog"]')).toBeNull();
  });

  it("renders the dialog with primary nav when open (en, LTR)", () => {
    render(<MobileDrawer open onClose={() => {}} lang='en' />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute("dir", "ltr");
    expect(within(dialog).getByText("Home")).toBeInTheDocument();
    expect(within(dialog).getByText("Educational")).toBeInTheDocument();
    expect(within(dialog).getByText("Legal")).toBeInTheDocument();
  });

  it("renders RTL attributes and arabic labels in ar", () => {
    render(<MobileDrawer open onClose={() => {}} lang='ar' />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("dir", "rtl");
    expect(dialog.className).toMatch(/font-arabic/);
    expect(within(dialog).getByText("التعليمية")).toBeInTheDocument();
    expect(within(dialog).getByText("الشؤون القانونية")).toBeInTheDocument();
  });

  it("locks body scroll while open", () => {
    const { unmount } = render(
      <MobileDrawer open onClose={() => {}} lang='en' />,
    );
    expect(document.body.style.overflow).toBe("hidden");
    unmount();
    expect(document.body.style.overflow).not.toBe("hidden");
  });

  it("calls onClose when Escape is pressed", async () => {
    const onClose = vi.fn();
    render(<MobileDrawer open onClose={onClose} lang='en' />);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onClose when overlay is clicked", async () => {
    const onClose = vi.fn();
    render(<MobileDrawer open onClose={onClose} lang='en' />);
    const overlay = screen.getAllByRole("button", { name: /close menu/i })[0];
    await userEvent.click(overlay);
    expect(onClose).toHaveBeenCalled();
  });

  it("expands the Educational section and lists at least one article link", async () => {
    render(<MobileDrawer open onClose={() => {}} lang='en' />);
    const trigger = screen.getByRole("button", { name: /^educational$/i });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const links = screen.getAllByRole("link", { name: /.+/ });
    const learnLinks = links.filter((a) =>
      (a as HTMLAnchorElement).href.includes("/en/learn/"),
    );
    expect(learnLinks.length).toBeGreaterThan(0);
  });

  it("has no obvious axe violations when open", async () => {
    const { container } = render(
      <MobileDrawer open onClose={() => {}} lang='en' />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
