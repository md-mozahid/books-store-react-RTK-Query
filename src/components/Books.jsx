import { useSelector } from 'react-redux'
import { useGetBooksQuery } from '../features/api/apiSlice'
import Book from './Book'

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery()

  // filter
  const { filter, search } = useSelector((state) => state.filters)

  const handleFilterByType = (dt) => {
    if (filter === 'all') return true
    if (filter === 'featured') return dt.featured
    return true
  }

  const handleFilterBySearch = (dt) => {
    if (search) return dt.name.toLowerCase().includes(search.toLowerCase())
    return true
  }

  // decide what to render
  let content = null
  if (isLoading) {
    content = <div>Loading...</div>
  }

  if (!isLoading && isError) {
    content = <div>That was an error !</div>
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <div>No books found !</div>
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books
      .filter(handleFilterBySearch)
      .filter(handleFilterByType)
      .map((book) => <Book key={book.id} book={book} />)
  }

  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  )
}

export default Books
