import React from "react";


export default function FooterComp(){

    return (
        <footer className="bg-dark py-3 fixed-bottom">
            <div className="container">
                <p className="text-center text-light">
                    Copyright &copy; {new Date().getFullYear()} RailManApp
                </p>
            </div>
        </footer>
    )
}