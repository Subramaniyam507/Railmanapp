import React from "react";


export default function Footercomp(){

    return (
        <footer className="bg-transparent py-3 ">
            <div className="container" >
                <p className="text-center text-muted">
                    Copyright &copy; {new Date().getFullYear()} RailManApp
                </p>
            </div>
        </footer>
    )
}