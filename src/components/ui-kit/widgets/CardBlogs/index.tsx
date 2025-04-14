import { Box, SimpleGrid } from '@chakra-ui/react';

import { CardBlog } from '~/components/ui-kit/widgets/cards/CardBlog';
import { HeaderWithLink } from '~/components/ui-kit/widgets/HeaderWithLink';

// @ts-expect-error TODO добавить типы
export const CardBlogs = ({ title, linkLable, linkPath, posts }) => (
    <Box mt='84px' p={{ base: '12px', lg: '24px' }} borderRadius='16px' bg='bg.highlight.secondary'>
        <HeaderWithLink
            linkPath={linkPath}
            linkLabel={linkLable}
            variant='link'
            // @ts-expect-error TODO исправить типы
            mb={{ base: '12px', lg: '16px', xl: '24px' }}
        >
            {title}
        </HeaderWithLink>
        <SimpleGrid spacing={{ base: '12px', md: '16px', xl: '24px' }} columns={{ base: 1, md: 3 }}>
            {/* @ts-expect-error TODO добавить типы */}
            {posts.map((post, index) => (
                <CardBlog
                    key={index}
                    name={post.name}
                    nickname={post.nickname}
                    imageSrc={post.imageSrc}
                    text={post.text}
                />
            ))}
        </SimpleGrid>
    </Box>
);
