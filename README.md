

<h3 align="center">
	A Salte Auth provider for authenticating with Atlassian Products!
</h3>

<p align="center">
	<strong>
		<a href="https://salte-auth.gitbook.io">Docs</a>
		•
		<a href="https://salte-auth-demo.glitch.me">Demo</a>
	</strong>
</p>

<div align="center">

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Downloads][npm-downloads-image]][npm-url]
 
</div>

## Install

```sh
$ npm install @jangolano/atlassian
```

## Usage

```js
import { SalteAuth } from '@salte-auth/salte-auth';
import { Atlassian } from '@jangolano/atlassian';
import { Redirect } from '@salte-auth/redirect';

const auth = new SalteAuth({
  providers: [
  new Atlassian({
    clientID: '12345',
    responseType: 'code',
    scope: 'read:jira-work',
    audience: 'api.atlassian.com',
    prompt: 'consent',
    redirectUrl: 'http://localhost'
  })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

auth.login('atlassian');
```

[npm-version-image]: https://img.shields.io/npm/v/@jangolano/atlassian.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/@jangolano/atlassian.svg?style=flat
[npm-url]: https://npmjs.org/package/@jangolano/atlassian


