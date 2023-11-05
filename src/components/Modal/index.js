import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import React, { useEffect, useState } from "react"

import CardModal from "../CardModal"
import { H1, ContainerItens, ContainerButton, Button, style } from "./styles"

export default function Models({ open, handleModal, heroes }) {
  const [winner, setWinner] = useState()

  useEffect(() => {
    if (heroes.length === 2) {
      const [heroPrimary, heroSecondary] = heroes

      const sumHeroOne = Object.values(heroPrimary.powerstats).reduce(
        (acc, cur) => acc + cur,
        0
      )

      const sumHeroTwo = Object.values(heroSecondary.powerstats).reduce(
        (cur, acc) => acc + cur,
        0
      )

      if (sumHeroOne > sumHeroTwo) {
        setWinner(heroPrimary)
      } else if (sumHeroTwo > sumHeroOne) {
        setWinner(heroSecondary)
      } else {
        setWinner(null)
      }
    }
  }, [heroes])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <H1>{winner ? `O vencedor do jogo é: ${winner.name}` : "Empate"}</H1>
          <ContainerItens>
            {heroes.map(hero => (
              <CardModal key={hero.id} hero={hero} />
            ))}
          </ContainerItens>
          <ContainerButton>
            <Button onClick={handleModal}>Fechar</Button>
          </ContainerButton>
        </Box>
      </Modal>
    </div>
  )
}
