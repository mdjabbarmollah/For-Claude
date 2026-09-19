import Link from "next/link";

const Designers = ({ spu }) => {
  const {id,name} = spu
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
          <p>Id: {id}</p>
        <h2 className="card-title">{name}</h2>
      
    <div className="card-actions justify-end">
     <Link href ={`/users/${id}`} > <button className="btn btn-primary">see details</button></Link>
    </div>
  </div>
</div>
  )
}
export default Designers;