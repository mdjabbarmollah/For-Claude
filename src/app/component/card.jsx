const Cardsdesign = ({sendingprops}) => {
  return (
    
    <div className="bg-white border border rounded-2xl shadow-2xl border-[#F1F5F9] felx justify-between p-2.5">

      <div className="flex justify-between items-center mb-4 ">
      
      <img src= {sendingprops.icon} alt="" className="w-[56px] h-[56px] mb-[16px]" />
        {sendingprops && (
          
          <span className="text-[12px] font-semibold px-3 py-[4px] rounded-full bg-blue-100 text-blue-600
        ">{sendingprops.badge}
        </span>
        )}
      </div>
  <h2>{sendingprops.name}</h2>
      <p>{sendingprops.description} </p>
      <div className="flex justify-between">
        <span>{sendingprops.category}</span> 
        <span> {sendingprops.difficulty}</span>
        <span> ⭐{sendingprops.rating}</span>
      </div> 
      </div>
      
  )
}
export default Cardsdesign