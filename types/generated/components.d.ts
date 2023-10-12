import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_decoration_heroes';
  info: {
    name: 'Hero';
    icon: 'address-card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsSectionsBanner extends Schema.Component {
  collectionName: 'components_sections_sections_banners';
  info: {
    displayName: 'Sections.banner';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    subtitle: Attribute.String;
    buttonUrl: Attribute.String;
    buttonText: Attribute.String;
  };
}

export interface SectionsSectionsBlog extends Schema.Component {
  collectionName: 'components_sections_sections_blogs';
  info: {
    displayName: 'Sections.blog';
  };
  attributes: {
    title1: Attribute.String;
    title2: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface SectionsSectionsPortfolio extends Schema.Component {
  collectionName: 'components_sections_sections_portfolios';
  info: {
    displayName: 'Sections.portfolio';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.hero': SectionsHero;
      'sections.sections-banner': SectionsSectionsBanner;
      'sections.sections-blog': SectionsSectionsBlog;
      'sections.sections-portfolio': SectionsSectionsPortfolio;
      'shared.seo': SharedSeo;
    }
  }
}
