import {AxiosRequestConfig} from './types'

export default function xhr(config: AxiosRequestConfig):void{
    const {data, url, method = 'GET'} = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, async:true)
    request.send(data)
}