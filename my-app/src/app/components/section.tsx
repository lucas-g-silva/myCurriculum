import { ReactNode } from "react"


export default function Section({...props}) {
    return (
        <section className={"bg-white bg-opacity-5 backdrop-blur-md rounded-[40px] text-white border border-white/10 p-10 " + props.className}>
            {props.children}
        </section>
    )
}
//