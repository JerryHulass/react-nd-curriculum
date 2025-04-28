import { useDispatch, useSelector } from "react-redux";
import { toggleView, toggleUnits } from "../slices/preferencesSlice";

function Preferences() {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.preferences.view);
  const units = useSelector((state) => state.preferences.units);

  function handleToggleView() {
    dispatch(toggleView());
  }

  function handleToggleUnits() {
    dispatch(toggleUnits());
  }

  return (
    <div>
      <button onClick={handleToggleView}>
        Switch to {view === "list" ? "Grid" : "List"} View
      </button>

      <button onClick={handleToggleUnits}>
        Switch to {units === "metric" ? "Imperial" : "Metric"} Units
      </button>
    </div>
  );
}

export default Preferences;
