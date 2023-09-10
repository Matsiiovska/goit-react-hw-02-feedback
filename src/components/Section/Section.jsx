import React from 'react';
import PropTypes from 'prop-types';
import { SectionCon, SectionTit } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionCon>
      <SectionTit>{title}</SectionTit>
      {children}
    </SectionCon>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};