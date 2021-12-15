import { AppBar, Autocomplete, Button, Divider, FormGroup, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from "react";
import { Box, typography } from "@mui/system";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import classes from './product.module.css'
import SearchIcon from '@mui/icons-material/Search';

const Filter = ({ data }) => {
    const [activeClick, setActiveClick] = useState(false)
    const handleClick = () => {
        setActiveClick(!activeClick)
    }

    return (
        <>
            <Box sx={{ width: '100%', }}>
                <div className={classes.filterHeader}>
                    <Button id="filterButton" variant="contained" onClick={handleClick} >
                        <FilterListIcon sx={{ color: 'white' }} fontSize="medium" />Filter</Button>

                    {!activeClick &&
                        <TextField variant="outlined"
                            placeholder="Enter Product Name (e.g.Macbook)"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"> <IconButton>
                                    <SearchIcon />
                                </IconButton></InputAdornment>,
                                style: { height: 35 }
                            }}
                            sx={{ width: 400 }}>
                        </TextField>}

                    {activeClick && <Button id="filterButton" variant="contained" onClick={handleClick}>
                        <SettingsApplicationsIcon sx={{ color: 'white' }} fontSize="medium" />Reset</Button>}

                </div>

            </Box>
            {activeClick && <div>
                <Box>
                    <Divider />
                    <FormGroup className={classes.form}>
                        <div>
                            <InputLabel>Categories</InputLabel>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data.map((product) => product.title)}
                                sx={{ width: 250, height: 0 }}
                                // InputProps={{ style: { height: 0 } }}
                                renderInput={(params) => <TextField {...params} label="choose..." />}
                            />
                        </div>
                        <div>
                            <InputLabel>Rating</InputLabel>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={[...new Set(data.flatMap((data) => data.rating))]}
                                sx={{ width: 250 }}
                                renderInput={(params) => <TextField {...params} label="choose..." />}
                            />
                        </div>
                        <div>
                            <InputLabel>Location</InputLabel>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={[...new Set(data.flatMap((data) => data.locations))]}
                                sx={{ width: 250 }}
                                renderInput={(params) => <TextField {...params} label="choose..." />}
                            />
                        </div>
                        <div>
                            <InputLabel>Price</InputLabel>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data.map((product) => product.price)}
                                sx={{ width: 250, height: '50px' }}
                                renderInput={(params) => <TextField {...params} label="choose..." />}
                            />
                        </div>
                    </FormGroup>
                </Box>

            </div>}
        </>
    )
}
export default Filter