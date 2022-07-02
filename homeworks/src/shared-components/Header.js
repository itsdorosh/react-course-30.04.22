import {connect} from "react-redux";
import {setLoadingActionCreator, setPhotosActionCreator} from '../store';

function HeaderForConnect({selectedSchool, isLoading, dispatch}) {


  const loadPhotosThunk = (data) => {
    return (dispatch1) => {
      dispatch1(setLoadingActionCreator(true));

      fetch("https://jsonplaceholder.typicode.com/posts", {body: JSON.stringify(data)})
        .then((res) => res.json())
        .then((data) => {
          dispatch1(setLoadingActionCreator(false));
          dispatch1(setPhotosActionCreator(data));
        });
    };
  };

  // -----------------------------------

  const loadPhotos = () => {
    dispatch(loadPhotosThunk());
  };

  return (<div className="header">
      <div className="hero">
        <h1>{selectedSchool.name}</h1>
        <p>{selectedSchool.description}</p>
      </div>
      <a className="gh-link" href="https://github.com/itsdorosh">my GitHub account</a>
      {isLoading ? <span>🦜 please wait... 🦜</span> : <></>}
      <button onClick={() => loadPhotos()}>Load Photos</button>
    </div>);
}

const mapStateToProps = ({selectedSchool, isLoading}) => ({selectedSchool, isLoading});

export const Header = connect(mapStateToProps)(HeaderForConnect);
