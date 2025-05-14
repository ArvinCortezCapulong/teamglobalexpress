import { test, expect } from '@playwright/test';

test.use({ extraHTTPHeaders: { 'X-Api-Key': 'qwerty' } });

test('Verify API validates if request is authenticated', async ({
  request
}) => {
  {
    const response = await request.post(
      'https://thefono-website-uat.vercel.app/api/appointment/book/',
      {
        data: {
          startTime: '2023-09-07T09:00:00+12:00',
          practitionerId: '15BSKA',
          facilityId: 'F2H030-D',
          lotId:
            'f7486b354d6bd0c10757495b04b702171871d1ddd944d581e5251e5dc6a539ee',
          patientPayload: {
            givenName: 'Jane',
            familyName: 'Doe',
            birthDate: '1991-11-11',
            mobilePhone: '0276543321',
            email: '',
            homePhone: ''
          }
        }
      }
    );
    expect(response.status()).toBe(401);
    const resultBody = await response.json();
    expect(resultBody).toStrictEqual({
      message: 'unauthorized'
    });
  }
});
