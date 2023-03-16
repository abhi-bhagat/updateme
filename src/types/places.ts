export type place = {
	bbox: [];
	geometry: {
		coordinates: [number, number];
		type: string;
	};
	properties: {
		result_type: string;
		city: string;
		county: string;
		state: string;
		postcode: string;
		country: string;
		country_code: string;
		datasource: {
			sourcename: string;
			attribution: string;
			license: string;
			url: string;
		};
		state_code: string;
		lon: number;
		lat: number;
		formatted: string;
		address_line1: string;
		address_line2: string;
		timezone: {
			name: string;
			offset_STD: string;
			offset_STD_seconds: number;
			offset_DST: string;
			offset_DST_seconds: number;
		};
		rank: {
			confidence: number;
			confidence_city_level: number;
			match_type: string;
		};
		place_id: string;
	};
};

export type FormattedPlace = {
	readPlace: string;
	coordinates: {
		lon: number;
		lat: number;
	};
};
