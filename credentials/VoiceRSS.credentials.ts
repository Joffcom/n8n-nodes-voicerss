import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class VoiceRSSApi implements ICredentialType {
	name = 'voiceRSSApi';
	displayName = 'Voice RSS API';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'key',
			type: 'string',
			default: '',
		},
	];


	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			query: {
				key: '={{$credentials.key}}',
			},
		},
	};
}
