import React from 'react';
import {Link} from 'react-router-dom';
import {withStyles , makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {GrSearch} from "@react-icons/all-files/gr/GrSearch";
import {GrFilter} from "@react-icons/all-files/gr/GrFilter";
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import {Grid, Card, TextField, Divider, Button} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton/IconButton";



const styles = (theme) => ({
    flexContainer: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    table: {
        // temporary right-to-left patch, waiting for
        // https://github.com/bvaughn/react-virtualized/issues/454
        '& .ReactVirtualized__Table__headerRow': {
            flip: false,
            paddingRight: theme.direction === 'rtl' ? '0 !important' : undefined,
        },
    },
    tableRow: {
        cursor: 'pointer',
    },
    tableRowHover: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    tableCell: {
        flex: 1,
    },
    noClick: {
        cursor: 'initial',
    },
});

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    customTableContainer: {
        overflowX: "initial"
    }
});
const columns = [
    {id: 'name', label: 'نام', minWidth: 170 ,  align: 'center'},
    {id: 'code', label: 'نام فارسی نقش', minWidth: 100 ,  align: 'center'},
    {id: 'population', label: 'جزئیات', minWidth: 170, align: 'center'},
];

function createData(name, code, population, size) {
    const density = population / size;
    return {name, code, population, size, density};
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
    createData('Franfce', 'FR', 67022000, 640679),
    createData('Unitfed Kingdom', 'GB', 67545757, 242495),
    createData('Russfia', 'RU', 146793744, 17098246),
    createData('Nigefdria', 'NG', 200962417, 923768),
    createData('Brvazil', 'BR', 210147125, 8515767),
    createData('Invddia', 'IN', 1324171354, 3287263),
    createData('Chdvsina', 'CN', 1403500365, 9596961),
    createData('Itvdaly', 'IT', 60483973, 301340),
    createData('Undvited States', 'US', 327167434, 9833520),
    createData('Cavsnada', 'CA', 37602103, 9984670),
    createData('Ausvdstralia', 'AU', 25475400, 7692024),
    createData('Gervsdmany', 'DE', 83019200, 357578),
    createData('Irvsdeland', 'IE', 4857000, 70273),
    createData('Mevsdxico', 'MX', 126577691, 1972550),
    createData('Jasdpvsdan', 'JP', 126317000, 377973),
    createData('Fradsvnce', 'FR', 67022000, 640679),
    createData('Unidvsted Kingdom', 'GB', 67545757, 242495),
    createData('Rusvdssia', 'RU', 146793744, 17098246),
    createData('Nigdvseria', 'NG', 200962417, 923768),
    createData('Bradszil', 'BR', 210147125, 8515767),
];


export default function Roles() {
    const classes = useStyles();
    return (
        <div className="row mx-0 my-4">
            <Grid spacing={1}>
                <Card className="px-3 pb-4 pt-3 mb-4">
                    <div className="d-flex align-items-baseline justify-content-between font-size-lg font-weight-bold">
                        <span>
                            <Link to="/roles.create" className="mx-2 font-bold-icon"> <AccountBoxTwoToneIcon/></Link>
                            <span>نقش‌ها</span>

                        </span>

                        <span>
                            <ul className="d-flex align-content-center mb-0 p-0">
                                <li>
                                    <IconButton aria-label="add an alarm"><GrFilter/></IconButton>
                                </li>
                                <li>
                                    <IconButton aria-label="add an alarm"><GrSearch/></IconButton>
                                </li>

                            </ul>
                        </span>
                    </div>
                    <Divider className="my-2"/>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={3}>
                            <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                       className="mt-3" id="outlined-textarea"
                                       label="نام نقش"
                                       placeholder="نام نقش" variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <TextField fullWidth InputLabelProps={{shrink: true}} className="mt-3"
                                       id="outlined-multiline-flexible" label="نام فارسی نقش"
                                       placeholder="نام فارسی نقش"
                                       size="small" variant="outlined"/>

                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} lg={12}>
            <Paper className={classes.root}>
                <TableContainer classes={{ root: classes.customTableContainer }}>
                    <Table stickyHeader>
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
                            {rows.map((historyRow) => (
                                <TableRow key={historyRow.name}>
                                    <TableCell align="right">{historyRow.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/*<TablePagination*/}
                    {/*rowsPerPageOptions={[10, 25, 100]}*/}
                    {/*component="div"*/}
                    {/*count={rows.length}*/}
                    {/*rowsPerPage={rowsPerPage}*/}
                    {/*page={page}*/}
                    {/*onPageChange={handleChangePage}*/}
                    {/*onRowsPerPageChange={handleChangeRowsPerPage}*/}
                {/*/>*/}
            </Paper>
            </Grid>
        </div>
    );
}
