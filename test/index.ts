import { expect } from 'chai';
import * as flowedSdk from '../src';

describe('flowed sdk', () => {
  it('check exported fields', () => {
    const expectedMembers: string[] = ['FlowedClient'];
    expect(Object.keys(flowedSdk)).to.deep.equal(expectedMembers);
  });
});
