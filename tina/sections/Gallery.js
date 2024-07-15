import {tinaField} from 'tinacms/dist/react'

const Gallery = {
    props: {
        label: 'Gallery',
        name: 'Gallery',
        ui: {
            itemProps: item => {
                return {label: item.sectionName}
            }
        },
        fields: [
            {
                type: 'string',
                name: 'sectionName',
                label: 'Section Name'
            },
            {
                type: 'object',
                name: 'imageSection',
                label: 'Image',
                list: true,
                templates: [
                    {
                        label: 'image',
                        name: 'image',
                        ui: {
                            itemProps: item => {
                                return {label: item.alt}
                            }
                        },
                        fields: [
                            {
                                type: 'image',
                                name: 'image',
                                label: 'Image'
                            },
                            {
                                name: 'alt',
                                label: 'Alt Text',
                                component: 'text',
                                type: 'string'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    template: fields => (
        <div className='section-box mt-100'>
            {fields?.imageSection && (
                <div className='container'>
                    <div className='row'>
                        {fields?.imageSection[0] && (
                            <div className='col-lg-7'>
                                <img
                                    src={fields?.imageSection[0]?.image}
                                    alt={fields?.imageSection[0]?.alt}
                                    data-tina-field={tinaField(fields?.imageSection[0], 'alt')}
                                />
                            </div>
                        )}
                        {fields?.imageSection[1] && (
                            <div className='col-lg-5'>
                                <img
                                    src={fields?.imageSection[1]?.image}
                                    alt={fields?.imageSection[1]?.alt}
                                    data-tina-field={tinaField(fields?.imageSection[1], 'alt')}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gallery
