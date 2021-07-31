import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {FcPlus} from "@react-icons/all-files/fc/FcPlus";
import {GrSearch} from "@react-icons/all-files/gr/GrSearch";

import {
    Grid,
    Card,
    TextField,
    Divider,
    Button
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from "@material-ui/core/IconButton/IconButton";
import ExitToApp from "@material-ui/core/SvgIcon/SvgIcon";

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}
export default function StickyHeadTable() {

    const handleselectedFile = (prop) => () => {
        setValues({...values, [prop]: fileInput.current.value.split('C:\\fakepath\\')});
    };

    const [values, setValues] = React.useState({
        selectedFile: '',
        // setSelectedFile: '',
    });
    const fileInput = React.useRef(null);

    const countries = [
        {code: 'AD', label: 'Andorra', phone: '376'},
        {code: 'AE', label: 'United Arab Emirates', phone: '971'},
        {code: 'AF', label: 'Afghanistan', phone: '93'},
        {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
        {code: 'AI', label: 'Anguilla', phone: '1-264'},
    ];
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="row mx-0 my-4">
            <Grid spacing={1}>
                <Card className="px-3 pb-4 pt-3 mb-4">
                    <div className="font-size-lg font-weight-bold">
                        <span>
                            <Link to="/suppliers.index"> <FcPlus /></Link>
                            تامین کنندگان
                        </span>

                        <span>
                            <ul>
                                <li>
                                    <IconButton  aria-label="add an alarm">
                                <GrSearch />
                            </IconButton>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <Divider className="my-2"/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>

                            <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                       className="mt-3" id="outlined-textarea"
                                       label="نام تامین کننده"
                                       placeholder="نام تامین کننده" variant="outlined"/>

                            <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="mt-3"
                                              options={countries}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(option) => option.label}
                                              renderOption={(option) => (
                                                  <React.Fragment>
                                                      <span>{countryToFlag(option.code)}</span>
                                                      {option.label} ({option.code}) +{option.phone}
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="وضعیت بررسی"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: 'new-password',
                                                      }}
                                                  />
                                              )}
                        />

                            <Autocomplete fullWidth
                                          size="small"
                                          id="country-select-demo"
                                          className="mt-3"
                                          options={countries}
                                          classes={{
                                              option: classes.option,
                                          }}
                                          autoHighlight
                                          getOptionLabel={(option) => option.label}
                                          renderOption={(option) => (
                                              <React.Fragment>
                                                  <span>{countryToFlag(option.code)}</span>
                                                  {option.label} ({option.code}) +{option.phone}
                                              </React.Fragment>
                                          )}
                                          renderInput={(params) => (
                                              <TextField
                                                  {...params}
                                                  label="وضعیت تایید"
                                                  variant="outlined"
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password',
                                                  }}
                                              />
                                          )}
                            />

                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <TextField fullWidth InputLabelProps={{shrink: true}} className="mt-3"
                                       id="outlined-multiline-flexible" label="کد تامین کننده"
                                       size="small" variant="outlined"/>

                            {/*<FormControl size="small" fullWidth variant="outlined"*/}
                            {/*className={classes.formControl}>*/}
                            {/*<InputLabel htmlFor="outlined-age-native-simple">نوع فاکتور</InputLabel>*/}
                            {/*<Select*/}
                            {/*fullWidth*/}
                            {/*label="نوع فاکتور"*/}
                            {/*value={personName}*/}
                            {/*onChange={handleChange}*/}
                            {/*inputProps={{*/}
                            {/*name: 'نوع فاکتور',*/}
                            {/*id: 'outlined-age-native-simple',*/}
                            {/*}}*/}
                            {/*MenuProps={MenuProps}*/}
                            {/*>*/}
                            {/*{names.map((name) => (*/}
                            {/*<MenuItem key={name} value={name}*/}
                            {/*style={getStyles(name, personName, theme)}>*/}
                            {/*{name}*/}
                            {/*</MenuItem>*/}
                            {/*))}*/}
                            {/*</Select>*/}
                            {/*</FormControl>*/}
                            <Autocomplete fullWidth
                                          size="small"
                                          id="country-select-demo"
                                          className="mt-3"
                                          options={countries}
                                          classes={{
                                              option: classes.option,
                                          }}
                                          autoHighlight
                                          getOptionLabel={(option) => option.label}
                                          renderOption={(option) => (
                                              <React.Fragment>
                                                  <span>{countryToFlag(option.code)}</span>
                                                  {option.label} ({option.code}) +{option.phone}
                                              </React.Fragment>
                                          )}
                                          renderInput={(params) => (
                                              <TextField
                                                  {...params}
                                                  label="نوع تامین کننده"
                                                  variant="outlined"
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password',
                                                  }}
                                              />
                                          )}
                            />
                            <Autocomplete fullWidth
                                          size="small"
                                          id="country-select-demo"
                                          className="mt-3"
                                          options={countries}
                                          classes={{
                                              option: classes.option,
                                          }}
                                          autoHighlight
                                          getOptionLabel={(option) => option.label}
                                          renderOption={(option) => (
                                              <React.Fragment>
                                                  <span>{countryToFlag(option.code)}</span>
                                                  {option.label} ({option.code}) +{option.phone}
                                              </React.Fragment>
                                          )}
                                          renderInput={(params) => (
                                              <TextField
                                                  {...params}
                                                  label="نوع خرید"
                                                  variant="outlined"
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password',
                                                  }}
                                              />
                                          )}
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                       className="mt-3" id="outlined-textarea"
                                       label="کد حسابداری"
                                       placeholder="کد حسابداری" variant="outlined"/>
                            <Autocomplete fullWidth
                                          size="small"
                                          id="country-select-demo"
                                          className="mt-3"
                                          options={countries}
                                          classes={{
                                              option: classes.option,
                                          }}
                                          autoHighlight
                                          getOptionLabel={(option) => option.label}
                                          renderOption={(option) => (
                                              <React.Fragment>
                                                  <span>{countryToFlag(option.code)}</span>
                                                  {option.label} ({option.code}) +{option.phone}
                                              </React.Fragment>
                                          )}
                                          renderInput={(params) => (
                                              <TextField
                                                  {...params}
                                                  label="ارزش افزوده"
                                                  variant="outlined"
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password',
                                                  }}
                                              />
                                          )}
                            />

                            <Autocomplete fullWidth
                                          size="small"
                                          id="country-select-demo"
                                          className="mt-3"
                                          options={countries}
                                          classes={{
                                              option: classes.option,
                                          }}
                                          autoHighlight
                                          getOptionLabel={(option) => option.label}
                                          renderOption={(option) => (
                                              <React.Fragment>
                                                  <span>{countryToFlag(option.code)}</span>
                                                  {option.label} ({option.code}) +{option.phone}
                                              </React.Fragment>
                                          )}
                                          renderInput={(params) => (
                                              <TextField
                                                  {...params}
                                                  label="نوع فاکتور"
                                                  variant="outlined"
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password',
                                                  }}
                                              />
                                          )}
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <TextField fullWidth InputLabelProps={{shrink: true}} className="mt-3"
                                       id="outlined-multiline-flexible"
                                       label="کد کیان"
                                       size="small" placeholder="کد تامین کننده"
                                       variant="outlined"/>
                            <Autocomplete fullWidth
                                          size="small"
                                          id="country-select-demo"
                                          className="mt-3"
                                          options={countries}
                                          classes={{
                                              option: classes.option,
                                          }}
                                          autoHighlight
                                          getOptionLabel={(option) => option.label}
                                          renderOption={(option) => (
                                              <React.Fragment>
                                                  <span>{countryToFlag(option.code)}</span>
                                                  {option.label} ({option.code}) +{option.phone}
                                              </React.Fragment>
                                          )}
                                          renderInput={(params) => (
                                              <TextField
                                                  {...params}
                                                  label="تقبل مسئولیت خرید"
                                                  variant="outlined"
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password',
                                                  }}
                                              />
                                          )}
                            />

                            <Autocomplete fullWidth
                                          size="small"
                                          id="country-select-demo"
                                          className="mt-3"
                                          options={countries}
                                          classes={{
                                              option: classes.option,
                                          }}
                                          autoHighlight
                                          getOptionLabel={(option) => option.label}
                                          renderOption={(option) => (
                                              <React.Fragment>
                                                  <span>{countryToFlag(option.code)}</span>
                                                  {option.label} ({option.code}) +{option.phone}
                                              </React.Fragment>
                                          )}
                                          renderInput={(params) => (
                                              <TextField
                                                  {...params}
                                                  label="روش پرداخت"
                                                  variant="outlined"
                                                  inputProps={{
                                                      ...params.inputProps,
                                                      autoComplete: 'new-password',
                                                  }}
                                              />
                                          )}
                            />

                        </Grid>

                    </Grid>
                </Card>
            </Grid>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>

    );
}
