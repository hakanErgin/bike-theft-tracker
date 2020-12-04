import React, { useState } from 'react';
import { useFindTheftsQuery, useGetTheftQuery } from './generated-types';
import { Checkbox, Box, Container } from '@material-ui/core';

const App: React.FC = () => {
  const allThefts = useFindTheftsQuery();
  allThefts.startPolling(2000);
  console.log(allThefts.data?.findThefts);

  const draftThefts = useGetTheftQuery();
  console.log(draftThefts.data);

  return (
    <Box>
      <div style={{ marginLeft: 400, paddingTop: 50 }}>
        <b>VIEW DRAFT NOTES</b>
      </div>
    </Box>
  );
};

export default App;
