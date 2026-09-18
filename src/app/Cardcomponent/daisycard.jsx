const Daisycard = ({sendingprops2}) => {
  const {title} = sendingprops2;
  return (
   <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
        <h2 className="card-title">{title}</h2>
    <p></p>
    <div className="card-actions justify-end">
          <button className="btn btn-primary">
           Read more</button>
    </div>
  </div>
</div>
  )
}
export default Daisycard