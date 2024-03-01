import React from "react";
import Cabecalho from '../components/Cabecalho/Cabecalho'
import './page.scss'
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Cabecalho/>
      <section className="conteudo">
        <div className="elemento">
          <div className="icone"></div>
        </div>
        <div className="titulo">
          <h1>Redefinir Senha</h1>
          <p>Digite seu email para receber o código de recuperação</p>
        </div>
        <div className="linha"></div>
        <div className="emailform">
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="exemple@email.com" />
          </form>
          <button className="buttonForm"></button>
          </div>
      </section>
      <div className="linkCadas">
        <p>Ainda não possui conta?<Link href="/">Cadastre-se</Link></p>
      </div>
    </main>
  );
}
