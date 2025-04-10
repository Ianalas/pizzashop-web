import { Link, useRouteError } from "react-router";

export function Error(){
  const error = useRouteError() as Error;

  return(
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="font-extrabold text-4xl">Oops, algo aconteceu...</h1>
      <p className="text-accent-foreground">Um erro aconteu, abaixo você encontra mais detalhes:</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para o <Link to="/" className="text-sky-500 dark:text-sky-400 font-medium">Dashboard</Link>
      </p>
    </div>
  )
}