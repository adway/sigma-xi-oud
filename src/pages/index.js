import React from 'react';
import Layout from 'components/Layout';
import {
  Box,
  Container,
  Heading,
  Text,
  Link,
  Button
} from '@hackclub/design-system';
import styled from 'styled-components';
import { theme } from 'theme';

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
export default () => (
  <Layout>
    <Container px={[3, 4]} pt={4} mb={0}>
      <Heading.h1>
        Predicting Opioid Use Disorder Using Machine Learning
      </Heading.h1>
    </Container>
    <Section lineColor="primary" title="Abstract" mb={[3]}>
      <TextContainer>
        <Text fontSize={2} align="justify">
          Opioid Use Disorder (OUD), defined as physical or psychological
          reliance on opioids, is quickly becoming a public health epidemic.
          This project demonstrates the potential of supervised machine learning
          in predicting adults at risk for OUD by considering interactions
          between various demographic, socioeconomic, physical, and
          psychological features in an integrated manner. A labeled data set was
          built from the responses to the 2016 edition of the National Survey on
          Drug Use and Health (NSDUH) conducted by the Substance Abuse and
          Mental Health Services Administration (SAMHSA). This labeled data set
          was used to train a random forest classifier while accounting for
          class imbalance. Random forest was chosen as the classification
          technique for two reasons. First, it is robust to correlated features.
          Second, it can also identify the relative importance of the different
          features in predicting OUD.
        </Text>
        <Text fontSize={2} mt={4} align="justify">
          The random forest classifier can identify adults at risk for OUD
          accurately with the average area under the ROC curve (AUC) over 0.85.
          Early initiation of marijuana (prior to 18 years of age) emerges as
          the most dominant predictor for developing OUD in adult life. This is
          surprising because it ranks higher than both mental illness and
          disability, which are often comorbid with substance use disorders. The
          key takeaway is that curbing early initiation of marijuana is the best
          prevention strategy. This highlights the crucial role that educators,
          counselors, and parents can play in alleviating the United States’
          opioid overdose crisis.
        </Text>
        <Link
          target="_blank"
          href="https://www.dropbox.com/s/bj8yqtgnbh7t5wn/LabReport-v6.docx?dl=0"
        >
          <Button chevronRight mt={3}>
            Read the Report
          </Button>
        </Link>
      </TextContainer>
    </Section>
  </Layout>
);
