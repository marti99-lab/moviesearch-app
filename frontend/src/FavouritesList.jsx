import FavouriteMovie from './FavouriteMovie'

function FavouritesList(props){
    return (
        <div>
            <h3>
                {props.favourites.map(movie => (
                    <FavouriteMovie movie={movie}/>
                ))}
            </h3>
        </div>
    )
}

export default FavouritesList