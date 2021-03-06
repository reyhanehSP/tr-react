import React, { Component } from "react";
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {useForm} from "react-hook-form";
import IconButton from '@material-ui/core/IconButton';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {FcUpload} from "@react-icons/all-files/fc/FcUpload";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Tab from '@material-ui/core/Tab';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Grid, Card, TextField, Divider, Button} from '@material-ui/core';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import AddPhotoAlternateTwoToneIcon from '@material-ui/icons/AddPhotoAlternateTwoTone';
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import LibraryAddCheckTwoToneIcon from '@material-ui/icons/LibraryAddCheckTwoTone';
import PersonPinTwoToneIcon from '@material-ui/icons/PersonPinTwoTone';
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { CKEditor } from 'ckeditor4-react';


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

export default function ProductsEdit() {
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
        if (value === '?????????? ??????????????') {
            setActiveList('?????????? ??????????????');
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
        {id: 1, label: '?????????? ??????????????'},
        {id: 2, label: '????????-??????????'},
        {id: 3, label: '?????????? ??????????????'},
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
                            aria-label="scrollable force tabs example">
                            <LinkTab label="???????????? ????????" icon={<AddBoxTwoToneIcon/>} {...a11yProps(0)} />
                            <LinkTab label="????????????" icon={<AddPhotoAlternateTwoToneIcon/>}{...a11yProps(1)} />
                            <LinkTab label="?????????????? ??????????" icon={<LibraryBooksTwoToneIcon/>}{...a11yProps(2)} />
                            <LinkTab label="?????????????? ??????????" icon={<LibraryAddCheckTwoToneIcon/>}{...a11yProps(3)} />
                            <LinkTab label="?????????????? ?????????? ?????????? ??????????" icon={<PersonPinTwoToneIcon/>}{...a11yProps(4)} />
                            <LinkTab label="???????? ????" icon={<LinkTwoToneIcon/>}{...a11yProps(5)} />
                            <LinkTab label="?????????? ????" icon={<DescriptionTwoToneIcon/>}{...a11yProps(6)} />
                        </Tabs>
                        <Divider className="mb-3"/>
                        <TabPanel value={value} index={0}>
                            <Grid item xs={12} lg={12}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12} lg={3}>
                                        <TextField fullWidth InputLabelProps={{shrink: true}}
                                                   id="outlined-multiline-flexible" label="??????"
                                                   {...register("name", {required: true})}
                                                   name="name"
                                                   value={values.name}
                                                   className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                   onChange={handleChange}
                                                   size="small" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible" label="???????? ????????????"
                                                   onChange={handleChange}
                                                   name="phone"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible" label="???????? ???????? (????????)"
                                                   onChange={handleChange}
                                                   name="phone"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible" label="?????????? ???????? ????????"
                                                   onChange={handleChange}
                                                   name="phone"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible" label="?????????? ???? ????????"
                                                   onChange={handleChange}
                                                   name="phone"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible" label="???????????? ?????????? (?????????? ??????)"
                                                   onChange={handleChange}
                                                   name="phone"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible" label="??????????"
                                                   onChange={handleChange}
                                                   name="phone"
                                                   size="small" variant="outlined"/>

                                    </Grid>
                                    <Grid item xs={12} lg={3}>
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
                                                              label="?????????? ?????????? ???? "
                                                              variant="outlined"
                                                              inputProps={{
                                                                  ...params.inputProps,
                                                                  autoComplete: 'new-password',
                                                              }}
                                                          />
                                                      )}
                                        />

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   id="outlined-textarea"
                                                   label="???????? ?????????? ??????????"
                                                   className={`m-2 ${errors.familyName ? "errorText" : ''}`}
                                                   {...register("familyName", {required: true})}
                                                   name="familyName"
                                                   onChange={handleChange}
                                                   placeholder="???????? ?????????? ??????????" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????????????? ????????"
                                                   placeholder="?????????????? ????????"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="???????????? ???????? ??????"
                                                   placeholder="???????????? ???????? ??????"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????? ???????? (??????)"
                                                   placeholder="?????? ???????? (??????)"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????????? ?????? ????????"
                                                   placeholder="?????????? ?????? ????????"
                                                   size="small" variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????????? 2"
                                                   placeholder="?????????? 2"
                                                   size="small" variant="outlined"/>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
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
                                                              label="???????? ???????? "
                                                              variant="outlined"
                                                              inputProps={{
                                                                  ...params.inputProps,
                                                                  autoComplete: 'new-password',
                                                              }}
                                                          />
                                                      )}
                                        />

                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="???????? ????????(????????)"
                                                   size="small" placeholder="???????? ????????(????????)"
                                                   variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????????????? ???????? (????????)"
                                                   size="small" placeholder="?????????????? ???????? (????????)"
                                                   variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????????? ???? ???????? ????????"
                                                   size="small" placeholder="?????????? ???? ???????? ????????"
                                                   variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????? ?????????? (?????????? ??????)"
                                                   size="small" placeholder="?????????? ???? ???????? ????????"
                                                   variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????????? ??????????"
                                                   size="small" placeholder="?????????? ??????????"
                                                   variant="outlined"/>
                                        <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                                   id="outlined-multiline-flexible"
                                                   label="?????????? ?????? ??????"
                                                   size="small" placeholder="?????????? ??????????"
                                                   variant="outlined"/>

                                    </Grid>
                                    <Grid item xs={12} lg={3}>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   className="m-2" id="outlined-textarea"
                                                   label="?????????? ?????????? ??????????"
                                                   placeholder="?????????? ?????????? ??????????" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   className="m-2" id="outlined-textarea"
                                                   label="???????? ???????? ???????? (????????)"
                                                   placeholder="???????? ???????? ???????? (????????)" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   className="m-2" id="outlined-textarea"
                                                   label="?????????? ?????????? ????????"
                                                   placeholder="?????????? ?????????? ????????" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   className="m-2" id="outlined-textarea"
                                                   label="?????????? ???????? ?????? ??????"
                                                   placeholder="?????????? ???????? ?????? ??????" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   className="m-2" id="outlined-textarea"
                                                   label="?????? ?????????? (?????????? ??????)"
                                                   placeholder="?????? ?????????? (?????????? ??????)" variant="outlined"/>

                                        <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                                   className="m-2" id="outlined-textarea"
                                                   label="?????????? ????????"
                                                   placeholder="?????????? ????????" variant="outlined"/>

                                    </Grid>
                                    <Grid className="py-0" item xs={12} lg={12}>
                                        <FormControl fullWidth className={classes.formControl} variant="outlined">
                                            <InputLabel htmlFor="demo-mutiple-checkbox">?????????????? ????</InputLabel>
                                            <Select
                                                inputProps={{
                                                    name: '?????????????? ????',
                                                    id: 'demo-mutiple-checkbox',
                                                }}
                                                multiple
                                                label="??????????????"
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
                                        <FormControl fullWidth className={classes.formControl} variant="outlined">
                                            <InputLabel htmlFor="demo-mutiple-checkbox">???????? ???????????????????????</InputLabel>
                                            <Select

                                                ref={departList}
                                                active={activeList}
                                                inputProps={{
                                                    name: '???? ????',
                                                    id: 'demo-mutiple-checkbox',
                                                }}
                                                multiple
                                                label="???? ????"
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
                                        <CKEditor data="<p>Hello from CKEditor 4!</p>" />

                                    </Grid>
                                    <Grid item xs={12} lg={12} container spacing={1}>
                                        <Grid item xs={12} lg={2}>
                                            <p>??????????</p>
                                            <BootstrapSwitchButton width={90} onlabel="????????" offlabel="?????? ????????"
                                                                   checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                        <Grid item xs={12} lg={2}>
                                            <p>???????? ??????</p>
                                            <BootstrapSwitchButton width={90} onlabel="????????" offlabel="??????????"
                                                                   checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                        <Grid item xs={12} lg={2}>
                                            <p>???????? ???????????? ????????</p>
                                            <BootstrapSwitchButton width={90} onlabel="??????????" offlabel="????????"
                                                                   checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                        <Grid item xs={12} lg={2}>
                                            <p>?????????? ??????????</p>
                                            <BootstrapSwitchButton width={90} onlabel="????????" offlabel="??????????"
                                                                   checked={true}
                                                                   onstyle="warning"/>
                                        </Grid>
                                        <Grid item xs={12} lg={2}>
                                            <p>???????? ???????? ??????????</p>
                                            <BootstrapSwitchButton width={90} onlabel="????????" offlabel="??????????"
                                                                   checked={true}
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
                                            ?????????? ??????????
                                        </label>
                                        <span className="mx-2">{values.selectedFile}</span>
                                    </Grid>
                                </Grid>
                                <Divider className="my-4"/>
                                <div className="col-xs-12">
                                    <Button type="submit" variant="contained" color="primary" className={classes.button}
                                            startIcon={<FcFile/>}>
                                        ??????????
                                    </Button>
                                </div>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>

                        </TabPanel>
                    </Card>
                </Grid>
            </form>
        </div>
    )
}
