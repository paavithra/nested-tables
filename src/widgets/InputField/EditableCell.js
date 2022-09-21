import React from 'react';
import { FormControl, Input, InputAdornment, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function EditableCell({
  value: initialValue,
  row: { index },
  column: { id },
  editableColumns,
  updateData,
}) {
  const [value, setValue] = React.useState(initialValue);
  const [show, setShow] = React.useState(false);

  const onChange = (e) => setValue(e.target.value);
  const onSave = () => {
    updateData(index, id, value);
    setShow(false);
  };

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (editableColumns.includes(id)) {
    return (
      <FormControl variant='standard'>
        <Input
          id='filled-adornment-password'
          size='small'
          value={value}
          onChange={onChange}
          onFocus={() => setShow(true)}
          endAdornment={
            <InputAdornment position='end'>
              {show && (
                <IconButton onClick={onSave} edge='end' size='small'>
                  <CheckCircleIcon />
                </IconButton>
              )}
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
  return value;
}
