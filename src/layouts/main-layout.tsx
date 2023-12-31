import Head from 'next/head';

import { MainContainer } from './main-layout-element';

interface IMainLayout {
    children: React.ReactNode;
    head?: React.ReactNode;
    title?: string;
    menus?: React.ReactNode;
    buttons?: React.ReactNode;
}

export default function MainLayout({ children, ...props }: IMainLayout) {
    const currentDate = (new Date()).getFullYear();
    const currentDateTab = <label>{currentDate}</label>

    return (<>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContainer>
            {children}
        </MainContainer>
    </>)
}