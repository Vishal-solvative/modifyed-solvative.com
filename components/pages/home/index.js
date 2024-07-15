import React from 'react'
import {useTina, tinaField} from 'tinacms/dist/react'
import {TinaMarkdown} from 'tinacms/dist/rich-text'
import Layout from '../../layout/Layout'
import Link from 'next/link'
import {RenderSections} from '../../../tina/template'

const HomePageCom = props => {
    const {data} = useTina(props)
    const {home} = data
    const {section} = home
    return (
        <>
            <Layout>
                <div className='page-homepage7-bg'></div>
                <RenderSections sections={section} />

                <div className='section-box overflow-visible mb-50'>
                    <div className='container mt-100'>
                        <div className='row'>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-10'>
                                <div className='bg-6 box-newsletter position-relative'>
                                    <div className='row'>
                                        <div className='col-lg-5 col-md-7'>
                                            <span className='text-body-capitalized color-gray-500 text-uppercase'>
                                                newsletter
                                            </span>
                                            <h4 className='text-heading-2 mb-10 mt-10'>Subscribe our newsletter</h4>
                                            <p className='text-body-text color-gray-500'>
                                                By clicking the button, you are agreeing with our
                                            </p>
                                            <Link href='#' legacyBehavior>
                                                <a>Term and Conditions</a>
                                            </Link>

                                            <div className='box-form-newsletter mt-30'>
                                                <form className='form-newsletter'>
                                                    <input
                                                        className='input-newsletter'
                                                        value=''
                                                        placeholder='Enter you mail ..'
                                                    />
                                                    <button className='btn btn-send'></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className='col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end'>
                                            <div className='block-chart'>
                                                <img src='/assets/imgs/template/chart.png' alt='Agon' />
                                            </div>
                                            <img
                                                className='img-responsive img-newsletter'
                                                src='assets/imgs/page/homepage2/img-newsletter.png'
                                                alt='Agon'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-1'></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default HomePageCom
