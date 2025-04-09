import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Layout } from '~/components/layouts/Layout';
import { IndexPage } from '~/components/pages/IndexPage';
import { JuiciestPage } from '~/components/pages/JuiciestPage';
import { VeganPage } from '~/components/pages/VeganPage';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import { theme } from '~/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <Layout>
                    <Routes>
                        <Route path='/' element={<IndexPage />} />
                        <Route path='vegan-cuisine' element={<VeganPage />} />
                        <Route path='juiciest' element={<JuiciestPage />} />
                    </Routes>
                </Layout>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
