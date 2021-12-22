import React from 'react';
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const FilteringComponent = (props) => {
    const titleStyle = { fontSize:"15px", textAlign: "left", marginBottom: "20px", paddingTop: "20px", color: '#000', paddingLeft: "30px"}
    const tagsStyle = { overflowY: "scroll",  whiteSpace: "nowrap", height: "200px", marginTop: "20px" }
    const formControl = { width: "220px", backgroundColor: '#FFF', padding: "20px"}

    const [checked, setChecked] = React.useState(
        false
    );

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <h4 style={titleStyle}>Tags</h4>
            <Box>
                <FormControl component="fieldset" style={formControl}>
                <TextField label="Search Tag"></TextField>
                <FormGroup style={tagsStyle}>
                        {props.tags.map((value) => (
                            <FormControlLabel
                                control={<Checkbox checked={checked} onChange={handleChange} name={value.tags} />}
                                label={value.tags}
                            />
                        ))}
                     </FormGroup>
                </FormControl>
            </Box>
        </div>
    );
}

export default FilteringComponent;