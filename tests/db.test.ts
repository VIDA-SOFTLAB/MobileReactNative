const testModule = require('chai');

import {register, getUserByCpf} from '../src/helper/db'

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

describe('Criacao paciente', function() {
    const randN = Array.from({length: 11}, () => Math.floor(Math.random() * 10));
    const cpf = randN.join("")
    it('criacao', async function() {
      this.timeout(15000)
    
      console.log('Cadastrando CPF', cpf)
      const data = {
        "Name": 'TestName',
        "Email": 'TestEmail@gmail.com',
        "Password": 'TestSenha',
        "Rg": "-1",
        "Cpf": cpf,
        "UserName": 'TestUserName',
        "PhoneNumber": '123456789',
        "birthDate": (new Date()).toISOString(),
        "registerDate": (new Date()).toISOString(),
        "lastRegisterUpdate": (new Date()).toISOString(),
        "Adress": {
            "Id": "-1",
            "ZipCode": '123456',
            "District": 'TestDistrict',
            "Fu": 'tu',
            "Locality": 'TestUF',
            "PublicPlace": 'TestPP',
            "Number": '123',
            "AdressComplement": "TestComplement"
        },
        "UserId": "-1",
        "IdAdministrador": "1"
      }

      await register(data, false)
      
      await sleep(1000)

      const retSearch = JSON.parse("" + (await getUserByCpf(cpf)))
      console.log(retSearch)

      testModule.expect(retSearch['cpf']).equal(cpf);
    });
});