import path from 'path';
import { promises as fs } from 'fs';

import Head from 'next/head'
import Image from 'next/image'

import MainLayout from '@/layouts/main-layout'
import Card from '@/components/card/card-component'

import { BodyContainer } from '@/elements/index-element'
import { TTag, TItem, IHome } from '@/types'

// Server Side
export const getServerSideProps = async () => {
    async function loadData<T>(dataPath: string): Promise<T> {
        const jsonDirectory = path.join(process.cwd(), dataPath)
        const items = await fs.readFile(jsonDirectory, 'utf8');
        return JSON.parse(items);
    }

    const itemsData = await loadData<TItem[]>('data/items.json')
    const tagData = await loadData<TTag[]>('data/tags.json')

    const data = itemsData.map(row => {
        let { tags } = row;
        tags = tags.map((value) => {
            return tagData.find((tag: TTag) => tag.id === value as unknown as number)
        }) as unknown as Array<TTag>
        return { ...row, tags }
    })
    return {
        props: { data }
    }
}

// Frontend Side
export default function Home({ data }: IHome) {
    const cards = data.map((item: TItem) => <Card {...item} />)
    return (
        <>
            <MainLayout>
                <BodyContainer>
                    {cards}
                </BodyContainer>

            </MainLayout>
        </>
    )
}
