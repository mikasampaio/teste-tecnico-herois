import { CardActionArea } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import React from "react"

export default function ContainerCard({ hero, handleSelection }) {
  return (
    <>
      <Card
        onClick={() => {
          handleSelection(hero)
        }}
        sx={{ maxWidth: 230, width: "100%" }}
      >
        <CardActionArea>
          <CardMedia component="img" image={hero.images.sm} alt={hero.name} />
          <CardContent>
            <Typography variant="h6" component="div">
              {hero.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {hero.slug}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
