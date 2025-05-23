'use client';
import PageHeader from '@/components/widgets/headers/PageHeader';
import { Box } from '@mui/material';
import React from 'react';
import { useLocalization } from '@/context/LocalizationProvider';
import AccountForm from '@/components/settings/AccountForm';
export default function AddAccount() {
  const { translate } = useLocalization();
  return (
    <Box sx={{ flex: '1 1 auto' }}>
      <PageHeader title={translate('add_account')} hideSearch={true} />
      <AccountForm />
    </Box>);

}