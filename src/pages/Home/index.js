import React, { useEffect, useState } from "react"

import ContainerCard from "../../components/Card"
import Header from "../../components/Header"
import Models from "../../components/Modal"
import { useHero } from "../../hooks/HeroContext"
import api from "../../services/api"
import { Container, ContainerItens } from "./styles"

function Home() {
  const { filtered, setFiltered } = useHero()
  const { heroes, setHeroes } = useHero()
  const [open, setOpen] = useState(false)
  const [selectedHero, setSelectedHero] = useState([])

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get("metahumans")

      setHeroes(data)
      setFiltered(data)
    }

    loadData()
  }, [setHeroes, setFiltered])

  const handleSelection = hero => {
    const newSelectedHeroes = [...selectedHero, hero]
    setSelectedHero(newSelectedHeroes)

    if (newSelectedHeroes.length === 2) {
      setOpen(true)
    }
  }

  const handleModal = () => {
    setOpen(!open)
    setSelectedHero([])
  }

  return (
    <Container>
      <Header heroes={heroes} setFiltered={setFiltered} />
      <ContainerItens>
        {filtered &&
          filtered.map(hero => (
            <ContainerCard
              hero={hero}
              key={hero.id}
              handleModal={handleModal}
              handleSelection={handleSelection}
            />
          ))}
      </ContainerItens>
      <Models open={open} handleModal={handleModal} heroes={selectedHero} />
    </Container>
  )
}

export default Home
