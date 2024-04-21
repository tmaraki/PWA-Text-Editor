import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  const dbPromise = window.indexedDB.open('openDB');

  const db = await new Promise((resolve, reject) => {
    dbPromise.onsuccess = (event) => resolve(event.target.result);
    dbPromise.onerror = (event) => reject(event.target.error);
  });

  const tx = db.transaction(['jate'], 'readwrite'); // changed this line
  const store = tx.objectStore('jate'); // changed this line
  const request = store.put(content); // changed this line

  await new Promise((resolve, reject) => {
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });

  console.log('Data saved to the database');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const dbPromise = window.indexedDB.open('openDB');

  const db = await new Promise((resolve, reject) => {
    dbPromise.onsuccess = (event) => resolve(event.target.result);
    dbPromise.onerror = (event) => reject(event.target.error);
  });

  const tx = db.transaction(['jate'], 'readonly'); // changed this line
  const store = tx.objectStore('jate'); // changed this line
  const request = store.getAll(); // changed this line

  return await new Promise((resolve, reject) => {
    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
};

initdb();
