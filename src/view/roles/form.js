import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {
    Grid,
    Card,
    TextField,
    Divider,
    Button
} from '@material-ui/core';

import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import Chip from "@material-ui/core/Chip/Chip";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
    },
    option: {
        fontSize: 13,
        '& > span': {
            fontSize: 16,
        },
    },
    button: {
        float: 'right'
    },
    input: {
        display: 'none',
    },
}));


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
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

export default function RolesEdit() {

    const [chipData, setChipData] = React.useState([]);
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleSelectChange = (event) => {
        setChipData(event.target.value);
    };
    const classes = useStyles();

    return (
        <div className="row mx-0 my-4">
            <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">
                            افزودن نقش
                        </div>
                        <Divider className="my-3"/>
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={3}>

                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2 mb-0" id="outlined-textarea"
                                           label="نام"
                                           placeholder="نام" variant="outlined"/>

                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2 mb-0" id="outlined-textarea"
                                           label="نام فارسی"
                                           placeholder="نام فارسی" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} lg={12}>
                                <FormControl fullWidth className={classes.formControl} variant="outlined">
                                    <InputLabel htmlFor="demo-mutiple-checkbox">نقش ها</InputLabel>
                                    <Select
                                        inputProps={{
                                            name: 'نقش ها',
                                            id: 'demo-mutiple-checkbox',
                                        }}
                                        multiple
                                        label="نقش ها"
                                        value={chipData}
                                        onChange={handleSelectChange}
                                        renderValue={(selected) => selected.map(val => <Chip
                                            className="m-lg-1 ms-xl-1" key={val} onDelete={handleDelete(val)}
                                            label={val}/>)}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox color="primary"
                                                          checked={chipData.indexOf(name) > -1}/>
                                                <ListItemText primary={name}/>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider className="my-4"/>
                        <div className="col-xs-12">
                            <Button variant="contained" color="primary" className={classes.button} startIcon={<FcFile/>}>
                                ذخیره
                            </Button>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}