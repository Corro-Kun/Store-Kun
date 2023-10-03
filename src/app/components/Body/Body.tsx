import Style from "./Style.module.css"

function Body({children}: {children: React.ReactNode}) {
  return (
    <div className={Style.BodyMain} >
      {children}
    </div>
  )
}

export default Body