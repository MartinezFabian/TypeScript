"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchAllCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://restcountries.com/v3.1/all';
        try {
            const response = yield fetch(url);
            if (response.ok) {
                const data = yield response.json();
                const countries = data.map((country) => {
                    return {
                        key: country.cca3,
                        name: country.name.common,
                        flag: country.flags.svg,
                    };
                });
                return countries;
            }
            else {
                console.error(response.statusText);
                return null;
            }
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = yield fetchAllCountries();
        if (countries) {
            console.log(countries);
        }
    });
}
main();
