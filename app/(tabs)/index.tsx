import { AppContext } from '@/context/AppContext'
import React, { useContext } from 'react'
import Onboarding from '../onbording';

export default function index() {
  const {isAuthenticated} = useContext(AppContext);

  return isAuthenticated ? "" : <Onboarding />;
}
