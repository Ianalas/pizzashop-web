import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Pagination } from '../src/components/pagination';

const onPageChangeCallback = vi.fn();

describe("Pagination", () =>{
  beforeEach( () =>{
    onPageChangeCallback.mockClear() //aqui vc consegue limpar as chamadas assim o callback será unico para cada teste unitário
  })

  it("should display the right amount of page and results", () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />
    )

    expect(wrapper.getByText("Página 1 de 20")).toBeInTheDocument()
    expect(wrapper.getByText("Total de 200 item(s)")).toBeInTheDocument()
  })

  it("should be able to navigate to the next page", async  () => {
    const user = userEvent.setup();

    const wrapper =render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton =  wrapper.getByRole("button", {
      name: "Próxima Página",
    })

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(1);
  })

  it("should be able to navigate to the previous page", async  () => {
    const user = userEvent.setup();

    const wrapper =render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton =  wrapper.getByRole("button", {
      name: "Página anterior",
    })

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(4);
  })

  it("should be able to navigate to the first page", async  () => {
    const user = userEvent.setup();

    const wrapper =render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton =  wrapper.getByRole("button", {
      name: "Primeira Página",
    })

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(0);
  })

  it("should be able to navigate to the last page", async  () => {
    const user = userEvent.setup();

    const wrapper =render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />
    )

    const nextPageButton =  wrapper.getByRole("button", {
      name: "Última Página",
    })

    await user.click(nextPageButton);

    expect(onPageChangeCallback).toHaveBeenCalledWith(19);
  })
})