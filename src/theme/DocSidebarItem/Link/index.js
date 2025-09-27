import React from 'react';
import OriginalLink from '@theme-original/DocSidebarItem/Link';

export default function LinkWrapper(props) {
  const { item } = props;

  // Pas aan als jouw route anders is; startsWith dekt ook subpagina's
  const isPremium =
    item?.href?.startsWith('/docs/premium') ||
    item?.docId?.startsWith?.('premium');

  const gradientStyle = {
    background: 'linear-gradient(90deg, #3d64bb, #ad635f)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    fontWeight: 650,
  };

  // Als het de Premium-link is: label wrappen met een <span style=...>
  const newItem = isPremium
    ? { ...item, label: <span style={gradientStyle}>{item.label}</span> }
    : item;

  return <OriginalLink {...props} item={newItem} />;
}
