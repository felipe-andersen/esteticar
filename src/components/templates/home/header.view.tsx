


export const Header = () => {
    return (
        <header className="h-16 w-full bg-red-300 flex  flex items-center px-8 justify-between text-smd  fixed ">
            <h1>STTCR</h1>
            <nav className="flex gap-10 items-center">
                <p>Plataforma</p>
                <p>Soluções</p>
                <p>Explore</p>
                <p>Preços</p>
                <p>Contato</p>
                <p>Entrar</p>
                <button className="h-10 px-4 rounded-full bg-black text-neutral-50 text-base w-min whitespace-nowrap">
                    Teste Grátis
                </button>
            </nav>
        </header>
    )
}