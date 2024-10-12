import Main from '../../pages/main/main';

interface AppProps {
  placesStayCount: number;
}

function App(props: AppProps) {
  return (
    <Main placesStayCount={props.placesStayCount}/>
  );
}

export default App;
