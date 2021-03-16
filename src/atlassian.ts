import { OAuth2Provider, Utils } from '@salte-auth/salte-auth';

export class Atlassian extends OAuth2Provider {
  public constructor(config: Atlassian.Config) {
    super(config);

    this.config = Utils.Common.defaults(this.config, {
      url: 'https://auth.atlassian.com',
    });
  }

  public get name(): string {
    return 'atlassian';
  }

  public get login(): string {
    return this.url(`${this.config.url}/authorize`, {
      audience: this.config.audience,
      prompt: this.config.prompt
    });
  }
}

export interface Atlassian {
  config: Atlassian.Config;
}

export declare namespace Atlassian {
  interface Config extends OAuth2Provider.Config {
    url?: string;
    audience?: string;
    prompt?:string;
  }
}
