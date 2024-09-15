// swagger.config.js

import SwaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        info: {
            title: '성수데이팅 API',
            version: '1.0.0',
            description: '성수데이팅 API with express, API 설명',
        },
        host: 'localhost:3000',
        basepath: '../',
    },
    apis: ['./src/routes/*.js', './swagger/*'],
};

export const specs = SwaggerJsdoc(options);
