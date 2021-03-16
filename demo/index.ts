import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Atlassian } from '../src/atlassian';

const auth = new SalteAuth({
  providers: [
    new Atlassian({
      clientID: '12345',
      responseType: 'code'
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const button = document.createElement('button');
button.innerHTML = `Login`;
button.addEventListener('click', () => {
  auth.login({
    provider: 'atlassian'
  });
});

document.body.appendChild(button);
