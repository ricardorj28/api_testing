import  {test, expect} from '@playwright/test'
import { request } from 'http';

test('API GET REQUEST', async ({request}) => {  //Get is to check if the responses matches with given URL
    const response = await request.get('https://reqres.in/api/users/2');
    expect(response.status()).toBe(200)  //2oo is a OK response of the request and data exists

    const text = await response.text();
    expect(text).toContain('Janet')  //toContain is has the text anywhere

    console.log(await response.json());  // This is to check if responses are in the console
})

test ('API POST REQUEST', async({request}) => {  // Used to create new data
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            'name': 'Ricardo',
            'job': 'QA'
        }
    });

    expect(response.status()).toBe(201)  //201 is OK the response but was created new data successfully using POST 

    const text = await response.text();
    expect(text).toContain('Ricardo')  

    console.log(await response.json()); 
})

test ('API PUT REQUEST', async({request}) => {  // Used to update old data
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            'name': 'Ricardo',
            'job': 'QA'
        }
    });

    expect(response.status()).toBe(200)  //200 when is updated correctly

    const text = await response.text();
    expect(text).toContain('Ricardo')  

    console.log(await response.json()); 
})

test ('API DELETE REQUEST', async({request}) => {  // Used to update old data
    const response = await request.delete('https://reqres.in/api/users/2', {
        data: {
            'name': 'Ricardo',
            'job': 'QA'
        }
    });

    expect(response.status()).toBe(204)  //204 when is successfully deleted

})