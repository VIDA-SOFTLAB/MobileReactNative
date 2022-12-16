var request = require('request');

import {createUser} from './firebase'

const HOST = 'http://localhost:5000'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJqdGkiOiI5NjdmMzBlNy05NDZhLTRkOTYtYTY4ZC1lYTYwMDhhMmM4MTQiLCJOYW1lSWQiOiIxIiwiYWRtaW5pc3RyYXRvck5vdyI6IjEiLCJleHAiOjE2NzYzODA2MzksImlzcyI6ImlyaXMyLnNAZW1haWwuY29tIiwiYXVkIjoiaXJpczIuc0BlbWFpbC5jb20ifQ.CtDvxFEzP-XYGXPOmECig93E4T8N1tGYETXNB4AHRkg'

export async function register(data, createFirebase = true){
  var user
  if (createFirebase){
    user = await createUser(data.Email, data.Password)
    const userInfo = user.userInfo

    //console.log(userInfo.uid)

    //data.uid = userInfo.uid

    if (!(user.status)){
      return {
        status : false,
        error  : user.errorCode
      }
    }
  }
  

  var options = {
      'method': 'POST',
      'url': HOST + '/api/1/patient/',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
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

export async function getUserByCpf(cpf){
  var options = {
      'method': 'GET',
      'url': HOST + '/api/1/patient/cpf/' + cpf.replace(/\D/g, ""),
      'headers': {
        'Authorization': 'Bearer ' + TOKEN
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

export async function registerExam(data){
  var options = {
      'method': 'POST',
      'url': HOST + '/api/1/exam/',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
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

export async function registerConsult(data){
  var options = {
      'method': 'POST',
      'url': HOST + '/api/1/consult/',
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
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


export async function getExamsByCpf(cpf){
  var options = {
      'method': 'GET',
      'url': HOST + '/api/1/exam/cpf/' + cpf.replace(/\D/g, ""),
      'headers': {
        'Authorization': 'Bearer ' + TOKEN
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

export async function getConsultsByCpf(cpf){
  var options = {
      'method': 'GET',
      'url': HOST + '/api/1/consult/cpf/' + cpf.replace(/\D/g, ""),
      'headers': {
        'Authorization': 'Bearer ' + TOKEN
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

export async function getMedicalInsurance(){
  var options = {
      'method': 'GET',
      'url': HOST + '/api/1/MedicalInsuranceNew/ListarConvenio',
      'headers': {
        'Authorization': 'Bearer ' + TOKEN
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





