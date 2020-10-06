import React from "react"
import NavBar from "../FlightPractice/Components/Navbar"

export default function App(){

    return(
        <>
            <ProviderMovies>
                <NavBar />
                <br />
                <NewMovieBar />
                <br />
                <Movies />
                <br />
                <ExtraDetails />
            </ProviderMovies>
        </>

    )
}