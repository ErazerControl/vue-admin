/**
 * 仓库    #236491 有点东西
 * 在线编辑 http://rap2.taobao.org/repository/editor?id=236491
 * 仓库数据 http://rap2api.taobao.org/repository/get?id=236491
 * 请求地址 http://rap2api.taobao.org/app/mock/236491/:method/:url
 *    或者 http://rap2api.taobao.org/app/mock/template/:interfaceId
 *    或者 http://rap2api.taobao.org/app/mock/data/:interfaceId
 */
// (function() {
//   let repositoryId = 236491
//   let interfaces = [{
//       id: 1364155,
//       name: '示例接口',
//       method: 'GET',
//       url: '/example/1573610789114',
//       request: {
//         "foo": "@ctitle"
//       },
//       response: {
//         "string|1-10": "★",
//         "number|1-100": 1,
//         "boolean|1-2": true,
//         "regexp": {},
//         "array|1-10": [{
//           "foo|+1": 1,
//           "bar|1-10": "★"
//         }],
//         "items": [1, true, "hello", {}],
//         "object": {
//           "foo|+1": 1,
//           "bar|1-10": "★"
//         },
//         "placeholder": "@title"
//       }
//     },
//     {
//       id: 1364199,
//       name: '获取学生信息',
//       method: 'GET',
//       url: '/student',
//       request: {
//         "id|1-100": 1
//       },
//       response: {
//         "name": "@name",
//         "age|8-18": 1
//       }
//     },
//     {
//       id: 1364256,
//       name: '示例接口',
//       method: 'GET',
//       url: '/example/1573612758923',
//       request: {
//         "foo": "@ctitle"
//       },
//       response: {
//         "string|1-10": "★",
//         "number|1-100": 1,
//         "boolean|1-2": true,
//         "regexp": {},
//         "array|1-10": [{
//           "foo|+1": 1,
//           "bar|1-10": "★"
//         }],
//         "items": [1, true, "hello", {}],
//         "object": {
//           "foo|+1": 1,
//           "bar|1-10": "★"
//         },
//         "placeholder": "@title"
//       }
//     },
//     {
//       id: 1367744,
//       name: '示例接口',
//       method: 'GET',
//       url: '/example/1573801047932',
//       request: {
//         "foo": "@ctitle"
//       },
//       response: {
//         "string|1-10": "★",
//         "number|1-100": 1,
//         "boolean|1-2": true,
//         "regexp": {},
//         "array|1-10": [{
//           "foo|+1": 1,
//           "bar|1-10": "★"
//         }],
//         "items": [1, true, "hello", {}],
//         "object": {
//           "foo|+1": 1,
//           "bar|1-10": "★"
//         },
//         "placeholder": "@title"
//       }
//     },
//     {
//       id: 1367745,
//       name: '登录',
//       method: 'POST',
//       url: '/login',
//       request: {
//         "username": "admin",
//         "password|6-16": ""
//       },
//       response: {
//         "data|32": "",
//         "code|200": 1
//       }
//     }
//   ]

//   let RAP = window.RAP || {
//     protocol: 'http',
//     host: 'rap2api.taobao.org',
//     interfaces: {}
//   }
//   RAP.interfaces[repositoryId] = interfaces
//   window.RAP = RAP
// })();