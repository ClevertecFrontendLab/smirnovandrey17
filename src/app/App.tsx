import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { Layout } from '~/components/Layout';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import { theme } from '~/theme';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <div>
                    <p>Main content area 1</p>
                    <p>Main content area 2</p>
                    <p>Main content area 3</p>
                    <p>Main content area 4</p>
                    <p>Main content area 5</p>
                    <p>Main content area 6</p>
                    <p>Main content area 7</p>
                    <p>Main content area 8</p>
                    <p>Main content area 9</p>
                    <p>Main content area 10</p>
                    <p>Main content area 11</p>
                    <p>Main content area 12</p>
                    <p>Main content area 13</p>
                    <p>Main content area 14</p>
                </div>
            </Layout>
        </ChakraProvider>
    );
}

export default App;
