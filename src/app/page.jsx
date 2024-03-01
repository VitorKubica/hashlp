import React from "react";
import Cabecalho from '../components/Cabecalho/Cabecalho'
import Link from "next/link"

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-50">
      <Cabecalho/>
  <section className="conteudo border border-gray-200 rounded-lg w-full max-w-sm py-4 flex flex-col items-center">
    <div className="elemento flex justify-left w-full">
      <div className="icone w-10 h-10 rounded-full bg-green-400 ml-8"></div>
    </div>
    <div className="titulo text-initial mb-4 ml-8">
      <h1 className="text-2xl font-bold text-gray-700">Redefinir Senha</h1>
      <p className="text-gray-700">Digite seu email para receber o código de recuperação</p>
    </div>
    <div className="linha h-0.5 w-full bg-gray-200 mb-4"></div>
    <div className="emailform w-full flex justify-center items-end">
      <form className="flex flex-col">
        <label for="email" className="text-gray-700 mb-2">Email</label>
        <input type="text" id="email" placeholder="exemple@email.com" className="border border-gray-200 rounded-lg w-full p-2"/>
      </form>
      <button type="button" className="w-10 h-10 rounded-full bg-green-400 mr-1 ml-2"></button>
    </div>
  </section>
  <div className="text-center mt-4 flex justify-center items-center">
    <p className="text-gray-700">Ainda não possui conta? <Link href="/" className="text-green-500 hover:text-green-600">Cadastre-se</Link></p>
  </div>
</main>

  );
}
