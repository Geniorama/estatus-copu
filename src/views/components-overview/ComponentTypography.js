// MATERIAL - UI
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const ComponentTypography = () => {
  const basicTypographyCodeString = `<Typography variant="h1">Inter</Typography>
<Typography variant="h5">Font Family</Typography>
<Breadcrumbs aria-label="breadcrumb">
  <Typography variant="h6">Regular</Typography>
  <Typography variant="h6">Medium</Typography>
  <Typography variant="h6">Bold</Typography>
</Breadcrumbs>`;

  const headingTypographyCodeString = `<Typography variant="h1">H1 Heading</Typography>
<Typography variant="h2">H2 Heading</Typography>
<Typography variant="h3">H3 Heading</Typography>
<Typography variant="h4">H4 Heading</Typography>
<Typography variant="h5">H5 Heading</Typography>
<Typography variant="h6">H6 Heading / Subheading</Typography>`;

  const body1TypographyCodeString = `<Typography variant="body1" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  const body2TypographyCodeString = `<Typography variant="body2" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  const subtitle1TypographyCodeString = `<Typography variant="subtitle1" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  const subtitle2TypographyCodeString = `<Typography variant="subtitle2" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  const captionTypographyCodeString = `<Typography variant="caption">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  const alignmentTypographyCodeString = `<Typography variant="body2" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
<Typography variant="body2" textAlign="center" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>
<Typography variant="body2" textAlign="right">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Typography>`;

  const gutterTypographyCodeString = `<Typography variant="body1" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>
<Typography variant="body2" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  const overlineTypographyCodeString = `<Typography variant="overline">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  const lineTypographyCodeString = `<Link href="#">#able-pro</Link>`;

  const colorTypographyCodeString = `<Typography variant="h6" color="textPrimary" gutterBottom>
  This is textPrimary text color.
</Typography>
<Typography variant="h6" color="textSecondary" gutterBottom>
  This is textSecondary text color.
</Typography>
<Typography variant="h6" color="primary" gutterBottom>
  This is primary text color.
</Typography>
<Typography variant="h6" color="secondary" gutterBottom>
  This is secondary text color.
</Typography>
<Typography variant="h6" color="success" gutterBottom>
  This is success text color.
</Typography>
<Typography variant="h6" sx={{ color: 'warning.main' }} gutterBottom>
  This is warning text color.
</Typography>
<Typography variant="h6" color="error" gutterBottom>
  This is error text color.
</Typography>`;

  const parapraphyTypographyCodeString = `<Typography variant="body1" gutterBottom>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua.
</Typography>`;

  const fontTypographyCodeString = `<Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>
<Typography variant="subtitle1" gutterBottom sx={{ fontStyle: 'italic' }}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua.
</Typography>`;

  return (
    <>
      <ComponentHeader
        title="Typography"
        caption="Use typography to present your design and content as clearly and efficiently as possible."
        directory="src/pages/components-overview/typography"
        link="https://mui.com/material-ui/react-typography/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Stack spacing={3}>
              <MainCard title="Basic" codeString={basicTypographyCodeString}>
                <Stack spacing={0.75} sx={{ mt: -1.5 }}>
                  <Typography variant="headlineBold">Buenos Aires</Typography>
                  <Typography variant="subheadlineBold">Font Family</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Regular</Typography>
                    <Typography variant="bodyBold">Bold</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Heading - Monument Font" codeString={headingTypographyCodeString}>
                <Stack spacing={2}>
                  <Typography variant="h1">H1 Bold</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 38px</Typography>
                    <Typography variant="h6">Weight: Bold</Typography>
                    <Typography variant="h6">Line Height: 46px</Typography>
                  </Breadcrumbs>
                  <Divider />
                  <Typography variant="h1Regular">H1 Regular</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 38px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 46px</Typography>
                  </Breadcrumbs>
                  <Divider />

                  <Typography variant="h2">H2 Bold</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 30px</Typography>
                    <Typography variant="h6">Weight: Bold</Typography>
                    <Typography variant="h6">Line Height: 38px</Typography>
                  </Breadcrumbs>
                  <Divider />
                  <Typography variant="h2Regular">H2 Regular</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 30px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 38px</Typography>
                  </Breadcrumbs>
                  <Divider />

                  <Typography variant="h3">H3 Bold</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 24px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 32px</Typography>
                  </Breadcrumbs>
                  <Divider />
                  <Typography variant="h3Regular">H3 Regular</Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 24px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 32px</Typography>
                  </Breadcrumbs>
                  <Divider />
                </Stack>
              </MainCard>
              <MainCard title="Headline (Bold) 32 pt" codeString={body1TypographyCodeString}>
                <>
                  <Typography variant="headlineBold" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 32px</Typography>
                    <Typography variant="body">Weight: 600</Typography>
                    <Typography variant="body">Line Height: 42px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Headline (Book) 32 pt" codeString={body1TypographyCodeString}>
                <>
                  <Typography variant="headline" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 32px</Typography>
                    <Typography variant="body">Weight: 400</Typography>
                    <Typography variant="body">Line Height: 42px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Subheadline (Semibold) 24 pt" codeString={body2TypographyCodeString}>
                <>
                  <Typography variant="subheadlineBold" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 24px</Typography>
                    <Typography variant="body">Weight: 600</Typography>
                    <Typography variant="body">Line Height: 32px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Subheadline (Book) 24 pt" codeString={body2TypographyCodeString}>
                <>
                  <Typography variant="subheadline" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 24px</Typography>
                    <Typography variant="body">Weight: 400</Typography>
                    <Typography variant="body">Line Height: 32px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Body (Bold) 18 pt" codeString={subtitle1TypographyCodeString}>
                <>
                  <Typography variant="bodyBold" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 18px</Typography>
                    <Typography variant="body">Weight: 600</Typography>
                    <Typography variant="body">Line Height: 24px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Body (Book) 18 pt" codeString={subtitle1TypographyCodeString}>
                <>
                  <Typography variant="body" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 18px</Typography>
                    <Typography variant="body">Weight: 400</Typography>
                    <Typography variant="body">Line Height: 24px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Caption (Bold) 16 pt" codeString={captionTypographyCodeString}>
                <Stack spacing={1}>
                  <Typography variant="captionBold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 16px</Typography>
                    <Typography variant="body">Weight: 600</Typography>
                    <Typography variant="body">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Caption (Book) 16 pt" codeString={captionTypographyCodeString}>
                <Stack spacing={1}>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body">Size: 16px</Typography>
                    <Typography variant="body">Weight: 400</Typography>
                    <Typography variant="body">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack spacing={3}>
              <MainCard title="Alignment" codeString={alignmentTypographyCodeString}>
                <>
                  <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography variant="body2" textAlign="center" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <Typography variant="body2" textAlign="right">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </>
              </MainCard>
              <MainCard title="Gutter Bottom" codeString={gutterTypographyCodeString}>
                <>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Overline" codeString={overlineTypographyCodeString}>
                <Stack spacing={1.5}>
                  <Typography variant="overline">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Link" codeString={lineTypographyCodeString}>
                <Stack spacing={1.5}>
                  <Link href="#">#able-pro</Link>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 12px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 20px</Typography>
                  </Breadcrumbs>
                </Stack>
              </MainCard>
              <MainCard title="Colors" codeString={colorTypographyCodeString}>
                <>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    This is textPrimary text color.
                  </Typography>
                  <Typography variant="h6" color="textSecondary" gutterBottom>
                    This is textSecondary text color.
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    This is primary text color.
                  </Typography>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    This is secondary text color.
                  </Typography>
                  <Typography variant="h6" color="success" gutterBottom>
                    This is success text color.
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'warning.main' }} gutterBottom>
                    This is warning text color.
                  </Typography>
                  <Typography variant="h6" color="error" gutterBottom>
                    This is error text color.
                  </Typography>
                </>
              </MainCard>
              <MainCard title="Paragraph" codeString={parapraphyTypographyCodeString}>
                <>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 14px</Typography>
                    <Typography variant="h6">Weight: Regular</Typography>
                    <Typography variant="h6">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
              <MainCard title="Font Style" codeString={fontTypographyCodeString}>
                <>
                  <Typography variant="body1" gutterBottom sx={{ fontStyle: 'italic' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontStyle: 'italic' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="h6">Size: 14px</Typography>
                    <Typography variant="h6">Weight: Italic Regular & Italic Bold</Typography>
                    <Typography variant="h6">Line Height: 22px</Typography>
                  </Breadcrumbs>
                </>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </>
  );
};

export default ComponentTypography;
