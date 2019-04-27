class Image extends React.Component {
  render () {
    return (
      <main>
        <h1> This page is </h1>
        <img src={this.props.underconstruction} alt='Under Construction' />
        <h1> to be the best "Disney" Site on the web </h1>
        <div>
          <img src={this.props.gifsource} />
        </div>
        <table>
          {pictures.map((p) => (
            <tr>
              <th><img src={p.source} alt={p.caption} /></th>
              <th><figcaption>{p.caption}</figcaption></th>
            </tr>
          ))}
        </table>
      </main>
    )
  }
}

var pictures = [
  {
    source: 'http://images6.fanpop.com/image/photos/34300000/jasmine-s-nude-look-disney-princess-34327810-500-373.jpg',
    caption: 'Jasmine'
  },
  {
    source: 'http://images5.fanpop.com/image/photos/24900000/Rapunzel-bare-feet-disney-princess-24999204-408-495.jpg',
    caption: 'Rapunzel'
  },
  {
    source: 'http://images5.fanpop.com/image/photos/31800000/Princess-Belle-disney-princess-31869856-399-500.jpg',
    caption: 'Belle'
  },
  {
    source: 'http://images6.fanpop.com/image/photos/36500000/Disney-Princess-image-disney-princess-36539534-500-500.jpg',
    caption: 'Elsa'
  },
  {
    source: 'http://images6.fanpop.com/image/photos/35100000/Cinderella-wearing-tiara-disney-princess-35128078-411-500.jpg',
    caption: 'Cinderella'
  }
]

ReactDOM.render(
  <Image
    underconstruction='https://images-na.ssl-images-amazon.com/images/I/51bHBllp1yL._SX425_.jpg'
    gifsource='https://www.hover.com/wp-content/uploads/2014/09/gif-5.gif'
    pictures={pictures}
  />,
  document.getElementById('container')
)
