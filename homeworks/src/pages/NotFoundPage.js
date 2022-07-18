import {connect} from "react-redux";
import {useEffect} from "react";

function NotFoundPageForConnect({selectedSchool, dispatch}) {
  useEffect(() => {
    dispatch({type: "LOL", payload: "kek"});
  }, [dispatch]);

  return (
    <>
      <h1>404: Page Not Found</h1>
      <p>{selectedSchool.name}</p>
    </>
  );
}

const mapStateToProps = (state) => ({selectedSchool: state.selectedSchool});
export const NotFoundPage = connect(mapStateToProps)(NotFoundPageForConnect);
