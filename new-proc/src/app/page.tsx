import Image from 'next/image'
import Providers from './components/Providers'
import Appbar from './components/Appbar'

export default function Home() {
  return (
    <Providers>
      Hello
      <Appbar />
    </Providers>

  )
}
