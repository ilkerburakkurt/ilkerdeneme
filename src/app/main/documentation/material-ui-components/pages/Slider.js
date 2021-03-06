import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */
const useStyles = makeStyles(theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
}));

function SliderDoc(props)
{
    const classes = useStyles();
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <div className="flex flex-col">
                        <div className="flex items-center mb-16">
                            <Icon className="text-18" color="action">home</Icon>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Documentation</Typography>
                            <Icon className="text-16" color="action">chevron_right</Icon>
                            <Typography color="textSecondary">Material UI Components</Typography>
                        </div>
                        <Typography variant="h6">Slider</Typography>
                    </div>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui.com/components/slider"
                        target="_blank"
                        role="button"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Slider</Typography>
                    <Typography className="description">Sliders allow users to make selections from a range of values.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/sliders.html">Sliders</a> reflect a range of values along a bar,
                        from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.</Typography>
                    <ul>
                        <li>???? <a href="/size-snapshot">22 kB gzipped</a> (but only 8 kB without @material-ui/styles).</li>
                    </ul>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Discrete sliders</Typography>
                    <Typography className="mb-16" component="div">Discrete sliders can be adjusted to a specific value by referencing its value indicator.
                        By order of demos:</Typography>
                    <ol>
                        <li>You can generate a mark for each step with <code>{`marks={true}`}</code>.</li>
                        <li>You can change the default step increment.</li>
                        <li>You can have custom marks by providing a rich array to the <code>{`marks`}</code> prop.</li>
                        <li>You can restrict the selectable values to those provided with the <code>{`marks`}</code> prop with <code>{`step={null}`}</code>.</li>
                        <li>You can force the thumb label to be always visible with <code>{`valueLabelDisplay="on"`}</code>.</li>
                    </ol>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/slider/DiscreteSlider.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/DiscreteSlider.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized sliders</Typography>
                    <Typography className="mb-16" component="div">Here are some examples of customizing the component. You can learn more about this in the <a
                        href="/customization/components/">overrides documentation page</a>.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/slider/CustomizedSlider.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/CustomizedSlider.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Continuous sliders</Typography>
                    <Typography className="mb-16" component="div">Continuous sliders allow users to select a value along a subjective range.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/slider/ContinuousSlider.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/ContinuousSlider.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Range sliders</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/slider/RangeSlider.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/RangeSlider.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">With input field</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/slider/InputSlider.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/InputSlider.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Vertical sliders</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        iframe={false}
                        component={require('app/main/documentation/material-ui-components/components/slider/VerticalSlider.js').default}
                        raw={require('!raw-loader!app/main/documentation/material-ui-components/components/slider/VerticalSlider.js')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Accessibility</Typography>
                    <Typography className="mb-16" component="div">The component handles most of the work necessary to make it accessible.
                        However, you need to make sure that:</Typography>
                    <ul>
                        <li>The slider, as a whole, has a label (<code>{`aria-label`}</code> or <code>{`aria-labelledby`}</code> prop).</li>
                        <li>Each thumb has a user-friendly name for its current value.
                            This is not required if the value matches the semantics of the label.
                            You can change the name with the <code>{`getAriaValueText`}</code> or <code>{`aria-valuetext`}</code> prop.
                        </li>
                    </ul>

                </div>
            }
        />

    );
}

export default SliderDoc;
