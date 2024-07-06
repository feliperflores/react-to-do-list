import { render, screen } from "@testing-library/react";
import TrashIcon from "../../TaskList/TrashIcon";

describe("TrashIcon", () => {
  it("should render correctly", () => {
    const onClickMock = () => console.log();
    const component = <TrashIcon onClick={onClickMock} />;

    render(component);

    const button = screen.getByRole("button");
    const svg = button.firstChild as SVGElement;

    expect(svg.getAttribute("width")).toBe("20");
    expect(svg.getAttribute("height")).toBe("20");
    expect(screen.getByTitle("Trash Icon")).toBeInTheDocument();
  });
});
