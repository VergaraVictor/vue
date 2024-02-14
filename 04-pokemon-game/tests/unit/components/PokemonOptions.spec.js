import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/helpers/getPokemonOptions";

import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("debe de hacer match con el snapshot", () => {
    console.log(wrapper.html());
    // toMatchInlineSnapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});
