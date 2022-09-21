import React from 'react';
import CustomTable from './widgets/Table/CustomTable';
import { venderColumns } from './data/vendor-table';
import { appColumns } from './data/application-table';
import { useSelector, useDispatch } from 'react-redux';
import { updateVendor } from './redux/vendorReducer';
import { updateApp } from './redux/appReducer';

function App() {
  const dispatch = useDispatch();
  const vendorData = useSelector((state) => state.vendor);
  const appData = useSelector((state) => state.app);

  const updateVendorData = (rowIndex, columnId, value) => {
    dispatch(
      updateVendor({
        rowIndex: rowIndex,
        columnId: columnId,
        value: value,
      })
    );
  };

  const updateAppData = (rowIndex, columnId, value) => {
    dispatch(
      updateApp({
        rowIndex: rowIndex,
        columnId: columnId,
        value: value,
      })
    );
  };

  const renderRowSubComponent = (index) => {
    const filteredData = appData.filter((a) => a.vendorId === index);
    return filteredData.length ? (
      <CustomTable
        columns={appColumns}
        data={filteredData}
        updateData={updateAppData}
        editableColumns={['category']}
        headerColor={'#d7e3fc'}
        bodyColor={'#edf2fb'}
      />
    ) : null;
  };

  return (

      <CustomTable
        columns={venderColumns}
        data={vendorData}
        updateData={updateVendorData}
        isSubComponentExpanded={true}
        subComponent={renderRowSubComponent}
        editableColumns={['source']}
        showPagination={true}
        headerColor={'#f8f9fa'}
        bodyColor={'#e9ecef'}
      />
  );
}

export default App;
