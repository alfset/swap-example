import Head from 'next/head';
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { dependencies, products } from '../config';
import {
  Product,
  Dependency,
  WalletSection,
  handleChangeColorModeValue,
  SwapTokens,
} from '../components';
import { useTheme, Themes } from '@cosmology-ui/react';

const library = {
  title: 'Comuntiy Node',
  text: 'ComunityNode',
  href: 'https://comunitynode.my.id',
};

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setTheme, theme } = useTheme();

  return (
    newFunction(setTheme, theme, toggleColorMode, colorMode)
  );
}
function newFunction(setTheme: (theme: Themes) => void, theme: Themes, toggleColorMode: () => void, colorMode: string) {
  return <Container maxW="5xl" py={10}>
    <Head>
      <title>Comunity Node App</title>
      <meta name="description" content="Swap Token" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Flex justifyContent="end" mb={4}>
      <Button
        variant="outline"
        px={0}
        onClick={() => {
          setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light);
          toggleColorMode();
        } }
      >
        <Icon
          as={colorMode === 'light' ? BsFillMoonStarsFill : BsFillSunFill} />
      </Button>
    </Flex>
    <Box textAlign="center">
      <Heading
        as="h1"
        fontSize={{ base: '3xl', md: '5xl' }}
        fontWeight="extrabold"
        mb={3}
      >
        Comunity Node App
      </Heading>
      <Heading
        as="h1"
        fontWeight="bold"
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        <Text as="span">Welcome to Comunity Swap </Text>
        <Text
          as="span"
          color={handleChangeColorModeValue(
            colorMode,
            'primary.500',
            'primary.200'
          )}
        >
        </Text>
      </Heading>
    </Box>
    <WalletSection />
    <Divider mb="60px" />
    <SwapTokens />
    <Box mb={16}>
      <Divider />
    </Box>
    <Grid
      templateColumns={{
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={8}
      mb={14}
    >
      {products.map((product) => (
        <Product key={product.title} {...product} />
      ))}
    </Grid>
    <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={8} mb={20}>
      <Dependency {...library} />
      {dependencies.map((dependency) => (
        <Dependency key={dependency.title} {...dependency} />
      ))}
    </Grid>

    <Box mb={3}>
      <Divider />
    </Box>
    <Stack
      isInline={true}
      spacing={1}
      justifyContent="center"
      opacity={0.5}
      fontSize="sm"
    >
      <Text>Built with</Text>
      <Link
        href="https://cosmology.tech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cosmology
      </Link>
      <Text>serve By</Text>
      <Link
        href="https://comunitynode.my.id"
        target="_blank"
        rel="noopener noreferrer"
      >
        Comunity Node
      </Link>
    </Stack>
  </Container>;
}

