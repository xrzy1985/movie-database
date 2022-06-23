import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

describe('firebase connection component', () => {

    const REQUIRED = {
        apiKey: "blahblahblahblahblah",
        authDomain: "movie-database.blah.com",
        projectId: "movie-database",
        storageBucket: "movie-database.blahblah.com",
        messagingSenderId: "1234567890",
        appId: "1.12.123.1234.12345.123456",
        measurementId: "N-UMBERSHERE"
    };
  
    beforeEach(() => {
        // clear cache
        jest.resetModules();
    });
  
    test('will receive process.env variables', () => {
      expect(REQUIRED).toBeDefined();
    });

    test('Initialize the firebase connection', () => {
        expect(getFirestore(initializeApp(REQUIRED))).toBeDefined()
    });

    afterAll(() => {
        jest.resetModules();
    });
  });