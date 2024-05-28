interface CountryAPI {
  cca3: string;
  name: {
    common: string;
  };
  flags: {
    svg: string;
  };
}

interface Country {
  key: string;
  name: string;
  flag: string;
}

async function fetchAllCountries(): Promise<Country[] | null> {
  const url: string = 'https://restcountries.com/v3.1/all';

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data: CountryAPI[] = await response.json();

      const countries: Country[] = data.map((country) => {
        return {
          key: country.cca3,
          name: country.name.common,
          flag: country.flags.svg,
        };
      });

      return countries;
    } else {
      console.error(response.statusText);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function main() {
  const countries = await fetchAllCountries();
  if (countries) {
    console.log(countries);
  }
}

main();
