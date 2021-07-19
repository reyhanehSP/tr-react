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


function countryToFlag(isoCode) {
    return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
}


export default function SupplierEdit() {

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
            <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                    <Card className="p-4 mb-4">
                        <div className="font-size-lg font-weight-bold">
                            {/*<Link to="/suppliers.index"> <FcPlus /></Link>*/}
                            افزودن تامین کننده
                        </div>
                        <Divider className="my-3"/>
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={3}>

                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2" id="outlined-textarea"
                                           label="نوع تامین کننده"
                                           placeholder=" نوع تامین کننده" variant="outlined"/>

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
                                                      label="نوع خرید"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: 'new-password',
                                                      }}
                                                  />
                                              )}
                                />

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="کد حسابداری"
                                           size="small" value="" onChange="" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="مدت بین دو سفارش (روز)"
                                           size="small" variant="outlined"/>


                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="درصد تبلیغات"
                                           size="small" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="فاکس"
                                           size="small" variant="outlined"/>


                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="نام"
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
                                                      label="نوع فاکتور"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: 'new-password',
                                                      }}
                                                  />
                                              )}
                                />
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="شماره DNUS"
                                           size="small" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="آدرس"
                                           size="small" variant="outlined"/>
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="درصد سود"
                                           size="small" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="شماره تلفن ۱"
                                           size="small" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} size="small"
                                           className="m-2" id="outlined-textarea"
                                           label="نوع"
                                           placeholder="نوع" variant="outlined"/>
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
                                                      label="روش پرداخت"
                                                      variant="outlined"
                                                      inputProps={{
                                                          ...params.inputProps,
                                                          autoComplete: 'new-password',
                                                      }}
                                                  />
                                              )}
                                />
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="درصد تخفیف پیش فرض"
                                           size="small" variant="outlined"/>
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="نام کاربری وبسایت"
                                           size="small" variant="outlined"/>
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="نام شخص"
                                           size="small" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="شماره تلفن ۲"
                                           size="small" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible"
                                           label="کد تامین کننده"
                                           size="small" placeholder="کد تامین کننده"
                                           variant="outlined"/>
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible"
                                           label="کد کیان"
                                           size="small" placeholder="کد کیان"
                                           variant="outlined"/>
                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="موعد تسویه فاکتور(ماه)"
                                           size="small" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="رمزعبور وبسایت"
                                           size="small" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="کد ملی"
                                           size="small" variant="outlined"/>

                                <TextField fullWidth InputLabelProps={{shrink: true}} className="m-2"
                                           id="outlined-multiline-flexible" label="شماره تلفن ۳"
                                           size="small" variant="outlined"/>

                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <p>سفارشات</p>
                                <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                       onstyle="warning"/>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <p>وضعیت</p>
                                <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                       onstyle="warning"/>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <p>ارزش افزوده</p>
                                <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                       onstyle="warning"/>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <p>تقبل مسئولیت خرید</p>
                                <BootstrapSwitchButton onlabel="دارد" offlabel="ندارد" checked={true}
                                                       onstyle="warning"/>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <p>وضعیت بررسی</p>
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
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
