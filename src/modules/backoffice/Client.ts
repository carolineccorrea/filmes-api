import axios, { AxiosStatic } from "axios";
import { InternalError } from "src/utils/errors/internal-error";
import { MovieNormalized } from "./MovieNormalized.model";

export class ClientRequestError extends InternalError {
    constructor(message: string) {
      const internalMessage =
        'Unexpected error when trying to communicate to MovieClient';
      super(`${internalMessage}: ${message}`);
    }
  }

export class MovieClient {
    constructor(public request: AxiosStatic = axios) { }
    public async fetchPoints(tit: string): Promise<any> {
        try {
            const response = await this.request.get<any>(`http://www.omdbapi.com/?apikey=cc16fa59&t=${tit}`,
            );

            return response.data;

        } catch (error) {
            throw new ClientRequestError(error.message)
        }
    }
}