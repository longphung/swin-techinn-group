import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    question: Attribute.String;
    answer: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface GlobalFooterColumnValues extends Schema.Component {
  collectionName: 'components_global_footer_column_values';
  info: {
    displayName: 'footer column values';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface GlobalFooterColumn extends Schema.Component {
  collectionName: 'components_global_footer_columns';
  info: {
    displayName: 'footer column';
    icon: 'book';
    description: '';
  };
  attributes: {
    FooterColumnTitle: Attribute.String;
    FooterColumnValues: Attribute.JSON;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
    icon: 'file';
    description: '';
  };
  attributes: {
    Navigation: Attribute.Component<'global.footer-column', true>;
    Links: Attribute.Component<'global.footer-column', true>;
  };
}

export interface GlobalHeader extends Schema.Component {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'header';
    icon: 'user';
  };
  attributes: {
    header: Attribute.RichText;
  };
}

export interface GlobalHome extends Schema.Component {
  collectionName: 'components_global_homes';
  info: {
    displayName: 'Home';
  };
  attributes: {};
}

export interface HomePageFirstSectionTitle extends Schema.Component {
  collectionName: 'components_home_page_first_section_titles';
  info: {
    displayName: 'First Section Title';
  };
  attributes: {};
}

export interface HomePageFirstSection extends Schema.Component {
  collectionName: 'components_home_page_first_sections';
  info: {
    displayName: 'FirstSection';
    description: '';
  };
  attributes: {
    FirstSectionTitle: Attribute.String;
    FirstSectionButton: Attribute.String;
    FirstSectionImage: Attribute.Media;
    FirstSectionDescription: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface HomePageFourthSection extends Schema.Component {
  collectionName: 'components_home_page_fourth_sections';
  info: {
    displayName: 'FourthSection';
    description: '';
  };
  attributes: {
    Chart: Attribute.Media;
    CasesEachYear: Attribute.Media;
    background: Attribute.Media;
    Description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          output: 'HTML';
          preset: 'standard';
        }
      >;
  };
}

export interface HomePageSecondSectionItem extends Schema.Component {
  collectionName: 'components_home_page_second_section_items';
  info: {
    displayName: 'Second Section Item';
    description: '';
  };
  attributes: {
    SecondSectionPicture: Attribute.Media;
    Title: Attribute.String;
    Description: Attribute.Text;
    LinkTo: Attribute.String;
  };
}

export interface HomePageSecondSection extends Schema.Component {
  collectionName: 'components_home_page_second_sections';
  info: {
    displayName: 'Second Section';
  };
  attributes: {
    SecondSectionItem: Attribute.Component<
      'home-page.second-section-item',
      true
    >;
  };
}

export interface HomePageThirdSectionTabRow extends Schema.Component {
  collectionName: 'components_home_page_third_section_tab_rows';
  info: {
    displayName: 'ThirdSectionTabRow';
  };
  attributes: {
    ThirdSectionTabRowContent: Attribute.JSON;
  };
}

export interface HomePageThirdSectionTab extends Schema.Component {
  collectionName: 'components_home_page_third_section_tabs';
  info: {
    displayName: 'ThirdSectionTab';
  };
  attributes: {
    Title: Attribute.String;
    ThirSectionTabRow: Attribute.Component<
      'home-page.third-section-tab-row',
      true
    >;
  };
}

export interface HomePageThirdSection extends Schema.Component {
  collectionName: 'components_home_page_third_sections';
  info: {
    displayName: 'ThirdSection';
  };
  attributes: {
    ThirdSectionTab: Attribute.Component<'home-page.third-section-tab', true>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'faq.faq': FaqFaq;
      'global.footer-column-values': GlobalFooterColumnValues;
      'global.footer-column': GlobalFooterColumn;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'global.home': GlobalHome;
      'home-page.first-section-title': HomePageFirstSectionTitle;
      'home-page.first-section': HomePageFirstSection;
      'home-page.fourth-section': HomePageFourthSection;
      'home-page.second-section-item': HomePageSecondSectionItem;
      'home-page.second-section': HomePageSecondSection;
      'home-page.third-section-tab-row': HomePageThirdSectionTabRow;
      'home-page.third-section-tab': HomePageThirdSectionTab;
      'home-page.third-section': HomePageThirdSection;
    }
  }
}
