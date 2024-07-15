export const LinkTemp = {
    label: 'Link',
    name: 'link',
    type: 'object',
    list: false,
    ui: {
        itemProps: item => {
            return {label: item.text}
        },
        defaultProps: {
            text: 'Link Label',
            icon: true,
            url: '#'
        }
    },
    fields: [
        {
            label: 'Text',
            name: 'text',
            type: 'string',
            required: true
        },
        {
            label: 'Icon',
            name: 'icon',
            type: 'boolean'
        },
        {
            label: 'Link',
            name: 'url',
            type: 'string'
        }
    ]
}
