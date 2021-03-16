import chai from 'chai';
import chaiString from 'chai-string';
import { Atlassian } from '../../src/atlassian';

const { expect } = chai;
chai.use(chaiString);

describe('Atlassian', () => {
  describe('getter(name)', () => {
    it('should be "atlassian"', () => {
      const atlassian = new Atlassian({
        clientID: '12345',
        responseType: 'token'
      });

      expect(atlassian.name).to.equal('atlassian');
    });
  });

  describe('getter(login)', () => {
    it('should construct a login url', () => {
      const atlassian = new Atlassian({
        clientID: '12345',
        responseType: 'code',
        scope: 'read:jira-work',
        audience: 'api.atlassian.com',
        prompt: 'consent',
        redirectUrl: 'http://localhost'
      });

      const url = new URL(atlassian.$login());
      expect(`${url.protocol}//${url.hostname}${url.pathname}`).to.equal('https://auth.atlassian.com/authorize');
      expect(url.searchParams.get('client_id')).to.equal('12345');
      expect(url.searchParams.get('response_type')).to.equal('code');
      expect(url.searchParams.get('redirect_uri')).to.equal('http://localhost');
      expect(url.searchParams.get('state')).to.startWith('atlassian-state-');
      expect(url.searchParams.get('scope')).to.equal('read:jira-work');
    });
  });
});
