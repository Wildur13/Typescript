import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchBox() {
  return (
    <div className="search">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { width: '40ch', backgroundColor: 'whitesmoke' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Search a project..." variant="outlined" />
            </Box>
    </div>
  )
}

export default SearchBox