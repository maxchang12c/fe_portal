import { data } from '@/lists/countries.json'

// export interface Country {
//   code: String,
//   name: String
// }

export default class CountryService {
  async getCountries () {
    return data
  }
}
