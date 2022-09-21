export const appColumns = [
  {
    Header: 'Application Name',
    accessor: 'appName',
  },
  {
    Header: 'Vendor',
    accessor: 'vendor',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Licenses Bought',
    accessor: 'license',
  },
  {
    Header: 'App covered in contract',
    accessor: 'appCovered',
  },
  {
    Header: 'Billing Frequency',
    accessor: 'billFreq',
  },
  {
    Header: 'Payment Terms',
    accessor: 'payTerm',
  },
];

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newApp = (index, vendorLen) => {
  return {
    id: index + 1,
    appName: `Application${index + 1}`,
    vendor: `Vendor${index + 1}`,
    category: `Category${index + 1}`,
    license: Math.floor(Math.random() * 2) ? 'No' : 'Yes',
    appCovered: Math.floor(Math.random() * 2) ? 'No' : 'Yes',
    billFreq: Math.floor(Math.random() * 12),
    payTerm: Math.floor(Math.random() * 4),
    vendorId: Math.floor(Math.random() * vendorLen)
  };
};

export function makeAppData(lens, vendorLen) {
  return range(lens).map((d, index) => {
    return {
      ...newApp(index, vendorLen),
    };
  });
}
