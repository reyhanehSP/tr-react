import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {useForm} from "react-hook-form";
import IconButton from '@material-ui/core/IconButton';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
import {FcUpload} from "@react-icons/all-files/fc/FcUpload";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Tab from '@material-ui/core/Tab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid, Card, TextField, Divider, Button} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {KeyboardTimePicker} from '@material-ui/pickers';

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
    textField: {
        width: '25ch',
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

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-prevent-tab-${index}`,
        'aria-controls': `scrollable-prevent-tabpanel-${index}`,
    };
}

export default function UsersEdit() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });


    const [chipData, setChipData] = React.useState([]);
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const [activeList, setActiveList] = React.useState(0);

    function changeType(event, value) {
        console.log(value);
        if (value === 'تامین کنندگان') {
            setActiveList('تامین کنندگان');
        }
        else {
            setActiveList('');
        }

    }

    const handleSelectChange = (event) => {
        setChipData(event.target.value);
    };
    const handleselectedFile = (prop) => () => {
        setValues({...values, [prop]: fileInput.current.value.split('C:\\fakepath\\')});
    };
    const [values, setValues] = React.useState({
        text: '',
        name: '',
        familyName: '',
        phone: '',
        showPassword: '',
        selectedFile: '',
        errorText: '',
        start_shift_overwork: '',
        start_shift: '',
        end_shift: '',
        currentPassword: {show: false, password: ''},
        confirmPassword: {show: false, password: ''}
    });
    const handleChange = (e) => {
        let field = e.target.name;
        let val = e.target.value;
        setValues({...values, [field]: val});
    };
    const handleClickShowPassword = (fieldName) => () => {
        setValues({...values, showPassword: fieldName === values.showPassword ? "" : fieldName});
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const fileInput = React.useRef(null);
    const departList = React.useRef(null);
    const countries = [
        {id: 1, label: 'نیروی فروشگاه'},
        {id: 2, label: 'خرید-بازار'},
        {id: 3, label: 'تامین کنندگان'},
    ];
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    // console.log(watch("example")); // watch input value by passing the name of it
    return (

        <div className="row mx-0 my-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid spacing={1}>
                    <Card className="px-3 pb-3">
                        <Tabs
                            value={value}
                            onChange={(event, newValue) => setValue(newValue)}
                            variant="fullWidth"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="scrollable force tabs example"
                        >
                            <LinkTab label="افزودن کاربر" icon={<PersonAddTwoToneIcon/>} {...a11yProps(0)} />
                            <LinkTab label="احکام محاسبات" icon={<CalendarTodayTwoToneIcon/>}{...a11yProps(1)} />
                        </Tabs>
                        <Divider className="mb-3"/>
                        <TabPanel value={value} index={0}>
                            <Grid item xs={12} lg={12}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} lg={3}>
                                        <TextField fullWidth InputLabelProps={{shrink: true}}
                                                   id="outlined-multiline-flexible" label="نام"
                                                   {...register("name", {required: true})}
                                                   name="name"
                                                   value={values.name}
                                                   className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                   onChange={handleChange}
                                                   size="small" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible" label="تلفن"
                                                   onChange={handleChange}
                                                   name="phone"
                                                   size="small" variant="outlined"/>
                                        <Autocomplete fullWidth
                                                      size="small"
                                                      id="country-select-demo"
                                                      className="m-2"
                                                      name="type"
                                                      options={countries}
                                                      onInputChange={changeType}
                                                      classes={{
                                                          option: classes.option,
                                                      }}
                                                      autoHighlight
                                                      getOptionLabel={(option) => option.label}
                                                      renderOption={(option) => (
                                                          <React.Fragment>
                                                              <span>{(option.label)}</span>
                                                              {option.label}
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
                                                   id="outlined-textarea"
                                                   label="نام خانوادگی"
                                                   className={`m-2 ${errors.familyName ? "errorText" : ''}`}
                                                   {...register("familyName", {required: true})}
                                                   name="familyName"
                                                   onChange={handleChange}
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
                                                              <span>{(option.label)}</span>
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
                                                   size="small" placeholder="کد پرسنلی"
                                                   variant="outlined"/>

                                        <FormControl fullWidth size="small" className="m-2" variant="outlined">
                                            <InputLabel htmlFor="password">رمز عبور</InputLabel>
                                            <OutlinedInput
                                                id="password"
                                                type={values.showPassword === 'currentPassword' ? 'text' : 'password'}
                                                value={values.currentPassword.password}
                                                name="currentPassword"
                                                onChange={handleChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword('currentPassword')}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword === 'currentPassword' ? <Visibility/> :
                                                                <VisibilityOff/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                        </FormControl>


                                    </Grid>
                                    <Grid item xs={12} lg={3}>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   className="m-2" id="outlined-textarea"
                                                   label="تاریخ ترک کار"
                                                   placeholder="تاریخ ترک کار" variant="outlined"/>


                                        <FormControl fullWidth size="small" className="m-2" variant="outlined">
                                            <InputLabel htmlFor="c-password">تکرار رمز عبور</InputLabel>
                                            <OutlinedInput
                                                id="c-password"
                                                type={values.showPassword === 'confirmPassword' ? 'text' : 'password'}
                                                value={values.confirmPassword.password}
                                                name="confirmPassword"
                                                onChange={handleChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword('confirmPassword')}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword === 'confirmPassword' ? <Visibility/> :
                                                                <VisibilityOff/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                labelWidth={70}
                                            />
                                        </FormControl>


                                    </Grid>
                                    <Grid className="py-0" item xs={12} lg={12}>
                                        <FormControl fullWidth className={classes.formControl} variant="outlined">
                                            <InputLabel htmlFor="demo-mutiple-checkbox">فروشگاه ها</InputLabel>
                                            <Select
                                                inputProps={{
                                                    name: 'فروشگاه ها',
                                                    id: 'demo-mutiple-checkbox',
                                                }}
                                                multiple
                                                label="فروشگاه ها"
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
                                        {activeList === 'تامین کنندگان' &&
                                        <FormControl fullWidth className={classes.formControl} variant="outlined">
                                            <InputLabel htmlFor="demo-mutiple-checkbox">لیست دپارتمان‌ها</InputLabel>
                                            <Select

                                                ref={departList}
                                                active={activeList}
                                                inputProps={{
                                                    name: 'لیست دپارتمان‌ها',
                                                    id: 'demo-mutiple-checkbox',
                                                }}
                                                multiple
                                                label="لیست دپارتمان‌ها"
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
                                            </Select
                                            >
                                        </FormControl>}

                                    </Grid>
                                    <Grid item xs={12} lg={12} container spacing={1}>
                                        <Grid item xs={12} lg={3}>
                                            <p>اجازه استفاده از پنل</p>
                                            <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                        <Grid item xs={12} lg={3}>
                                            <p>اجازه استفاده از اپ</p>
                                            <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                        <Grid item xs={12} lg={3}>
                                            <p>اجازه استفاده از tchat</p>
                                            <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                        <Grid item xs={12} lg={3}>
                                            <p>مشارکت کننده</p>
                                            <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                    </Grid>
                                    <Grid className="py-0" item xs={12} lg={12}>
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
                                    <Button type="submit" variant="contained" color="primary" className={classes.button}
                                            startIcon={<FcFile/>}>
                                        ذخیره
                                    </Button>
                                </div>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} lg={4} spacing={2}>
                                    <Paper variant="outlined">
                                        <Typography variant="subtitle1" className="p-2 mb-0">
                                            روش محاسبه اضافه کاری
                                        </Typography>
                                        <Divider className="mt-0 mb-2 mx-2"/>
                                        <Grid container spacing={2} className="px-2">
                                            <Grid item xs={12} lg={6} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="اول شیفت"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="آخر شیفت"
                                                />
                                                <FormControlLabel
                                                    disabled
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="out_shift" color="primary"/>}
                                                    label="خارج شیفت"
                                                />
                                                <FormControlLabel
                                                    disabled
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="between_shift" color="primary"/>}
                                                    label="بین دو شیفت"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="holy_day_overwork" color="primary"/>}
                                                    label="تعطیلی"
                                                />
                                                <FormControlLabel
                                                    disabled
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="day_overwork" color="primary"/>}
                                                    label="ماموریت روزانه"
                                                />
                                                <FormControlLabel
                                                    disabled
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="day_off" color="primary"/>}
                                                    label="مرخصی روزانه"
                                                />
                                                <FormControlLabel
                                                    disabled
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="day_off" color="primary"/>}
                                                    label="ماموریت ساعتی"
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={6} spacing={2}>
                                                <KeyboardTimePicker
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="سقف اضافه کار اول"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                                <KeyboardTimePicker
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="سقف اضافه کار آخر"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                                <KeyboardTimePicker
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="سقف اضافه کار تعطیل"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                                <KeyboardTimePicker
                                                    disable
                                                    margin="normal"
                                                    id="time-picker"
                                                    label=" اضافه کار تعطیل "
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} lg={8}>
                                    <Paper variant="outlined">
                                        <Typography variant="subtitle1" className="p-2 mb-0">
                                            روش محاسبه کارکرد
                                        </Typography>
                                        <Divider className="mt-0 mb-2 mx-2"/>
                                        <Grid container spacing={2} className="px-2">
                                            <Grid item xs={12} lg={3} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="اضافه کار"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="مرخصی روزانه"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="پرسنل روزکار"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="محاسبه غیبت به صورت روزانه"
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={3} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="اضافه کار تعطیل"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="ماموریت ساعتی"
                                                />
                                                <KeyboardTimePicker
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="سقف اضافه کار در روز"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="مجموع اضافه کاری روند شود"
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={3} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="اضافه کار تعطیل 2"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="خارج از شیفت"
                                                />
                                                <KeyboardTimePicker
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="سقف فرجه ورود در ماه"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={3} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="مرخصی ساعتی"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="ماموریت روزانه"
                                                />
                                                <KeyboardTimePicker
                                                    margin="normal"
                                                    id="time-picker"
                                                    label="سقف اضافه کار در ماه"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper variant="outlined" className="mt-2">
                                        <Typography variant="subtitle1" className="p-2 mb-0">
                                            شناوری
                                        </Typography>
                                        <Divider className="mt-0 mb-2 mx-2"/>
                                        <Grid container spacing={2} className="px-2">
                                            <Grid item xs={12} lg={7} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="تاخیر کمتر از "
                                                />
                                                <KeyboardTimePicker
                                                    className="my-0"
                                                    margin="normal"
                                                    id="time-picker"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />

                                                از اضافه کار کم شود
                                            </Grid>

                                            <Grid item xs={12} lg={2} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="تعجیل در خروج"
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={3} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        checked={state.checkedB}
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="در هر صورت کسر شود"
                                                />
                                            </Grid>
                                            <Grid item xs={12} lg={7} spacing={2}>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        onChange={handleChange}
                                                        name="start_shift" color="primary"/>}
                                                    label="محاسبه شب کاری از ساعت"
                                                />
                                                <KeyboardTimePicker
                                                    className="my-0"
                                                    margin="normal"
                                                    id="time-picker"
                                                    value={selectedDate}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change time',
                                                    }}
                                                />
                                                فردا
                                            </Grid>
                                            <Grid item xs={12} lg={5} spacing={2}>
                                                اگر شخصی خروج نداشت
                                                <Autocomplete
                                                    disabled
                                                              size="small"
                                                              id="country-select-demo"
                                                              className="m-2"
                                                              options={countries}
                                                              autoHighlight
                                                              getOptionLabel={(option) => option.label}
                                                              renderOption={(option) => (
                                                                  <React.Fragment>
                                                                      <span>{(option.code)}</span>
                                                                      {option.label} ({option.code}) +{option.phone}
                                                                  </React.Fragment>
                                                              )}
                                                              renderInput={(params) => (
                                                                  <TextField
                                                                      {...params}
                                                                      label="خروج هم زمان با ورود"
                                                                      variant="outlined"
                                                                      inputProps={{
                                                                          ...params.inputProps,
                                                                          autoComplete: 'new-password',
                                                                      }}
                                                                  />
                                                              )}
                                                />
                                                ثبت شود.

                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </Card>
                </Grid>
            </form>
        </div>
    );
}

