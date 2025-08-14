import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoursesPage from "@/app/(app)/app/courses/page";

describe("CoursesPage", () => {
  it("renders course cards", () => {
    render(<CoursesPage /> as any);
    expect(screen.getByText(/알고리즘|자료구조|운영체제|컴퓨터네트워크/i)).toBeTruthy();
  });
});


