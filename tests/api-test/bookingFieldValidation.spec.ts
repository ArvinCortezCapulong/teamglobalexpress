import { test, expect } from '@playwright/test';

test.use({ extraHTTPHeaders: { 'X-Api-Key': '6aVjf9M12k70c4' } });

test('Verify API validates required field - First Name', async ({
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
            givenName: '',
            familyName: 'Doe',
            birthDate: '1991-11-11',
            mobilePhone: '0276543321',
            email: '',
            homePhone: ''
          }
        }
      }
    );
    expect(response.status()).toBe(500);
    const resultBody = await response.json();
    expect(resultBody).toStrictEqual({
      message: 'failed to book an appointment'
    });
  }
});

test('Verify API validates required field - Last Name', async ({ request }) => {
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
            familyName: '',
            birthDate: '1991-11-11',
            mobilePhone: '0276543321',
            email: '',
            homePhone: ''
          }
        }
      }
    );
    expect(response.status()).toBe(500);
    const resultBody = await response.json();
    expect(resultBody).toStrictEqual({
      message: 'failed to book an appointment'
    });
  }
});

test('Verify API validates practitioner Id', async ({ request }) => {
  {
    const response = await request.post(
      'https://thefono-website-uat.vercel.app/api/appointment/book/',
      {
        data: {
          startTime: '2023-09-07T09:00:00+12:00',
          practitionerId: '123ABC',
          facilityId: 'F2H030-D',
          slotId:
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
    expect(response.status()).toBe(500);
    const resultBody = await response.json();
    expect(resultBody).toStrictEqual({
      message: 'failed to book an appointment'
    });
  }
});
