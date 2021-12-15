import { InputLabel, TextField, TextareaAutosize, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Autocomplete, FormGroup, Checkbox, Button } from "@mui/material"
import { Box, margin } from "@mui/system"
import classes from '../components/product.module.css'
import UseInput from '../components/hooks/use-input'
const EditForm = ({ value, isValid, hasError, valueChangeHandler, inputBlurHandler, reset }) => {
    const {
        value: enteredTitle,
        isValid: titleIsValid,
        hasError: titleHasError,
        valueChangeHandler: titleChangeHandler,
        inputBlurHandler: titleBlurHandler,
        reset: resetTitle
    } = UseInput(value => value.trim() !== '');

    const {
        value: enteredUrl,
        isValid: urlIsValid,
        hasError: urlHasError,
        valueChangeHandler: urlChangeHandler,
        inputBlurHandler: urlBlurHandler,
        reset: resetUrl
    } = UseInput(value => value.trim() !== '');

    const onSubmitHandler = () => {
        console.log(enteredTitle, enteredUrl);

        resetTitle('');
        resetUrl('');
    }

    return (
        <Box
            sx={{
                width: '60%',
                margin: "50px auto",
                padding: '50px 20px 20px 20px',
                boxShadow: '0px 10px 5px rgba(147,147,147, 0.23)',
                border: '1px solid rgba(147,147,147, 0.13)',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }} >
            <div className={classes.flexField}>
                <div>
                    <InputLabel>Title:</InputLabel>
                    <TextField
                        type="text"
                        variant="outlined"
                        inputProps={{
                            style: {
                                padding: 2,
                                width: 480,
                            }
                        }}
                        name="title"
                        onChange={titleChangeHandler}
                        onBlur={titleBlurHandler}
                        value={enteredTitle}
                        placeholder="Enter Title" />
                    {titleHasError && <p>Enter Title</p>}
                </div>
                <div>
                    <InputLabel>Image URL:</InputLabel>
                    <TextField
                        type="text"
                        name="url"
                        variant="outlined"
                        inputProps={{
                            style: {
                                padding: 2,
                                width: 480,
                            }
                        }}
                        onChange={urlChangeHandler}
                        onBlur={urlBlurHandler}
                        value={enteredUrl}
                        placeholder="Enter Image URL" />
                </div>
            </div>
            <div>
                <TextareaAutosize
                    name="description"
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Enter Description"
                    style={{
                        width: "100%",
                        borderRadius: 3,
                        border: '1px solid rgba(147,147,147,0.5)'
                    }}
                />
            </div>
            <div className={classes.flexField}>
                <div>
                    <InputLabel>Price:</InputLabel>
                    <TextField
                        name="price"
                        type="Number"
                        variant="outlined"
                        inputProps={{
                            style: {
                                padding: 8,

                            }
                        }}
                        placeholder="2500" />
                </div>
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Rating:</FormLabel>
                        <RadioGroup row aria-label="Rating" name="Rating">
                            <FormControlLabel value="1" control={<Radio size="small" />} label="1" />
                            <FormControlLabel value="2" control={<Radio size="small" />} label="2" />
                            <FormControlLabel value="3" control={<Radio size="small" />} label="3" />
                            <FormControlLabel value="4" control={<Radio size="small" />} label="4" />
                            <FormControlLabel value="5" control={<Radio size="small" />} label="5" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <InputLabel>Categories</InputLabel>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={[]}
                        sx={{ width: 250, }}
                        size="small"
                        renderInput={(params) => <TextField {...params} label="choose..." />}
                    />
                </div>
            </div>
            <div className={classes.flexField}>
                <FormControl component="fieldset">
                    <FormLabel component="legend"> Available In:
                        <FormControlLabel control={<Checkbox />} label=" Bangalore" />
                        <FormControlLabel control={<Checkbox />} label="Delhi" />
                        <FormControlLabel control={<Checkbox />} label="Mumbai" />
                        <FormControlLabel control={<Checkbox />} label="Pune" />
                    </FormLabel>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">In Stock:</FormLabel>
                    <RadioGroup row aria-label="Rating" name="Rating">
                        <FormControlLabel value="1" control={<Radio size="small" />} label="Yes" />
                        <FormControlLabel value="2" control={<Radio size="small" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={onSubmitHandler}>
                    Submit
                </Button>
            </div>
        </Box>
    )
}
export default EditForm