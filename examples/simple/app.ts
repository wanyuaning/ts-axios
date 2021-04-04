import axios from '../../src/index'

axios(config: {
    method: 'get',
    url: '/simple/get',
    params: {
        a: 1,
        b: 2
    }
})