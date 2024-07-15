import {tinaField} from 'tinacms/dist/react'
import Link from 'next/link'
import {LinkTemp} from '../GlobalTemplates/LinkTemp'

const GetStarted = {
    props: {
        label: 'Get Started',
        name: 'GetStarted',
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
                type: 'string',
                name: 'heading',
                label: 'Heading',
                required: true
            },
            {
                type: 'string',
                name: 'subHeading',
                label: 'Sub Heading',
                required: true
            },
            LinkTemp
        ]
    },

    template: fields => (
        <div className='section-box'>
            <div className='banner-hero banner-homepage6'>
                <div className='container mt-40'>
                    <div className='row'>
                        <div className='col-lg-6 mt-30'>
                            <h1 className='text-display-4' data-tina-field={tinaField(fields, 'heading')}>
                                {fields.heading}
                            </h1>
                            <div className='list-social-banner d-none'>
                                <Link href='#' legacyBehavior>
                                    <a className='social-banner facebook hover-up'></a>
                                </Link>

                                <Link href='#' legacyBehavior>
                                    <a className='social-banner instagram hover-up'></a>
                                </Link>

                                <Link href='#' legacyBehavior>
                                    <a className='social-banner twitter hover-up'></a>
                                </Link>

                                <Link href='#' legacyBehavior>
                                    <a className='social-banner linkedin hover-up'></a>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-5 offset-xl-1 mt-30'>
                            <p
                                className='text-body-lead-large color-gray-500'
                                data-tina-field={tinaField(fields, 'subHeading')}
                            >
                                {fields.subHeading}
                            </p>
                            <div className='mt-40'>
                                {fields?.link && (
                                    <Link href={fields?.link?.url} legacyBehavior>
                                        <a
                                            className={`btn btn-black shape-square ${
                                                fields?.link?.icon && 'icon-arrow-right-white'
                                            }`}
                                            data-tina-field={tinaField(fields?.link, 'text')}
                                        >
                                            {fields?.link?.text}
                                        </a>
                                    </Link>
                                )}

                                <Link href='#' legacyBehavior>
                                    <a className='btn btn-link icon-triangle color-gray-900 ml-40'>How it works</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted
