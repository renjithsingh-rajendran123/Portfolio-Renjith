const Tilecomponent = (prop) => {
    return(
        prop.listData.map((e)=>{
            return(
                <span key={e} className="tile-sec">
                    {e}
                </span>
            )
        })
    )
}
export default Tilecomponent;