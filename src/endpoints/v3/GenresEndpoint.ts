import GenresEndpointNS from '../../interfaces/v3/genres';

import type { IClient } from '../../utils/Client';

export default class GenresEndpoint implements GenresEndpointNS.Class {
	private readonly apiKey: string;
	private readonly language: string;
	private readonly client: IClient;

	public constructor(options: GenresEndpointNS.Options.Constructor) {
		this.apiKey = options.apiKey;
		this.language = options.language;
		this.client = options.client;
	}

	public async movie(language?: string): Promise<GenresEndpointNS.Results.Movie> {
		return this.client.get(
			'genre/movie/list',
			{
				searchParams: {
					api_key: this.apiKey,
					language: language ?? this.language,
				},
			},
		);
	}

	public async tv(language?: string): Promise<GenresEndpointNS.Results.TV> {
		return this.client.get(
			'genre/tv/list',
			{
				searchParams: {
					api_key: this.apiKey,
					language: language ?? this.language,
				},
			},
		);
	}
}