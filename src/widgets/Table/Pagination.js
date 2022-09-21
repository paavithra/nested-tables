import {
  Grid,
  IconButton,
  Container,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

export default function Pagination({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}) {
  return (
    <Container maxWidth='sm'>
      <Grid
        container
        justifyContent='center'
        spacing={0}
        alignItems='center'
        sx={{
          borderColor: 'block',
          borderStyle: 'solid',
          borderWidth: '1px',
          marginTop: '1px',
          borderRadius: '5px',
        }}
      >
        <Grid item xs>
          <IconButton
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            size='small'
          >
            <KeyboardDoubleArrowLeftRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <IconButton
            onClick={previousPage}
            disabled={!canPreviousPage}
            size='small'
          >
            <KeyboardArrowLeftRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item xs sx={{ marginLeft: '0px' }}>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </Grid>
        <Grid item xs sx={{ marginRight: '20px', marginLeft: '5px' }}>
          <FormControl variant='standard'>
            <Select
              size='small'
              labelId='demo-select-small'
              id='demo-select-small'
              value={pageSize}
              label='Show'
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <MenuItem value={pageSize} key={pageSize}>
                  Show {pageSize}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <IconButton onClick={nextPage} disabled={!canNextPage} size='small'>
            <KeyboardArrowRightRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <IconButton
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            size='small'
          >
            <KeyboardDoubleArrowRightRoundedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}
