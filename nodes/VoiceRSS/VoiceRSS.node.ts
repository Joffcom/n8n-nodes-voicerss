import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class VoiceRSS implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'VoiceRSS',
		name: 'VoiceRSS',
		icon: 'fa:rss',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Use the Voice RSS Text-To-Speech API to create an audio stream.',
		defaults: {
			name: 'VoiceRSS',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'voiceRSSApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'http://api.voicerss.org',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Create',
						value: 'create',
						action: 'Create an audio stream from text',
						description: 'Create an audio stream from text',
						routing: {
							request: {
								method: 'GET',
								url: '/',
							},
						},
					},
				],
				default: 'create',
			},

			// Required
			{
				displayName: 'Text',
				description: 'The text to convert',
				required: true,
				name: 'text',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'query',
						property: 'src',
					},
				},
			},
			{
				displayName: 'Language',
				description: 'The language of the text',
				required: true,
				name: 'language',
				type: 'options',
				default: 'en-gb',
				options: [
					{
						name: 'Arabic (Egypt)',
						value: 'ar-eg',
					},
					{
						name: 'Arabic (Saudi Arabia)',
						value: 'ar-sa',
					},
					{
						name: 'Bulgarian',
						value: 'bg-bg',
					},
					{
						name: 'Catalan',
						value: 'ca-es',
					},
					{
						name: 'Chinese (China)',
						value: 'zh-cn',
					},
					{
						name: 'Chinese (Hong Kong)',
						value: 'zh-hk',
					},
					{
						name: 'Chinese (Taiwan)',
						value: 'zh-tw',
					},
					{
						name: 'Croatian',
						value: 'hr-hr',
					},
					{
						name: 'Czech',
						value: 'cs-cz',
					},
					{
						name: 'Danish',
						value: 'da-dk',
					},
					{
						name: 'Dutch (Belgium)',
						value: 'nl-be',
					},
					{
						name: 'Dutch (Netherlands)',
						value: 'nl-nl',
					},
					{
						name: 'English (Australia)',
						value: 'en-au',
					},
					{
						name: 'English (Canada)',
						value: 'en-ca',
					},
					{
						name: 'English (Great Britain)',
						value: 'en-gb',
					},
					{
						name: 'English (India)',
						value: 'en-in',
					},
					{
						name: 'English (Ireland)',
						value: 'en-ie',
					},
					{
						name: 'English (United States)',
						value: 'en-us',
					},
					{
						name: 'Finnish',
						value: 'fi-fi',
					},
					{
						name: 'French (Canada)',
						value: 'fr-ca',
					},
					{
						name: 'French (France)',
						value: 'fr-fr',
					},
					{
						name: 'French (Switzerland)',
						value: 'fr-ch',
					},
					{
						name: 'German (Austria)',
						value: 'de-at',
					},
					{
						name: 'German (Germany)',
						value: 'de-de',
					},
					{
						name: 'German (Switzerland)',
						value: 'de-ch',
					},
					{
						name: 'Greek',
						value: 'el-gr',
					},
					{
						name: 'Hebrew',
						value: 'he-il',
					},
					{
						name: 'Hindi',
						value: 'hi-in',
					},
					{
						name: 'Hungarian',
						value: 'hu-hu',
					},
					{
						name: 'Indonesian',
						value: 'id-id',
					},
					{
						name: 'Italian',
						value: 'it-it',
					},
					{
						name: 'Japanese',
						value: 'ja-jp',
					},
					{
						name: 'Korean',
						value: 'ko-kr',
					},
					{
						name: 'Malay',
						value: 'ms-my',
					},
					{
						name: 'Norwegian',
						value: 'nb-no',
					},
					{
						name: 'Polish',
						value: 'pl-pl',
					},
					{
						name: 'Portuguese (Brazil)',
						value: 'pt-br',
					},
					{
						name: 'Portuguese (Portugal)',
						value: 'pt-pt',
					},
					{
						name: 'Romanian',
						value: 'ro-ro',
					},
					{
						name: 'Russian',
						value: 'ru-ru',
					},
					{
						name: 'Slovak',
						value: 'sk-sk',
					},
					{
						name: 'Slovenian',
						value: 'sl-si',
					},
					{
						name: 'Spanish (Mexico)',
						value: 'es-mx',
					},
					{
						name: 'Spanish (Spain)',
						value: 'es-es',
					},
					{
						name: 'Swedish',
						value: 'sv-se',
					},
					{
						name: 'Tamil',
						value: 'ta-in',
					},
					{
						name: 'Thai',
						value: 'th-th',
					},
					{
						name: 'Turkish',
						value: 'tr-tr',
					},
					{
						name: 'Vietnamese',
						value: 'vi-vn',
					},
				],
				routing: {
					send: {
						type: 'query',
						property: 'hl',
					},
				},
			},
			// Optional
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				default: {},
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'Speech Voice',
						description: 'The audio format',
						name: 'v',
						type: 'options',
						default: 'Alice',
						// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
						options: [
							{
                name:'Oda (Female)',
                value: 'Oda',
                description: 'Arabic (Egypt)',
              },
              {
                name:'Salim (Male)',
                value: 'Salim',
                description: 'Arabic (Saudi Arabia)',
              },
              {
                name:'Dimo (Male)',
                value: 'Dimo',
                description: 'Bulgarian',
              },
              {
                name:'Rut (Female)',
                value: 'Rut',
                description: 'Catalan',
              },
              {
                name:'Luli (Female)',
                value: 'Luli',
                description: 'Chinese (China)',
              },
              {
                name:'Shu (Female)',
                value: 'Shu',
                description: 'Chinese (China)',
              },
              {
                name:'Chow (Female)',
                value: 'Chow',
                description: 'Chinese (China)',
              },
              {
                name:'Wang (Male)',
                value: 'Wang',
                description: 'Chinese (China)',
              },
              {
                name:'Jia (Female)',
                value: 'Jia',
                description: 'Chinese (Hong Kong)',
              },
              {
                name:'Xia (Female)',
                value: 'Xia',
                description: 'Chinese (Hong Kong)',
              },
              {
                name:'Chen (Male)',
                value: 'Chen',
                description: 'Chinese (Hong Kong)',
              },
              {
                name:'Akemi (Female)',
                value: 'Akemi',
                description: 'Chinese (Taiwan)',
              },
              {
                name:'Lin (Female)',
                value: 'Lin',
                description: 'Chinese (Taiwan)',
              },
              {
                name:'Lee (Male)',
                value: 'Lee',
                description: 'Chinese (Taiwan)',
              },
              {
                name:'Nikola (Male)',
                value: 'Nikola',
                description: 'Croatian',
              },
              {
                name:'Josef (Male)',
                value: 'Josef',
                description: 'Czech',
              },
              {
                name:'Freja (Female)',
                value: 'Freja',
                description: 'Danish',
              },
              {
                name:'Daan (Male)',
                value: 'Daan',
                description: 'Dutch (Belgium)',
              },
              {
                name:'Lotte (Female)',
                value: 'Lotte',
                description: 'Dutch (Netherlands)',
              },
              {
                name:'Bram (Male)',
                value: 'Bram',
                description: 'Dutch (Netherlands)',
              },
              {
                name:'Zoe (Female)',
                value: 'Zoe',
                description: 'English (Australia)',
              },
              {
                name:'Isla (Female)',
                value: 'Isla',
                description: 'English (Australia)',
              },
              {
                name:'Evie (Female)',
                value: 'Evie',
                description: 'English (Australia)',
              },
              {
                name:'Jack (Male)',
                value: 'Jack',
                description: 'English (Australia)',
              },
              {
                name:'Rose (Female)',
                value: 'Rose',
                description: 'English (Canada)',
              },
              {
                name:'Clara (Female)',
                value: 'Clara',
                description: 'English (Canada)',
              },
              {
                name:'Emma (Female)',
                value: 'Emma',
                description: 'English (Canada)',
              },
              {
                name:'Mason (Male)',
                value: 'Mason',
                description: 'English (Canada)',
              },
              {
                name:'Alice (Female)',
                value: 'Alice',
                description: 'English (Great Britain)',
              },
              {
                name:'Nancy (Female)',
                value: 'Nancy',
                description: 'English (Great Britain)',
              },
              {
                name:'Lily (Female)',
                value: 'Lily',
                description: 'English (Great Britain)',
              },
              {
                name:'Harry (Male)',
                value: 'Harry',
                description: 'English (Great Britain)',
              },
              {
                name:'Eka (Female)',
                value: 'Eka',
                description: 'English (India)',
              },
              {
                name:'Jai (Female)',
                value: 'Jai',
                description: 'English (India)',
              },
              {
                name:'Ajit (Male)',
                value: 'Ajit',
                description: 'English (India)',
              },
              {
                name:'Oran (Male)',
                value: 'Oran',
                description: 'English (Ireland)',
              },
              {
                name:'Linda (Female)',
                value: 'Linda',
                description: 'English (United States)',
              },
              {
                name:'Amy (Female)',
                value: 'Amy',
                description: 'English (United States)',
              },
              {
                name:'Mary (Female)',
                value: 'Mary',
                description: 'English (United States)',
              },
              {
                name:'John (Male)',
                value: 'John',
                description: 'English (United States)',
              },
              {
                name:'Mike (Male)',
                value: 'Mike',
                description: 'English (United States)',
              },
              {
                name:'Aada (Female)',
                value: 'Aada',
                description: 'Finnish',
              },
              {
                name:'Emile (Female)',
                value: 'Emile',
                description: 'French (Canada)',
              },
              {
                name:'Olivia (Female)',
                value: 'Olivia',
                description: 'French (Canada)',
              },
              {
                name:'Logan (Female)',
                value: 'Logan',
                description: 'French (Canada)',
              },
              {
                name:'Felix (Male)',
                value: 'Felix',
                description: 'French (Canada)',
              },
              {
                name:'Bette (Female)',
                value: 'Bette',
                description: 'French (France)',
              },
              {
                name:'Iva (Female)',
                value: 'Iva',
                description: 'French (France)',
              },
              {
                name:'Zola (Female)',
                value: 'Zola',
                description: 'French (France)',
              },
              {
                name:'Axel (Male)',
                value: 'Axel',
                description: 'French (France)',
              },
              {
                name:'Theo (Male)',
                value: 'Theo',
                description: 'French (Switzerland)',
              },
              {
                name:'Lukas (Male)',
                value: 'Lukas',
                description: 'German (Austria)',
              },
              {
                name:'Hanna (Female)',
                value: 'Hanna',
                description: 'German (Germany)',
              },
              {
                name:'Lina (Female)',
                value: 'Lina',
                description: 'German (Germany)',
              },
              {
                name:'Jonas (Male)',
                value: 'Jonas',
                description: 'German (Germany)',
              },
              {
                name:'Tim (Male)',
                value: 'Tim',
                description: 'German (Switzerland)',
              },
              {
                name:'Neo (Male)',
                value: 'Neo',
                description: 'Greek',
              },
              {
                name:'Rami (Male)',
                value: 'Rami',
                description: 'Hebrew',
              },
              {
                name:'Puja (Female)',
                value: 'Puja',
                description: 'Hindi',
              },
              {
                name:'Kabir (Male)',
                value: 'Kabir',
                description: 'Hindi',
              },
              {
                name:'Mate (Male)',
                value: 'Mate',
                description: 'Hungarian',
              },
              {
                name:'Intan (Male)',
                value: 'Intan',
                description: 'Indonesian',
              },
              {
                name:'Bria (Female)',
                value: 'Bria',
                description: 'Italian',
              },
              {
                name:'Mia (Female)',
                value: 'Mia',
                description: 'Italian',
              },
              {
                name:'Pietro (Male)',
                value: 'Pietro',
                description: 'Italian',
              },
              {
                name:'Hina (Female)',
                value: 'Hina',
                description: 'Japanese',
              },
              {
                name:'Airi (Female)',
                value: 'Airi',
                description: 'Japanese',
              },
              {
                name:'Fumi (Female)',
                value: 'Fumi',
                description: 'Japanese',
              },
              {
                name:'Akira (Male)',
                value: 'Akira',
                description: 'Japanese',
              },
              {
                name:'Nari (Female)',
                value: 'Nari',
                description: 'Korean',
              },
              {
                name:'Aqil (Male)',
                value: 'Aqil',
                description: 'Malay',
              },
              {
                name:'Marte (Female)',
                value: 'Marte',
                description: 'Norwegian',
              },
              {
                name:'Erik (Male)',
                value: 'Erik',
                description: 'Norwegian',
              },
              {
                name:'Julia (Female)',
                value: 'Julia',
                description: 'Polish',
              },
              {
                name:'Jan (Male)',
                value: 'Jan',
                description: 'Polish',
              },
              {
                name:'Marcia (Female)',
                value: 'Marcia',
                description: 'Portuguese (Brazil)',
              },
              {
                name:'Ligia (Female)',
                value: 'Ligia',
                description: 'Portuguese (Brazil)',
              },
              {
                name:'Yara (Female)',
                value: 'Yara',
                description: 'Portuguese (Brazil)',
              },
              {
                name:'Dinis (Male)',
                value: 'Dinis',
                description: 'Portuguese (Brazil)',
              },
              {
                name:'Leonor (Female)',
                value: 'Leonor',
                description: 'Portuguese (Portugal)',
              },
              {
                name:'Doru (Male)',
                value: 'Doru',
                description: 'Romanian',
              },
              {
                name:'Olga (Female)',
                value: 'Olga',
                description: 'Russian',
              },
              {
                name:'Marina (Female)',
                value: 'Marina',
                description: 'Russian',
              },
              {
                name:'Peter (Male)',
                value: 'Peter',
                description: 'Russian',
              },
              {
                name:'Beda (Male)',
                value: 'Beda',
                description: 'Slovak',
              },
              {
                name:'Vid (Male)',
                value: 'Vid',
                description: 'Slovenian',
              },
              {
                name:'Juana (Female)',
                value: 'Juana',
                description: 'Spanish (Mexico)',
              },
              {
                name:'Silvia (Female)',
                value: 'Silvia',
                description: 'Spanish (Mexico)',
              },
              {
                name:'Teresa (Female)',
                value: 'Teresa',
                description: 'Spanish (Mexico)',
              },
              {
                name:'Jose (Male)',
                value: 'Jose',
                description: 'Spanish (Mexico)',
              },
              {
                name:'Camila (Female)',
                value: 'Camila',
                description: 'Spanish (Spain)',
              },
              {
                name:'Sofia (Female)',
                value: 'Sofia',
                description: 'Spanish (Spain)',
              },
              {
                name:'Luna (Female)',
                value: 'Luna',
                description: 'Spanish (Spain)',
              },
              {
                name:'Diego (Male)',
                value: 'Diego',
                description: 'Spanish (Spain)',
              },
              {
                name:'Molly (Female)',
                value: 'Molly',
                description: 'Swedish',
              },
              {
                name:'Hugo (Male)',
                value: 'Hugo',
                description: 'Swedish',
              },
              {
                name:'Sai (Male)',
                value: 'Sai',
                description: 'Tamil',
              },
              {
                name:'Ukrit (Male)',
                value: 'Ukrit',
                description: 'Thai',
              },
              {
                name:'Omer (Male)',
                value: 'Omer',
                description: 'Turkish',
              },
              {
                name:'Chi (Male)',
                value: 'Chi',
                description: 'Vietnamese',
              },
						],
						routing: {
							send: {
								type: 'query',
								property: 'v',
							},
						},
					},
					{
						displayName: 'Speech Rate',
						description:
							'The speech rate (speed). Allows values: from -10 (slowest speed) up to 10 (fastest speed). Default value: 0 (normal speed)',
						name: 'r',
						type: 'number',
						default: 0,
						routing: {
							send: {
								type: 'query',
								property: 'r',
							},
						},
					},
					{
						displayName: 'Speech Audio Codec',
						description: 'The audio codec',
						name: 'c',
						type: 'options',
						default: 'WAV',
						options: [
							{
								name: 'AAC',
								value: 'AAC',
							},
							{
								name: 'CAF',
								value: 'CAF',
							},
							{
								name: 'MP3',
								value: 'MP3',
							},
							{
								name: 'OGG',
								value: 'OGG',
							},
							{
								name: 'WAV',
								value: 'WAV',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'c',
							},
						},
					},
					{
						displayName: 'Speech Audio Format',
						description: 'The audio format',
						name: 'f',
						type: 'options',
						default: '8khz_8bit_mono',
						options: [
							{
								name: '11 kHz, 16 Bit, Mono',
								value: '11khz_16bit_mono',
							},
							{
								name: '11 kHz, 16 Bit, Stereo',
								value: '11khz_16bit_stereo',
							},
							{
								name: '11 kHz, 8 Bit, Mono',
								value: '11khz_8bit_mono',
							},
							{
								name: '11 kHz, 8 Bit, Stereo',
								value: '11khz_8bit_stereo',
							},
							{
								name: '12 kHz, 16 Bit, Mono',
								value: '12khz_16bit_mono',
							},
							{
								name: '12 kHz, 16 Bit, Stereo',
								value: '12khz_16bit_stereo',
							},
							{
								name: '12 kHz, 8 Bit, Mono',
								value: '12khz_8bit_mono',
							},
							{
								name: '12 kHz, 8 Bit, Stereo',
								value: '12khz_8bit_stereo',
							},
							{
								name: '16 kHz, 16 Bit, Mono',
								value: '16khz_16bit_mono',
							},
							{
								name: '16 kHz, 16 Bit, Stereo',
								value: '16khz_16bit_stereo',
							},
							{
								name: '16 kHz, 8 Bit, Mono',
								value: '16khz_8bit_mono',
							},
							{
								name: '16 kHz, 8 Bit, Stereo',
								value: '16khz_8bit_stereo',
							},
							{
								name: '22 kHz, 16 Bit, Mono',
								value: '22khz_16bit_mono',
							},
							{
								name: '22 kHz, 16 Bit, Stereo',
								value: '22khz_16bit_stereo',
							},
							{
								name: '22 kHz, 8 Bit, Mono',
								value: '22khz_8bit_mono',
							},
							{
								name: '22 kHz, 8 Bit, Stereo',
								value: '22khz_8bit_stereo',
							},
							{
								name: '24 kHz, 16 Bit, Mono',
								value: '24khz_16bit_mono',
							},
							{
								name: '24 kHz, 16 Bit, Stereo',
								value: '24khz_16bit_stereo',
							},
							{
								name: '24 kHz, 8 Bit, Mono',
								value: '24khz_8bit_mono',
							},
							{
								name: '24 kHz, 8 Bit, Stereo',
								value: '24khz_8bit_stereo',
							},
							{
								name: '32 kHz, 16 Bit, Mono',
								value: '32khz_16bit_mono',
							},
							{
								name: '32 kHz, 16 Bit, Stereo',
								value: '32khz_16bit_stereo',
							},
							{
								name: '32 kHz, 8 Bit, Mono',
								value: '32khz_8bit_mono',
							},
							{
								name: '32 kHz, 8 Bit, Stereo',
								value: '32khz_8bit_stereo',
							},
							{
								name: '44 kHz, 16 Bit, Mono',
								value: '44khz_16bit_mono',
							},
							{
								name: '44 kHz, 16 Bit, Stereo',
								value: '44khz_16bit_stereo',
							},
							{
								name: '44 kHz, 8 Bit, Mono',
								value: '44khz_8bit_mono',
							},
							{
								name: '44 kHz, 8 Bit, Stereo',
								value: '44khz_8bit_stereo',
							},
							{
								name: '48 kHz, 16 Bit, Mono',
								value: '48khz_16bit_mono',
							},
							{
								name: '48 kHz, 16 Bit, Stereo',
								value: '48khz_16bit_stereo',
							},
							{
								name: '48 kHz, 8 Bit, Mono',
								value: '48khz_8bit_mono',
							},
							{
								name: '48 kHz, 8 Bit, Stereo',
								value: '48khz_8bit_stereo',
							},
							{
								name: '8 kHz, 16 Bit, Mono',
								value: '8khz_16bit_mono',
							},
							{
								name: '8 kHz, 16 Bit, Stereo',
								value: '8khz_16bit_stereo',
							},
							{
								name: '8 kHz, 8 Bit, Mono',
								value: '8khz_8bit_mono',
							},
							{
								name: '8 kHz, 8 Bit, Stereo',
								value: '8khz_8bit_stereo',
							},
							{
								name: 'ALaw, 11 kHz, Mono',
								value: 'alaw_11khz_mono',
							},
							{
								name: 'ALaw, 11 kHz, Stereo',
								value: 'alaw_11khz_stereo',
							},
							{
								name: 'ALaw, 22 kHz, Mono',
								value: 'alaw_22khz_mono',
							},
							{
								name: 'ALaw, 22 kHz, Stereo',
								value: 'alaw_22khz_stereo',
							},
							{
								name: 'ALaw, 44 kHz, Mono',
								value: 'alaw_44khz_mono',
							},
							{
								name: 'ALaw, 44 kHz, Stereo',
								value: 'alaw_44khz_stereo',
							},
							{
								name: 'ALaw, 8 kHz, Mono',
								value: 'alaw_8khz_mono',
							},
							{
								name: 'ALaw, 8 kHz, Stereo',
								value: 'alaw_8khz_stereo',
							},
							{
								name: 'uLaw, 11 kHz, Mono',
								value: 'ulaw_11khz_mono',
							},
							{
								name: 'uLaw, 11 kHz, Stereo',
								value: 'ulaw_11khz_stereo',
							},
							{
								name: 'uLaw, 22 kHz, Mono',
								value: 'ulaw_22khz_mono',
							},
							{
								name: 'uLaw, 22 kHz, Stereo',
								value: 'ulaw_22khz_stereo',
							},
							{
								name: 'uLaw, 44 kHz, Mono',
								value: 'ulaw_44khz_mono',
							},
							{
								name: 'uLaw, 44 kHz, Stereo',
								value: 'ulaw_44khz_stereo',
							},
							{
								name: 'uLaw, 8 kHz, Mono',
								value: 'ulaw_8khz_mono',
							},
							{
								name: 'uLaw, 8 kHz, Stereo',
								value: 'ulaw_8khz_stereo',
							},
						],
						routing: {
							send: {
								type: 'query',
								property: 'f',
							},
						},
					},
					{
						displayName: 'SSML',
						description: 'Whether to use the SSML textual content format',
						name: 'ssml',
						type: 'boolean',
						default: false,
						routing: {
							send: {
								type: 'query',
								property: 'ssml',
							},
						},
					},
					{
						displayName: 'Base64 Encoded',
						description: 'Whether to output as a Base64 string',
						name: 'b64',
						type: 'boolean',
						default: false,
						routing: {
							send: {
								type: 'query',
								property: 'b64',
							},
						},
					},
				],
			},
		],
	};
}
