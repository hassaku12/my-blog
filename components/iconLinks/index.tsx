import Image from 'next/image'
import Link from 'next/link'

export default function IconLinks() {
    return (
        <div className="flex space-x-4 py-4 lg:py-0">
            <Link href="https://twitter.com/blue9128" target="_blank">
                <Image src="/twitter.svg" alt="twitter" width={24} height={24}></Image>
            </Link>
        </div>
    )
}