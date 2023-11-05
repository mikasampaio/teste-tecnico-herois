import React, { createContext, useContext, useState } from "react"

const HeroContext = createContext({})

export const HeroProvider = ({ children }) => {
  const [heroes, setHeroes] = useState()
  const [filtered, setFiltered] = useState("")

  return (
    <HeroContext.Provider value={{ heroes, setHeroes, filtered, setFiltered }}>
      {children}
    </HeroContext.Provider>
  )
}

export const useHero = () => {
  const context = useContext(HeroContext)

  if (!context) {
    throw new Error("useHero must be used with HeroContext")
  }

  return context
}
