import './main.css';

const movie = { "Poster": "N/A", "Title": "Spiderman", "Type": "movie", "Year": "2010", "imdbID": "tt1785572"};

const {Poster, Title, Type, Year, imdbID, NotFound} = {...movie, NotFound: 'https://via.placeholder.com/400'};

const IMG_STYLES = { width: "auto", maxWidth: "100%", height: "auto", borderRadius: "2vw" };
const H5_STYLES = { textAlign: "center"};

export default function Main() {
    return (
        <div className="main">
            <div className="card text-white bg-secondary" style={IMG_STYLES}>
                <div className="card-body">
                    <h5 className="card-title" style={H5_STYLES}>{Title} ({Year})</h5>
                </div>
                <img className="card-img-top" src={Poster === 'N/A' ? NotFound : Poster} alt={Title}></img>
                <div className="card-body">
                    <h5 className="card-title" style={H5_STYLES}>{Type}</h5>
                </div>
            </div>
        </div>
    );
}