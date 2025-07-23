
let mockData = [
  {
    id: 1,
    name: 'Sayiam Arora',
    contact: '99999999999',
    address: 'main street',
    city: 'Bangalore',
    country: 'India',
    professionType: 'Engineer'
  },
  {
    id: 2,
    name: 'John',
    contact: '989898989898',
    address: 'Avenue street',
    city: 'London',
    country: 'UK',
    professionType: 'Designer'
  }
];

export const fetchRecords = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};

export const updateRecord = (id, updatedRecord) => {
  return new Promise((resolve, reject) => {
    const index = mockData.findIndex((item) => item.id === id);
    if (index !== -1) {
      mockData[index] = updatedRecord;
      resolve({ success: true });
    } else {
      reject();
    }
  });
};
    