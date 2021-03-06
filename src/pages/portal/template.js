import * as React from 'react';

import Layout from '../../components/layout';
import useStyles from '../../mui-styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import NotificationsIcon from '@material-ui/icons/Notifications';

// markup
const Template = () => {
  const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Paper className={classes.paper}>* Insert portlet here *</Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Template;
