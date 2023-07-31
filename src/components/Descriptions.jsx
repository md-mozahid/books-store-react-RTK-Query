import Rating from './Rating'

const Descriptions = ({ book }) => {
  const { name, author, price, rating } = book
  return (
    <div className="space-y-2 mt-4 h-full">
      <h4 className="lws-book-name">{name}</h4>
      <p className="lws-author">{author}</p>
      <Rating rating={rating} />
      <p className="lws-price">BDT {price}</p>
    </div>
  )
}

export default Descriptions
