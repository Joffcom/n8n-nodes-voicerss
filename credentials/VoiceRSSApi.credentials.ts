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
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				key: '={{ $credentials.key }}',
			},
		},
	};
}
