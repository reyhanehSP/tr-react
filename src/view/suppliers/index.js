import React from 'react';
import {makeStyles , withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {FcSearch} from "@react-icons/all-files/fc/FcSearch";
import {FcExport} from "@react-icons/all-files/fc/FcExport";
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
// import { AutoSizer, Column, Table } from 'react-virtualized';

import {
    Grid,
    Card,
    TextField,
    Divider,
    Button
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';
import ExitToApp from "@material-ui/core/SvgIcon/SvgIcon";





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

class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }) => {
        const { classes, onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }) => {
        const { columns, classes, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={(columnIndex != null && columns[columnIndex].numeric) || false ? 'right' : 'left'}
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({ label, columnIndex }) => {
        const { headerHeight, columns, classes } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight}
                        className={classes.table}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataKey: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            numeric: PropTypes.bool,
            width: PropTypes.number.isRequired,
        }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

// ---

const sample = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
    return { id, dessert, calories, fat, carbs, protein };
}

const rows = [];

for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    option: {
        fontSize: 13,
        '& > span': {
            fontSize: 13,
        },
    },
    button: {
        float: 'right',
    },
    input: {
        display: 'none',
    },
}));

const options = ['همه','شده','نشده'];
const confirm = ['فعال','غیر فعال'];
const type_supplier = ['حقیقی','حقوقی'];
const type_buy = ['قطعی','امانی','کمیسیونی'];
const value_added = ['دارد','ندارد'];
const type_factor = ['رسمی اعتباردار','رسمی بدون اعتبار','سایر'];
const buy_support = ['دارد','ندارد'];
const pay_method = ['سیر فروش (فاکتور یکجا)','سیر فروش (فاکتور تدریجی)','چند ماهه'];

export default function Suppliers() {
    const classes = useStyles();
    return (
        <div className="row mx-0 my-4">
            <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="d-flex justify-content-between ">
                            <span className="font-size-lg font-weight-bold">
                            {/*<Link to="/suppliers.index"> <FcPlus /> </Link>*/}
                                تامین کنندگان
                        </span>
                            <div>
                                <IconButton color="secondary" aria-label="add an alarm">
                                    <FcExport />
                                </IconButton>
                                <IconButton color="secondary" aria-label="add an alarm">
                                    <FcSearch />
                                </IconButton>

                            </div>
                        </div>


                        <Divider className="my-3"/>
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2" id="outlined-textarea"
                                           label="نام تامین کننده"
                                           placeholder="نام تامین کننده" variant="outlined"/>
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={options}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(option) => option}
                                              renderOption={(option) => (
                                                  <React.Fragment>
                                                      <span>{option}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="وضعیت بررسی"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={confirm}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(confirm) => confirm}
                                              renderOption={(confirm) => (
                                                  <React.Fragment>
                                                      <span>{confirm}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="وضعیت تائید"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2" id="outlined-textarea"
                                           label="کد تامین کننده"
                                           placeholder="کد تامین کننده" variant="outlined"/>
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={type_supplier}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(type_supplier) => type_supplier}
                                              renderOption={(type_supplier) => (
                                                  <React.Fragment>
                                                      <span>{type_supplier}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="نوع تامین کننده"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={type_buy}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(type_buy) => type_buy}
                                              renderOption={(type_buy) => (
                                                  <React.Fragment>
                                                      <span>{type_buy}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="نوع تامین کننده"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2" id="outlined-textarea"
                                           label="کد حسابداری"
                                           placeholder="کد حسابداری" variant="outlined"/>
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={value_added}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(value_added) => value_added}
                                              renderOption={(value_added) => (
                                                  <React.Fragment>
                                                      <span>{value_added}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="ارزش افزوده"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={value_added}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(type_factor) => type_factor}
                                              renderOption={(type_factor) => (
                                                  <React.Fragment>
                                                      <span>{type_factor}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="نوع فاکتور"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2" id="outlined-textarea"
                                           label="کد کیان"
                                           placeholder="کد کیان" variant="outlined"/>
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={value_added}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(buy_support) => buy_support}
                                              renderOption={(buy_support) => (
                                                  <React.Fragment>
                                                      <span>{buy_support}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="تقبل مسئولیت خرید"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                                <Autocomplete fullWidth
                                              size="small"
                                              id="country-select-demo"
                                              className="m-2"
                                              options={value_added}
                                              classes={{
                                                  option: classes.option,
                                              }}
                                              autoHighlight
                                              getOptionLabel={(pay_method) => pay_method}
                                              renderOption={(pay_method) => (
                                                  <React.Fragment>
                                                      <span>{pay_method}</span>
                                                  </React.Fragment>
                                              )}
                                              renderInput={(params) => (
                                                  <TextField
                                                      {...params}
                                                      label="روش پرداخت"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: '',
                                                      }}
                                                  />
                                              )}
                                />
                            </Grid>
                        </Grid>
                        <Divider className="my-4"/>


                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}