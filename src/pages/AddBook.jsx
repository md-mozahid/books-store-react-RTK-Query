import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddBookMutation } from '../features/api/apiSlice'

const AddBook = () => {
  const [addBook, { isLoading, isError, isSuccess }] = useAddBookMutation()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [price, setPrice] = useState('')
  const [rating, setRating] = useState('')
  const [featured, setFeatured] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    addBook({
      name,
      author,
      thumbnail,
      price: Number(price),
      rating: Number(rating),
      featured,
    })
    navigate('/')
  }

  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="lws-bookName">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-author">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lws-thumbnail">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="lws-price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-rating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            value={featured}
            onChange={(e) => setFeatured(e.target.value)}
          />
          <label htmlFor="lws-featured" className="ml-2 text-sm">
            {' '}
            This is a featured book{' '}
          </label>
        </div>

        <button type="submit" className="submit" id="lws-submit">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default AddBook
