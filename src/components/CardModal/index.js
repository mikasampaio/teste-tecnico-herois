import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import React from "react"

import { Container, ContainerItens } from "./styles"

export default function CardModal({ hero }) {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CardContent sx={{ flex: "0 1 auto" }}>
          <Typography component="div" variant="h7">
            {hero.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {Object.entries(hero.powerstats).map(([stat, value]) => (
              <ContainerItens key={stat}>
                <h5>{stat}:</h5> <p>{value}</p>
              </ContainerItens>
            ))}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={hero.images.sm}
        alt={hero.name}
      />
    </Container>
  )
}
