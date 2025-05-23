import {Box, Grid, Typography} from "@mui/material"

import miscellaneous from "../data/miscellaneous.json"

import ItemCard from "../components/itemCard";

export default function Misc () {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>

            {miscellaneous.map((category) => (
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <Typography variant="title1" >{category.title}</Typography>
                    <Typography variant="subTitle2" >{category.description}</Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {category.items.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <ItemCard
                                itemName={item.name}
                                itemDur={item.duration}
                                itemLoc={item.location}
                                itemDesc={item.description}
                                itemSkills={item.skills}
                            />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
}