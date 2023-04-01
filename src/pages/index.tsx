import { OverviewBudget } from '@/sections/overview/overview-budget'
import { Box, Container, Grid } from '@mui/material'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Layout as DashboardLayout } from '@/layouts/dashboard/layout';

function Page() {
  return (
    <React.Fragment>
      <Head>
        <title>
          Overview | Devias Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3} item={true}>
              <OverviewBudget difference={12} positive sx={{ height: '100%' }} value={'$24k'} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}

Page.getLayout = (page: ReactNode | ReactNode[]) => {
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>

  )
}

export default Page