import CharacterDisplay from "./CharacterDisplay";
const SavedList = (props) => {
  return props.list.map((item) => {
    return <CharacterDisplay info={item} />;
  });
};
export default SavedList;
