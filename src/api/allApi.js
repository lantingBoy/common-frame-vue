import api from './API'


export function testApi(params) {
  return api.post({
    url: 'point',
    params: params
  })
}
