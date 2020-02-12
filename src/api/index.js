import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

/*
  Imagine this hits a rest API, say using axios, something like:
  `return axios.get('/device');`
  for some restful return on the device resource of an list of devices associated 
  with the dashboard user (would need token from auth to be passed through)
*/

export function fetchMachines() {
  const machines = [];
  const count = Math.floor(Math.random() * 16) + 2;
  for (let i = 0; i < count; i++) {
    machines.push({
      name: uniqueNamesGenerator({ 
        dictionaries: [colors, adjectives, animals],
        separator: '',
        style: 'capital',
      }),
      type: Math.random() > 0.5 ? 'mac' : 'iphone',
    });
  }
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(machines);
    }, 2000);
  });
}
