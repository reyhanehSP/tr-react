import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {GrUserAdd} from "@react-icons/all-files/gr/GrUserAdd";
import {GrSchedule} from "@react-icons/all-files/gr/GrSchedule";
import {FcUpload} from "@react-icons/all-files/fc/FcUpload";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

import {
    Grid,
    Card,
    TextField,
    Divider,
    Button
} from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    formControl: {
        margin: theme.spacing(1),
    },
    option: {
        fontSize: 13,
        '& > span': {
            fontSize: 1,
        },
    },
    button: {
        float: 'right'
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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function TabPanel(props) {
    const { value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
        </div>
    );
}
TabPanel.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

export default function UsersEdit() {
    const [value, setValue] = React.useState(0);

    const [personName, setPersonName] = React.useState([]);

    const [chipData, setChipData] = React.useState([]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const handleSelectChange = (event) => {
        setChipData(event.target.value);
    };
    const handleChange = (event, newValue) => {
        setPersonName(newValue);
    };
    const handleselectedFile = (prop) => () => {
        setValues({...values, [prop]: fileInput.current.value.split('C:\\fakepath\\')});
    };

    const [values, setValues] = React.useState({
        selectedFile: '',
        // setSelectedFile: '',
    });

    const fileInput = React.useRef(null);

    const classes = useStyles();

    const countries = [
        {code: 'AD', label: 'Andorra', phone: '376'},
        {code: 'AE', label: 'United Arab Emirates', phone: '971'},
        {code: 'AF', label: 'Afghanistan', phone: '93'},
        {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
        {code: 'AI', label: 'Anguilla', phone: '1-264'},
    ];
    return (

        <div className="row mx-0 my-4">
            <Grid spacing={1}>
                <Card className="px-3 pb-3">
            {/*<AppBar position="static" color="default">*/}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="افزودن کاربر" icon={<GrUserAdd />} {...a11yProps(0)} />
                    <Tab label="احکام محاسبات" icon={<GrSchedule />} {...a11yProps(1)} />
                </Tabs>
                    <Divider className="mb-3"/>
            {/*</AppBar>*/}

            <TabPanel value={value} index={0}>
                    <Grid item xs={12} lg={12}>
                            <div className="font-size-lg font-weight-bold">
                                افزودن تامین کننده
                            </div>
                            <Divider className="my-3"/>
                            <Grid container spacing={4}>
                                <Grid item xs={12} lg={3}>
                                    <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                               id="outlined-multiline-flexible" label="نام"
                                               size="small" variant="outlined"/>

                                    <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                               id="outlined-multiline-flexible" label="تلفن"
                                               size="small" variant="outlined"/>
                                    <Autocomplete fullWidth
                                                  size="small"
                                                  id="country-select-demo"
                                                  className="m-2"
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
                                                          label="نوع "
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
                                               className="m-2" id="outlined-textarea"
                                               label="نام خانوادگی"
                                               placeholder="نام خانوادگی" variant="outlined"/>

                                    <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                               id="outlined-multiline-flexible"
                                               label="ایمیل"
                                               placeholder="ایمیل"
                                               size="small" variant="outlined"/>
                                    <Autocomplete fullWidth
                                                  size="small"
                                                  id="country-select-demo"
                                                  className="m-2"
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
                                                          label="گروه "
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
                                    <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                               id="outlined-multiline-flexible"
                                               label="کد پرسنلی"
                                               size="small" placeholder="کد تامین کننده"
                                               variant="outlined"/>
                                    <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                               id="outlined-multiline-flexible"
                                               label="رمز عبور"
                                               size="small" placeholder="رمز عبور"
                                               variant="outlined"/>


                                </Grid>
                                <Grid item xs={12} lg={3}>

                                    <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                               className="m-2" id="outlined-textarea"
                                               label="تاریخ ترک کار"
                                               placeholder="تاریخ ترک کار" variant="outlined"/>


                                    <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                               id="outlined-multiline-flexible" label="تکرار رمز عبور"
                                               placeholder="تکرار رمز عبور" size="small" value="" onChange="" variant="outlined"/>

                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    <FormControl fullWidth className={classes.formControl} variant="outlined">
                                        <InputLabel  htmlFor="demo-mutiple-checkbox">فروشگاه ها</InputLabel>
                                        <Select
                                            inputProps={{
                                                name: 'فروشگاه ها',
                                                id: 'demo-mutiple-checkbox',
                                            }}
                                            multiple
                                            label="فروشگاه ها"
                                            value={chipData}
                                            onChange={handleSelectChange}
                                            renderValue={(selected) => selected.map(val => <Chip  className="m-lg-1 ms-xl-1"  key={val} onDelete={handleDelete(val)} label={val} />)}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox  color="primary" checked={chipData.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} lg={12}>
                                    {/*<FormControl className={classes.formControl}>*/}
                                        {/*<InputLabel fullWidth id="demo-mutiple-checkbox-label">لیست دپارتمان ها</InputLabel>*/}
                                        {/*<Select*/}
                                            {/*fullWidth*/}
                                            {/*labelId="demo-mutiple-checkbox-label"*/}
                                            {/*id="demo-mutiple-checkbox"*/}
                                            {/*multiple*/}
                                            {/*value={personName}*/}
                                            {/*onChange={handleSelectChange}*/}
                                            {/*input={<Input />}*/}
                                            {/*renderValue={(selected) => selected.join(', ')}*/}
                                            {/*MenuProps={MenuProps}*/}
                                        {/*>*/}
                                            {/*{names.map((name) => (*/}
                                                {/*<MenuItem key={name} value={name}>*/}
                                                    {/*<Checkbox checked={personName.indexOf(name) > -1} />*/}
                                                    {/*<ListItemText primary={name} />*/}
                                                {/*</MenuItem>*/}
                                            {/*))}*/}
                                        {/*</Select>*/}
                                    {/*</FormControl>*/}
                                </Grid>
                                <Grid item xs={12} lg={2}>
                                    <p>اجازه استفاده از پنل</p>
                                    <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                           onstyle="warning"/>
                                </Grid>
                                <Grid item xs={12} lg={2}>
                                    <p>اجازه استفاده از اپ</p>
                                    <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                           onstyle="warning"/>
                                </Grid>
                                <Grid item xs={12} lg={2}>
                                    <p>اجازه استفاده از tchat</p>
                                    <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                           onstyle="warning"/>
                                </Grid>
                                <Grid item xs={12} lg={2}>
                                    <p>مشارکت کننده</p>
                                    <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                           onstyle="warning"/>
                                </Grid>

                                <Grid item xs={12} lg={12}>
                                    <input accept="image/*"
                                           className={classes.input}
                                           ref={fileInput}
                                           dataName={values.selectedFile}
                                           onChange={handleselectedFile('selectedFile')}
                                           id="icon-button-file" type="file"/>
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <FcUpload/>
                                        </IconButton>
                                        آپلود تصویر
                                    </label>
                                    <span className="mx-2">{values.selectedFile}</span>
                                </Grid>
                            </Grid>
                            <Divider className="my-4"/>
                            <div className="col-xs-12">
                                <Button variant="contained" color="primary" className={classes.button} startIcon={<FcFile/>}>
                                    ذخیره
                                </Button>
                            </div>
                    </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
                </Card>
            </Grid>
        </div>
    );
}
