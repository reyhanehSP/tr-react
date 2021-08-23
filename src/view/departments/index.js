import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import {alpha, makeStyles, withStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import {useSpring, animated} from '@react-spring/web';
import {Grid, Card, TextField, Divider, Button} from '@material-ui/core';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import {useForm} from "react-hook-form";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import {Link} from "react-router-dom";
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import LibraryAddTwoToneIcon from '@material-ui/icons/LibraryAddTwoTone';
import {FcFile} from "@react-icons/all-files/fc/FcFile";

function MinusSquare(props) {
    return (
        <SvgIcon fontSize="inherit" style={{width: 14, height: 14}} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path
                d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z"/>
        </SvgIcon>
    );
}

function PlusSquare(props) {
    return (
        <SvgIcon fontSize="inherit" style={{width: 14, height: 14}} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path
                d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z"/>
        </SvgIcon>
    );
}

function CloseSquare(props) {
    return (
        <SvgIcon className="close" fontSize="inherit" style={{width: 14, height: 14}} {...props}>
            {/* tslint:disable-next-line: max-line-length */}
            <path
                d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z"/>
        </SvgIcon>
    );
}

function TransitionComponent(props) {
    const style = useSpring({
        from: {opacity: 0, transform: 'translate3d(20px,0,0)'},
        to: {opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)`},
    });

    return (
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
};

const StyledTreeItem = withStyles((theme) => ({
    iconContainer: {
        '& .close': {
            opacity: 0.3,
        },
    },
    group: {
        marginLeft: 7,
        paddingLeft: 18,
        borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent}/>);

const useStyles = makeStyles({
    root: {
        height: 264,
        flexGrow: 1,
        maxWidth: 400,
    },
});


const countries = [
    {id: 1, label: 'نیروی فروشگاه'},
    {id: 2, label: 'خرید-بازار'},
    {id: 3, label: 'تامین کنندگان'},
];
export default function Departmants() {
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
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
                        <Grid>
                            <Card className="pt-3 px-3 pb-3">
                                <div className="font-size-lg font-weight-bold">
                                     <LibraryAddTwoToneIcon  className="m-lg-1"/>
                                    افزودن دپارتمان
                                </div>
                                <Divider className="my-3"/>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} lg={6}>
                                    <TextField fullWidth InputLabelProps={{shrink: true}}
                                               id="outlined-multiline-flexible" label="نام دپارتمان"
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
                                                          label="ادمین "
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
                                                              label="دسته بندی والد "
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
                                </Grid>
                                <Divider className="my-3"/>
                                <div className="col-xs-12">
                                    <Button type="submit" variant="contained" color="primary" className={classes.button}
                                            startIcon={<FcFile/>}>
                                        ذخیره
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Grid>
                            <Card className="pt-3 px-3 pb-3">
                                <div className="font-size-lg font-weight-bold">
                                     <ListAltTwoToneIcon  className="m-lg-1"/>
                                    دپارتمان
                                </div>
                                <Divider className="my-3"/>
                                <Grid container spacing={4}>
                                    <TreeView
                                        className={classes.root}
                                        defaultExpanded={['1']}
                                        defaultCollapseIcon={<MinusSquare/>}
                                        defaultExpandIcon={<PlusSquare/>}
                                        defaultEndIcon={<CloseSquare/>}
                                    >
                                        <StyledTreeItem nodeId="1" label="Main">
                                            <StyledTreeItem nodeId="2" label="Hello"/>
                                            <StyledTreeItem nodeId="3" label="Subtree with children">
                                                <StyledTreeItem nodeId="6" label="Hello"/>
                                                <StyledTreeItem nodeId="7" label="Sub-subtree with children">
                                                    <StyledTreeItem nodeId="9" label="Child 1"/>
                                                    <StyledTreeItem nodeId="10" label="Child 2"/>
                                                    <StyledTreeItem nodeId="11" label="Child 3"/>
                                                </StyledTreeItem>
                                                <StyledTreeItem nodeId="8" label="Hello"/>
                                            </StyledTreeItem>
                                            <StyledTreeItem nodeId="4" label="World"/>
                                            <StyledTreeItem nodeId="5" label="Something something"/>
                                        </StyledTreeItem>
                                    </TreeView>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
// search bar
// https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeView/TreeViewWithSearchBar/React/Light/