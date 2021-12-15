import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Box } from "@mui/system"
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { useState } from "react";
import { useRouter } from "next/router";

const Navigation = () => {
    const [activeClick, setActiveClick] = useState(false)
    const handleClick = () => {
        setActiveClick(!activeClick)

    }
    const router = useRouter()
    return (
        <div>
            <Box sx={{ width: '100%', backgroundColor: '#060b26', height: 80, }}>
                {!activeClick && <IconButton size="small" sx={{ ml: 2, paddingTop: '20px' }} onClick={handleClick} >
                    <DehazeIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>}
                {activeClick && <IconButton size="small" sx={{ ml: 2, paddingTop: '20px' }} onClick={handleClick} >
                    <ClearIcon sx={{ color: 'white' }} fontSize="large" />
                </IconButton>}

                {activeClick && <Box sx={{ width: 200, backgroundColor: '#060b26', height: '100vh' }}>
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingCartSharpIcon sx={{ color: 'white' }} fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText primary="Product" sx={{ color: 'white' }} ></ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={() => {
                            router.push("/trash")
                        }}>
                            < ListItemButton >
                                <ListItemIcon>
                                    <DeleteForeverSharpIcon sx={{ color: 'white' }} fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText primary="Trash" sx={{ color: 'white' }} ></ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>


                </Box>}


            </Box >
        </div >
    )
}
export default Navigation