/**
 * @type {import('tinacms').Collection}
 */

import template from '../template'

export default {
    label: 'Home Page',
    name: 'home',
    path: 'content/home',
    format: 'mdx',
    ui: {
        router: () => {
            return `/`
        }
    },
    fields: [
        {
            type: 'object',
            name: 'section',
            label: 'Section',
            list: true,
            ui: {
                visualSelector: true
            },
            templates: [...template]
        }
    ]
}
