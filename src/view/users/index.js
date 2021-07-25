import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {Grid, Card, TextField, Divider, Button} from '@material-ui/core';
import {FcSearch} from "@react-icons/all-files/fc/FcSearch";
import {FiUserPlus} from "@react-icons/all-files/fi/FiUserPlus";
import {FcClearFilters} from "@react-icons/all-files/fc/FcClearFilters";
import {GrSearch} from "@react-icons/all-files/gr/GrSearch";
import {GrFilter} from "@react-icons/all-files/gr/GrFilter";
import {GrDocumentExcel} from "@react-icons/all-files/gr/GrDocumentExcel";
import {FcExport} from "@react-icons/all-files/fc/FcExport";
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
    },
    option: {
        fontSize: 13,
        '& > span': {
            fontSize: 16,
        },
    },
    input: {
        display: 'none',
    },
}));


function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}


export default function Users() {
    const countries = [
        {code: 'AD', label: 'Andorra', phone: '376'},
        {code: 'AE', label: 'United Arab Emirates', phone: '971'},
        {code: 'AF', label: 'Afghanistan', phone: '93'},
        {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
        {code: 'AI', label: 'Anguilla', phone: '1-264'},
    ];
    const columns = [
        {label: 'نام', id: 'Name'},
        {label: 'کد', id: 'Code'},
        {label: 'کد کیان', id: '2'},
        {label: 'کد حسابداری', id: '3'},
        {label: 'نام شخص', id: '4'},
        {label: 'نوع', id: '5'},
        {label: 'تلفن', id: '6'},
        {label: 'وضعیت', id: '7'},
        {label: 'بررسی', id: '8'},
        {label: 'نحوه تسویه حساب', id: '9'},
        {label: 'درصد تخفیف پیش فرض', id: '10'},
        {label: 'درصد سود', id: '11'},
        {label: 'نوع خرید', id: '12'},
        {label: 'نوع فاکتور', id: '13'},
        {label: 'روش پرداخت', id: '14'},
    ];

    function createData(name, code, population, size) {
        const density = population / size;
        return {name, code, population, size, density};
    }

    const rows = [
        createData('جمشیدی', 'IN', 1324171354, 3287263),
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
            <Grid item xs={12} lg={12}>
                <Card className="pt-1 pb-3 px-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between font-size-lg font-weight-bold">
                            <span>
                            <Link to="/suppliers.create"
                                  className="text-info font-icon-large mx-2"> <FiUserPlus/></Link>
                            <span>تامین کنندگان</span>
                            </span>

                        <ul className="d-flex mb-0 p-0">
                            <li>
                                <IconButton className={classes.button}>
                                    <GrFilter/>
                                </IconButton>
                            </li>

                            <li>
                                <IconButton className={classes.button}>
                                    <GrDocumentExcel/>
                                </IconButton>
                            </li>
                            <li>
                                <IconButton className={classes.button}>
                                    <GrSearch/>
                                </IconButton>
                            </li>

                        </ul>
                    </div>
                    <Divider className="my-1"/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                            <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                       className="mt-3" id="outlined-textarea"
                                       label="نام تامین کننده"
                                       placeholder=" نام تامین کننده" variant="outlined"/>

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
                                                  label="وضعیت تائید"
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
                                       label="کد تامین کننده"
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

                            <TextField fullWidth InputLabelProps={{shrink: true}} className="mt-3"
                                       id="outlined-multiline-flexible"
                                       label="کد حسابداری"
                                       size="small" placeholder="کد حسابداری"
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
                            <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                       className="mt-3" id="outlined-textarea"
                                       label="کد کیان"
                                       placeholder="کد کیان" variant="outlined"/>
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
            <Grid container>
                <Grid item xs={12} lg={12}>
                    <Card className="">
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{minWidth: column.minWidth}}
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
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
