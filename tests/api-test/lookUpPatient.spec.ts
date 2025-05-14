import { test, expect } from '@playwright/test';

test.use({ extraHTTPHeaders: { 'X-Api-Key': '6aVjf9M12k70c4' } });

// Patient used for tests - exists in Evolution UAT:
//   "name": "Ciaran Cortez", Approved
//   "name1": "Ashton",
//   "prefferedname": "Ash",
//   "phone": "0273448268",
//   "home": "097764416",
//   "country": "Costa Rica",
//   "email": "ligula.nullam@google.com"
//   facility enrolled to F2L030-H

test.describe('Verify patient found combinations', () => {
  test('Medtech - Verify patient found  - mobile, home & email provided', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            mobile: '0273448268',
            homePhone: '097764416',
            email: 'ligula.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(200);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        id: '76cd4bee765f2264bbb184a99152e855'
      });
    }
  });

  test('Medtech - Verify patient found  - mobile & email provided', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            mobile: '0273448268',
            email: 'ligula.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(200);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        id: '76cd4bee765f2264bbb184a99152e855'
      });
    }
  });

  test('Medtech - Verify patient found  - home & email provided', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            homePhone: '097764416',
            email: 'ligula.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(200);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        id: '76cd4bee765f2264bbb184a99152e855'
      });
    }
  });

  test('Medtech - Verify patient found  - mobile provided', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            mobile: '0273448268'
          }
        }
      );
      expect(response.status()).toBe(200);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        id: '76cd4bee765f2264bbb184a99152e855'
      });
    }
  });

  test('Medtech - Verify patient found  - email provided', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            email: 'ligula.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(200);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        id: '76cd4bee765f2264bbb184a99152e855'
      });
    }
  });

  test('Medtech - Verify patient found  - mobile number incorrect but email correct', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            mobile: '0273448212',
            homePhone: '097764416',
            email: 'ligula.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(200);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        id: '76cd4bee765f2264bbb184a99152e855'
      });
    }
  });

  test('Medtech - Verify patient found  - mobile correct & email incorrect', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            mobile: '0273448268',
            homePhone: '097764416',
            email: 'qwerty.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(200);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        id: '76cd4bee765f2264bbb184a99152e855'
      });
    }
  });
});

test.describe('Verify patient not found combinations', () => {
  test('Medtech - Verify patient NOT found  - DoB wrong', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-09-14',
            mobile: '0273448268',
            homePhone: '097764416',
            email: 'ligula.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(404);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        message: 'patient not found'
      });
    }
  });

  test('Medtech - Verify patient NOT found  - mobile wrong', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            mobile: '0273448212'
          }
        }
      );
      expect(response.status()).toBe(404);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        message: 'patient not found'
      });
    }
  });

  test('Medtech - Verify patient NOT found  - email wrong', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Cortez',
            birthDate: '1992-08-14',
            email: 'qwerty.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(404);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        message: 'patient not found'
      });
    }
  });

  test('Medtech - Verify patient NOT found  - family name wrong', async ({
    request
  }) => {
    {
      const response = await request.get(
        'https://thefono-website-uat.vercel.app/api/patient/lookup/',
        {
          params: {
            facilityId: 'F2L030-H',
            familyName: 'Corte',
            birthDate: '1992-08-14',
            mobile: '0273448268',
            email: 'ligula.nullam@google.com'
          }
        }
      );
      expect(response.status()).toBe(404);
      const resultBody = await response.json();
      expect(resultBody).toStrictEqual({
        message: 'patient not found'
      });
    }
  });
});
