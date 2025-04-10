import { Link } from "react-router";

export function NotFound(){
  return(
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="font-extrabold text-4xl">Página não encontrada!</h1>
      <p className="text-accent-foreground">
        Voltar para o <Link to="/" className="text-sky-500 dark:text-sky-400 font-medium">Dashboard</Link>
      </p>
    </div>
  )
}