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
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String;
    subtitle: Attribute.String;
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

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'sections.hero': SectionsHero;
      'sections.sections-banner': SectionsSectionsBanner;
      'sections.sections-blog': SectionsSectionsBlog;
      'shared.seo': SharedSeo;
    }
  }
}
