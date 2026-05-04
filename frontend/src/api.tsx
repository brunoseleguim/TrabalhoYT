import axios from "axios";

export interface CompanySearch {
  symbol: string;
  description: string; // O Finnhub usa 'description' para o nome da empresa
  type: string;
}

export interface SearchResponse {
  count: number;
  result: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("Erro na API: ", error.message);
    return error.message;
  }
};