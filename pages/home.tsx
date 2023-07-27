import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  function makeid(length: number) {
    let result: string = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter: number = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }


  return (
    <>
      <h1>Hola!!</h1>
      <div className="container mx-auto px-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push(`/b/${makeid(6)}`)}>
          Create Request Bin
        </button>
      </div>
    </>
  )

}
