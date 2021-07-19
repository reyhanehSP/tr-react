import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {FcUpload} from "@react-icons/all-files/fc/FcUpload";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import {
    Grid,
    Card,
    TextField,
    Divider,
    Button
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';

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
export default function Suppliers() {
    const classes = useStyles();
    return (
        <div className="row mx-0 my-4">
            <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">
                            {/*<Link to="/suppliers.index"> <FcPlus /> </Link>*/}
                            تامین کنندگان
                        </div>
                        <Divider className="my-3"/>
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