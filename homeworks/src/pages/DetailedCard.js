import {useParams} from "react-router-dom";

export function DetailedCard() {
  const params = useParams();
  console.log(params);
  return (<>
      <h1>Contact Name</h1>
      <p>ID: {params.id}</p>
      <p>Contact username</p>
      <p>Contact phone</p>
    </>);
}
