import { FC } from 'react'
import LargeHeading from '@/ui/LargeHeading'

import type { Metadata } from 'next'
import DocumentationTabs from '@/components/DocumentationTabs'

import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Free & open-source text similarity API'
}

const page: FC = ({ }) => {
    return <div className='container max-w-7xl mx-auto mt-12'>
        <div className='flex flex-col items-center gap-6'>
            <LargeHeading>Making a request</LargeHeading>
            <DocumentationTabs></DocumentationTabs>
        </div>
    </div>
}

export default page