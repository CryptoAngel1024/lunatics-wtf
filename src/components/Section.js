import React from "react"

function Section(props) {
    const classes = `${props.className} px-4 md:px-24 lg:px-32 py-2`
    return (
        <section className={classes}>
            {props.children}
        </section>
    )
}

export default Section;