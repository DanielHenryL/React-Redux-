import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle,name}) => {

    return (
    <>
    <h1>{ title }</h1>
    <h2>{ subTitle + 150}</h2>
    <h2>{ name}</h2>
    {/* <div>{JSON.stringify(newMessage)}</div> */}

    <p>Soy un texto</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}
FirstApp.defaultProps = {
    title:'No hay titulo',
    subTitle:'No hay subtitle',
    name:'Daniel lagunas'
}