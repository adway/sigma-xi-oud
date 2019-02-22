import React from 'react';
import Layout from 'components/layout';
import {
  Box,
  Container,
  Link as A,
  Heading,
  Text
} from '@hackclub/design-system';
import styled from 'styled-components';
import { theme } from 'theme';

const Headline = styled(Heading).attrs({
  color: theme.colors.black,
  fontSize: [5, 5],
  mb: 4
})`
  line-height: 1.125;
`;

const H = styled(Text.span)`
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(250, 247, 133, 0.33),
    rgba(250, 247, 133, 0.66) 95%,
    rgba(250, 247, 133, 0.1)
  );
`;

const Lead = styled(Container.withComponent(Text)).attrs({
  fontSize: 4,
  mx: 'auto'
})``;

const Bannerline = props => (
  <Box
    bg={theme.colors.warning}
    mt={[4, 5, 5]}
    mb={4}
    style={{ borderRadius: theme.radius, height: 4, width: '8rem' }}
    {...props}
  />
);

const TextContainer = styled(Box).attrs({ maxWidth: 100 })`
  max-width: ${({ maxWidth }) => maxWidth}%;
`;

const Section = ({
  bg = 'white',
  bannerWidth = 48,
  lineColor = 'grey',
  headline,
  lead,
  children,
  ...props
}) => (
  <Box
    bg={theme.colors[bg]}
    pt={0}
    mt={0}
    color={theme.colors.black}
    {...props}
  >
    <Container width={1} mt={0} pb={[3, 3, 3]}>
      <TextContainer maxWidth={bannerWidth} mb={3}>
        <Bannerline bg={theme.colors[lineColor]} />
        <Headline children={headline} />
        <Lead children={lead} />
      </TextContainer>
      {children}
    </Container>
  </Box>
);

export default () => (
  <Layout>
    <Section>
      <Heading.h1>
        Predicting Opioid Use Disorder Using Machine Learning
      </Heading.h1>
    </Section>

    <Section lineColor="adway" headline="Abstract">
      <TextContainer mt={1}>
        <Text fontSize={3}>
          Opioid Use Disorder (OUD), defined as physical or psychological
          reliance on opioids, is quickly becoming a public health epidemic.
          This project demonstrates the potential of supervised machine learning
          in predicting individuals at risk for OUD by considering interactions
          between various demographic, socioeconomic, physical, and
          psychological features in an integrated manner.{' '}
        </Text>{' '}
        <Text mt={3}>
          A labeled data set is built from the responses to the National Survey
          on Drug Use and Health (NSDUH) conducted by the Substance Abuse and
          Mental Health Services Administration (SAMHSA). This labeled data set
          is used to train a decision tree classifier while accounting for class
          imbalance. The decision tree classifier can identify adults with OUD
          with high accuracy (sensitivity = 0.857, specificity = 0.725, AUC =
          0.858).{' '}
        </Text>{' '}
        <Text mt={3}>
          The classifier flags early (prior to 18 years of age) use of marijuana
          as posing the most significant risk for developing OUD in adult life.
          It identifies the demographic and socioeconomic groups that are
          impacted by early marijuana use. These groups include individuals with
          no college degree, no full-time employment, an income less than 49k,
          and of the Hispanic/Native American heritage.{' '}
        </Text>{' '}
        <Text mt={3}>
          Therefore, curbing early marijuana use may be protective against OUD.
          Legalization of marijuana, however, may provide easy access and
          present challenges to curbing early use. Therefore, states must
          encourage businesses to diligently abide by the laws of prohibiting
          the sale of marijuana to minors.
        </Text>
      </TextContainer>
    </Section>
  </Layout>
);
