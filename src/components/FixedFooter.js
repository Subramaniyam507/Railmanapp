import React from "react";



export default function FixedFooter(){
    return (
        <footer className="bg-transparent py-3 fixed-bottom " >
            <div className="container" >
                <p className="text-center " style={{color:"black"}}>
                    Copyright &copy; {new Date().getFullYear()} RailManApp
                </p>
            </div>
        </footer>
    )
}
