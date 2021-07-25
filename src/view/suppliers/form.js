import React from 'react';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import {FcPlus} from "@react-icons/all-files/fc/FcPlus";
import {Grid, FormControlLabel, Checkbox, Card, TextField, FormControl, FormHelperText, Divider} from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    }
}));
const names = [
    'قطعی',
    'امانی',
    'کمیسیونی',
];
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SupplierEdit() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };
    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    return (

        <div className="row mx-0 my-4">
            <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">
                            {/*<Link to="/suppliers.index"> <FcPlus /></Link>*/}
                            افزودن تامین کننده
                        </div>
                        <Divider className="my-4"/>
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={3}>
                                <div>
                                    <TextField fullWidth InputLabelProps={{shrink: true}} size="small" value="" className="m-2" id="outlined-textarea"
                                               label="نوع تامین کننده"
                                               placeholder=" نوع تامین کننده" variant="outlined"/>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            variant="outlined"
                                            fullWidth
                                            labelId="نوع خرید"
                                            id="demo-multiple-name"
                                            value={personName}
                                            onChange={handleChange}
                                            input={<Input />}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2" id="outlined-multiline-flexible" label="نام"
                                           size="small" value="" onChange="" variant="outlined"/>

                                    <TextField fullWidth InputLabelProps={{shrink: true}} size="small" className="m-2" id="outlined-textarea" label="نوع"
                                               placeholder="نوع" value="" variant="outlined"/>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small" value="" className="m-2" id="outlined-textarea"
                                           label="نوع"
                                           placeholder="نوع" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div>
                                    <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2" id="outlined-multiline-flexible"
                                               label="کد تامین کننده"
                                               size="small" placeholder="کد تامین کننده" value=""
                                               onChange="" variant="outlined"/>
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
