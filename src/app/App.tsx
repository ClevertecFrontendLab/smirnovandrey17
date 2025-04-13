import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { Layout } from '~/components/layouts/Layout';
import { PageBuilder } from '~/components/pages/PageBuilder';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import { theme } from '~/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Routes>
                        <Route path='/' element={<PageBuilder />} />
                        <Route path='vegan-cuisine' element={<PageBuilder />} />
                        <Route path='juiciest' element={<PageBuilder />} />
                        <Route path='*' element={<Navigate to='/vegan-cuisine' replace />} />
                    </Routes>
                </Layout>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
