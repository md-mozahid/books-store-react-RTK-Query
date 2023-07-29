import { useParams } from 'react-router-dom'
import EditBookForm from '../components/EditBookForm'
import { useGetBookQuery } from '../features/api/apiSlice'

const EditBook = () => {
  const { bookId } = useParams()
  const { data: book, isLoading, isError } = useGetBookQuery(bookId)

  let content = null
  if (isLoading) {
    content = <div>Loading...</div>
  }

  if (!isLoading && isError) {
    content = <div>That was an error !</div>
  }

  if (!isLoading && !isError && book.id) {
    content = <EditBookForm book={book} />
  }

  return <>{content}</>
}

export default EditBook
