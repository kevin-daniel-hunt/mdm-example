import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

/*
  Imagine this hits a rest API, say using axios, something like:
  `return axios.get('/device');`
  for some restful return on the device resource of an list of devices associated 
  with the dashboard user (would need token from auth to be passed through)
*/

export const HEALTH = ['GOOD', 'FAIR', 'POOR'];
export const TYPE = ['mac', 'iphone'];

export function fetchMachines() {
  const machines = [];
  const count = Math.floor(Math.random() * 16) + 5;
  

  const vNum = () => {
    return Math.floor(Math.random() * 99);
  }

  for (let i = 0; i < count; i++) {
    
    machines.push({
      name: uniqueNamesGenerator({ 
        dictionaries: [colors, adjectives, animals],
        separator: '',
        style: 'capital',
      }),
      version: `v${vNum()}.${vNum()}.${vNum()}`,
      type: TYPE[Math.floor(Math.random() * TYPE.length)],
      health: HEALTH[Math.floor(Math.random() * HEALTH.length)],
    });
  }
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(machines);
    }, 2000);
  });
}
