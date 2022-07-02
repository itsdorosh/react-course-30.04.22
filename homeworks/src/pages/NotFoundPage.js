import {connect} from "react-redux";

function NotFoundPageForConnect({selectedSchool}) {
  return (
    <>
      <h1>404: Page Not Found</h1>
      <p>{selectedSchool.name}</p>
    </>
  );
}

const mapStateToProps = (state) => ({selectedSchool: state.selectedSchool});
export const NotFoundPage = connect(mapStateToProps)(NotFoundPageForConnect);
