import axios from "axios";

// Interface adaptada para o retorno do Finnhub
export interface CompanySearch {
  symbol: string;
  description: string; // O Finnhub chama o nome de 'description'
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Erro na API: ", error.message);
      return error.message;
    } else {
      console.log("Erro inesperado: ", error);
      return "Ocorreu um erro inesperado";
    }
  }
};