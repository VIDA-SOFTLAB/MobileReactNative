var request = require('request');

import {createUser} from './firebase'

const HOST = 'http://localhost:9000'

export async function cadastrar(data){

    const user = await createUser(data.email, data.password)

    if (user.status){
        const userInfo = user.userInfo

        console.log(userInfo.uid)

        data.uid = userInfo.uid

        var options = {
            'method': 'POST',
            'url': HOST + '/api/patient/',
            'headers': {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return new Promise(function(resolve, reject) {
            request.post(options, function(err, resp, body) {
              if (err) {
                reject(err);
              } else {
                resolve(body);
              }
            })
        })
    }
    else{
        return {
            status : false,
            error  : user.errorCode
        }
    } 
}

export async function getUserByCpf(cpf){
    var options = {
        'method': 'GET',
        'url': HOST + '/api/patientByCpf/' + cpf,
        'headers': {
        }
    };

    return new Promise(function(resolve, reject) {
        request.get(options, function(err, resp, body) {
          if (err) {
            reject(err);
          } else {
            resolve(body);
          }
        })
    })
}
