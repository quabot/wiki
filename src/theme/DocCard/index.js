import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {usePluralForm} from '@docusaurus/theme-common';
import {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function useCategoryItemsPlural() {
  const {selectMessage} = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          message: '1 item|{count} items',
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          description:
            'Default description for a category card in the generated index about how many items this category includes',
        },
        {count},
      ),
    );
}

/** Recursief: zoek het eerste link-item en geef z’n href terug */
function findFirstLinkHref(item) {
  if (!item) return null;
  if (item.type === 'link' && item.href) return item.href;
  if (item.type === 'category' && Array.isArray(item.items)) {
    for (const child of item.items) {
      const href = findFirstLinkHref(child);
      if (href) return href;
    }
  }
  return null;
}

function CardContainer({href, children}) {
  return (
    <Link href={href} className={clsx('card padding--lg', styles.cardContainer)}>
      {children}
    </Link>
  );
}

// ⬇️ Geen icon prop meer
function CardLayout({href, title, description}) {
  return (
    <CardContainer href={href}>
      <Heading
        as="h2"
        className={clsx('text--truncate', styles.cardTitle)}
        title={title}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={clsx('text--truncate', styles.cardDescription)}
          title={description}
        >
          {description}
        </p>
      )}
    </CardContainer>
  );
}

function CardCategory({item}) {
  // Sommige categorieën hebben direct item.href (generated-index),
  // anders zoeken we de eerste link in de items.
  const href = item.href ?? findFirstLinkHref(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  if (!href) return null;

  return (
    <CardLayout
      href={href}
      title={item.label}
      description={item.description ?? categoryItemsPlural(item.items.length)}
    />
  );
}

function CardLink({item}) {
  return (
    <CardLayout
      href={item.href}
      title={item.label}
      description={item.description}
    />
  );
}

export default function DocCard({item}) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
