import {tinaField} from 'tinacms/dist/react'

const Clients = {
    props: {
        label: 'Clients',
        name: 'Clients',
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
                name: 'actions',
                label: 'Actions',
                list: true,
                templates: [
                    {
                        label: 'Section',
                        name: 'section',
                        ui: {
                            itemProps: item => {
                                return {label: item.primary}
                            }
                        },
                        fields: [
                            {
                                type: 'string',
                                name: 'count',
                                label: 'count'
                            },
                            {
                                type: 'string',
                                name: 'primary',
                                label: 'primary text'
                            },
                            {
                                type: 'string',
                                name: 'secondary',
                                label: 'secondary text'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    template: fields => (
        <div className='section-box mt-100'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        <div className='pb-20 text-mb-center'>
                            <div className='row'>
                                {fields?.actions?.map((section, index) => (
                                    <div key={index} className='col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center'>
                                        <span className='text-display-3 color-green-900'>
                                            <span className='count' data-tina-field={tinaField(section, 'count')}>
                                                {section.count}
                                            </span>
                                        </span>
                                        <div
                                            className='text-body-quote'
                                            data-tina-field={tinaField(section, 'primary')}
                                        >
                                            {section.primary}
                                        </div>
                                        <p
                                            className='text-body-text color-gray-500 mt-10'
                                            data-tina-field={tinaField(section, 'secondary')}
                                        >
                                            {section.secondary}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Clients
