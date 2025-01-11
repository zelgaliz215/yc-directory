
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut } from "../app/auth";

const Navbar = async () => {

  // variable sesion creada mediante authjs para manejar los datos traidos del proveedor en el caso github
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* Renderizado condicional dependiente de la Session */}
        <div className="flex items-center gap-5 text-black">
          {
            session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>
                
                {/* Server action  Para hacer login */}
                <form action={async () => {
                  "use server"
                  // Cierra la Sesion y redirecciona a la raiz del app
                  await signOut( {redirectTo: "/"})
                }}>
                  <button type="submit">
                    <span>Logout</span>
                  </button>
                </form>
                
                {/*! Cambiar el id sesion----------------------------------------------------------------------------------  */}
                <Link href={`/user/${session?.id}`}>
                  <span>{ session?.user?.name }</span>
                </Link>
              </>
            )
              : (
                // Server action  Para hacer login que se renderiza si la sesion o el usuario no existe
                <form action= {async () => {
                  "use server";
                  // Se invoca github opara crear la sesion mediante el boton de login
                  await signIn('github');
                }}>
                    <button type="submit">
                        Login
                    </button>
                </form>
              )}
          
        </div>
      </nav>
    </header >
  );
};

export default Navbar;
