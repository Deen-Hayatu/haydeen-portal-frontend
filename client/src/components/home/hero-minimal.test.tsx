import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeroMinimal from "./hero-minimal";

describe("HeroMinimal", () => {
  it("renders GhEHR-first headline and conversion CTAs", () => {
    render(<HeroMinimal />);

    expect(
      screen.getByRole("heading", {
        name: /digital health records built for ghanaian clinics/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByTestId("hero-cta-discover")).toHaveAttribute("href", "/contact?intent=demo");
    expect(screen.getByTestId("hero-cta-discover")).toHaveTextContent(/request demo/i);

    expect(screen.getByTestId("hero-cta-experience")).toHaveAttribute("href", "/solutions/ghehr");
    expect(screen.getByTestId("hero-cta-experience")).toHaveTextContent(/see ghehr in action/i);
  });
});
