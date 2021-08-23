import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Grid, Card, TextField, Divider, Button} from '@material-ui/core';
import {useForm} from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import Paper from "@material-ui/core/Paper/Paper";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import {FcFile} from "@react-icons/all-files/fc/FcFile";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const countries = [
    {id: 1, label: 'نیروی فروشگاه'},
    {id: 2, label: 'خرید-بازار'},
    {id: 3, label: 'تامین کنندگان'},
];
export default function ShopsEdit() {
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

    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        parent_id: '',
        admin_id: '',
        is_active: '',
    });
    const handleChange = (e) => {
        let field = e.target.name;
        let val = e.target.value;
        setValues({...values, [field]: val});
    };
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    return (

        <div className="row mx-0 my-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="pt-3 px-3 pb-3">
                        <div className="font-size-lg font-weight-bold">
                            <LibraryAddTwoToneIcon className="m-lg-1"/>
                            فروشگاه
                        </div>
                        <Divider className="my-3"/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>
                                <Paper variant="outlined">
                                    <Grid container spacing={2} className="px-2">
                                        <Grid item xs={12} lg={6}>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="نام فروشگاه"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="کد انبار فروشگاه"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="عرض"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="تاریخ بسته شدن"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="تسویه"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="اعتبار"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>


                                            <Autocomplete fullWidth
                                                          size="small"
                                                          id="country-select-demo"
                                                          className="m-2"
                                                          name="type"
                                                          options={countries}
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
                                                                  label="دسته بندی "
                                                                  variant="outlined"
                                                                  inputProps={{
                                                                      ...params.inputProps,
                                                                      autoComplete: '',
                                                                  }}
                                                              />
                                                          )}
                                            />

                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="شناسه فروشگاه"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="طول"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="تاریخ افتتاح"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="شماره تلفن"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <TextField fullWidth InputLabelProps={{shrink: true}}
                                                       id="outlined-multiline-flexible" label="حد اعتباری"
                                                       {...register("name", {required: true})}
                                                       name="name"
                                                       value={values.name}
                                                       className={`m-2 ${errors.name ? "errorText" : ''}`}
                                                       onChange={handleChange}
                                                       size="small" variant="outlined"/>
                                            <Autocomplete fullWidth
                                                          size="small"
                                                          id="country-select-demo"
                                                          className="m-2"
                                                          name="type"
                                                          options={countries}
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
                                                                  label="نوع فروشگاه"
                                                                  variant="outlined"
                                                                  inputProps={{
                                                                      ...params.inputProps,
                                                                      autoComplete: '',
                                                                  }}
                                                              />
                                                          )}
                                            />
                                            <div className="m-2">
                                                <BootstrapSwitchButton onlabel="فعال" offlabel="غیر فعال" checked={true}
                                                                       onstyle="warning"/>
                                            </div>


                                        </Grid>
                                        <Divider className="my-3"/>
                                            <Button type="submit" variant="contained" color="primary"
                                                    className={classes.button}
                                                    startIcon={<FcFile/>}>
                                                ذخیره
                                            </Button>
                                    </Grid>

                                </Paper>
                            </Grid>
                            <Grid item spacing={2} lg={6}>
                                <Paper variant="outlined">
                                    <div className="mb-2">
                                        <Map className="map" center={[31.996043, 51.9509980]} zoom={4.9} scrollWheelZoom={false}>
                                            <TileLayer
                                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <Marker position={[31.996043, 51.9509980]}
                                                    icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                                                <Popup>
                                                    A pretty CSS3 popup. <br/> Easily customizable.
                                                </Popup>
                                            </Marker>
                                        </Map>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Card>
            </form>
        </div>
    );
}