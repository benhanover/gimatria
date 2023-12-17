const Word = ({ word }) => {
  return (
    <div className='border border-gray-500 p-4 bg-white'>
      <p className='font-bold text-2xl mb-2 text-blue-600'>{word.name}:</p>
      <p className='text-gray-800'>{word.value}</p>
    </div>
  )
}

export default Word
