export const venderColumns = [
  {
    Header: 'Vendor Name',
    accessor: 'vendorName',
  },
  {
    Header: '# of Applications',
    accessor: 'noOfApps',
  },
  {
    Header: 'Total Spend (YTD)',
    accessor: 'totalSpentYTD',
  },
  {
    Header: 'Active Contract',
    accessor: 'activeContract',
  },
  {
    Header: 'Source',
    accessor: 'source',
  },
  {
    Header: 'Total Spend (Last 12 Months)',
    accessor: 'totalSpent12Mnths',
  },
  {
    Header: 'Contract Value',
    accessor: 'contractVal',
  },
];

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newVendor = (index) => {
  return {
    id: index+1,
    vendorName: `Vendor${index + 1}`,
    noOfApps: Math.floor(Math.random() * 1000),
    totalSpentYTD: Math.floor(Math.random() * 30),
    activeContract: Math.floor(Math.random() * 2),
    source: `Source${index + 1}`,
    totalSpent12Mnths: Math.floor(Math.random() * 1000),
    contractVal: Math.floor(Math.random() * 100),
  };
};

export function makeVendorData(lens) {
  return range(lens).map((d, index) => {
    return {
      ...newVendor(index),
    };
  });
}
