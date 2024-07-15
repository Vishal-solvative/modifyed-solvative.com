//React component to render individual sections

import SectionsObject from './sections'

const RenderSection = ({section}) => {
    const getUpperCase = name => String(name).toUpperCase()

    const componentToRender = Object.keys(SectionsObject).find(name =>
        getUpperCase(section.__typename).endsWith(getUpperCase(name))
    )

    if (!componentToRender) {
        console.error('COMPONENT NOT FOUND TO RENDER', section)
        return <></>
    }

    const component = SectionsObject[componentToRender]

    return component.template(section)
}

const RenderSections = ({sections = []}) => {
    return sections?.map(section => <RenderSection section={section} key={section.__typename} />)
}

export default RenderSections
