'use strict';

/**
 * recommend-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommend-page.recommend-page');
