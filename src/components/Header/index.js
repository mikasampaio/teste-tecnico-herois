import React, { useRef } from "react"
import { FaCircleUser } from "react-icons/fa6"

import { Nav, H1, Input, TopHeader } from "./styles"

function Header({ heroes, setFiltered }) {
  const input = useRef()

  const filterChange = () => {
    const newHeroes = heroes.filter(hero =>
      hero.name.toLowerCase().includes(input.current.value.toLowerCase())
    )

    setFiltered(newHeroes)
  }

  return (
    <>
      <Nav>
        <FaCircleUser />
        <p>Teste Front-end</p>
      </Nav>
      <TopHeader>
        <div>
          <H1>Jornada dos Heróis</H1>
          <p>
            Prontos para a batalha? Escolha dois heróis e veja quem sairá
            vencedor neste duelo épico.
          </p>
        </div>
        <Input
          ref={input}
          onChange={filterChange}
          placeholder="Filter by name"
        />
      </TopHeader>
    </>
  )
}

export default Header
