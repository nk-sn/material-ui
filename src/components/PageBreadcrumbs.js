import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const PageBreadcrumbs = ({breadcrumbs}) => {
  const lastElement = breadcrumbs.length - 1;

  return (
    <Box my={4}>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {breadcrumbs.map((item, index) => {
          if (index !== lastElement) {
            return (
              <Link key={index} color="textPrimary" href={item.url}>
                {item.name}
              </Link>
            );
          } else {
            return <Typography color="textSecondary" key={index}>{item.name}</Typography>;
          }
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default PageBreadcrumbs;
