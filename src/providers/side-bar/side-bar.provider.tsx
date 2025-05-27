'use client'


type IMyContext = {
    name: string
}

const Context = React.createContext<IMyContext>({name: ""})

type TProvider = {
    children: React.ReactNode
}

const Provider = ({children} : TProvider) => {
    return (
        <Context.Provider value={{name: "Kaede Sakuma"}}>
            {children}
        </Context.Provider>
    )
}