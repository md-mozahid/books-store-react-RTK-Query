import { useParams } from 'react-router-dom'
import EditBookForm from '../components/EditBookForm'
import { useGetBooksQuery } from '../features/api/apiSlice'

const EditBook = () => {
  const { bookId } = useParams()
  const { data: book, isLoading, isError } = useGetBooksQuery(bookId)
  console.log(book)

  let content = null
  if (isLoading) {
    content = <div>Loading...</div>
  }

  if (!isLoading && isError) {
    content = <div>That was an error !</div>
  }

  if (!isLoading && !isError && book?.id) {
    content = <EditBookForm book={book} />
  }

  return <>{content}</>
}

export default EditBook
