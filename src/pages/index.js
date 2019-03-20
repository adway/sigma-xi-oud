import React from 'react';
import Layout from 'components/Layout';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Link
} from '@hackclub/design-system';
import styled from 'styled-components';
import { theme } from 'theme';
import Disqus from 'disqus-react';

const Title = styled(Heading).attrs({
  color: theme.colors.black,
  fontSize: [5, 5],
  mb: 4
})`
  line-height: 1.125;
`;

const Lead = styled(Container.withComponent(Text)).attrs({
  fontSize: 4,
  mx: 'auto'
})``;

const Bannerline = props => (
  <Box
    bg={theme.colors.warning}
    mt={[4]}
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
  title,
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
    <Container width={1} px={[3, 4]} pt={0}>
      <TextContainer maxWidth={bannerWidth} mb={3}>
        <Bannerline bg={theme.colors[lineColor]} />
        <Title children={title} />
        <Lead children={lead} />
      </TextContainer>
      {children}
    </Container>
  </Box>
);

const StyledButton = styled(Button).attrs({ mt: 3 })`
  background: '#000';
`;

const disqusShortname = 'oud';

export default () => (
  <Layout>
    <Container px={[3, 4]} pt={4} mb={0}>
      <Heading.h1>
        Predicting Opioid Use Disorder Using Machine Learning
      </Heading.h1>
      <Heading.h3 pt={4}>
        Adway S. Wadekar - Saint John's High School
      </Heading.h3>
    </Container>
    <Section lineColor="primary" title="Abstract" mb={[3]}>
      <TextContainer>
        <Text fontSize={2} align="justify">
          Opioid Use Disorder (OUD), defined as physical or psychological
          reliance on opioids, is quickly becoming a public health epidemic.
          This project demonstrates the potential of supervised machine learning
          in predicting individuals at risk for OUD by considering interactions
          between various demographic, socioeconomic, physical, and
          psychological features in an integrated manner. A labeled data set is
          built from the responses to the National Survey on Drug Use and Health
          (NSDUH) conducted by the Substance Abuse and Mental Health Services
          Administration (SAMHSA). This labeled data set is used to train a
          decision tree classifier while accounting for class imbalance. The
          decision tree classifier can identify adults with OUD with high
          accuracy (sensitivity = 0.857, specificity = 0.725, AUC = 0.858). The
          classifier flags early (prior to 18 years of age) use of marijuana as
          posing the most significant risk for developing OUD in adult life. It
          identifies the demographic and socioeconomic groups that are impacted
          by early marijuana use. These groups include individuals with no
          college degree, no full-time employment, an income less than 49k, and
          of the Hispanic/Native American heritage. Therefore, curbing early
          marijuana use may be protective against OUD. Legalization of
          marijuana, however, may provide easy access and present challenges to
          curbing early use. Therefore, states must encourage businesses to
          diligently abide by the laws of prohibiting the sale of marijuana to
          minors.
        </Text>
        <Text>
          <Link
            target="_blank"
            href="https://www.dropbox.com/s/bj8yqtgnbh7t5wn/LabReport-v6.docx?dl=0"
          >
            <StyledButton mt={3}>Read the Report</StyledButton>
          </Link>
        </Text>
      </TextContainer>
    </Section>
    <Section lineColor="primary" title="Comments" mb={[3]}>
      <Disqus.DiscussionEmbed shortname={disqusShortname} />
    </Section>
  </Layout>
);
