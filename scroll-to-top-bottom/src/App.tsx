import logo from "./logo.svg";
import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={scrollToTop} className="scroll-button top">
          Scroll to Top
        </button>
        <button onClick={scrollToBottom} className="scroll-button bottom">
          Scroll to Bottom
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
          vulputate dignissim suspendisse in est ante in nibh. Vestibulum lectus
          mauris ultrices eros in cursus. Elementum tempus egestas sed sed risus
          pretium quam vulputate. Scelerisque eu ultrices vitae auctor eu augue
          ut. In dictum non consectetur a erat nam. Diam volutpat commodo sed
          egestas egestas fringilla phasellus. Pharetra magna ac placerat
          vestibulum lectus mauris ultrices eros. Arcu odio ut sem nulla
          pharetra diam sit amet. Arcu dui vivamus arcu felis bibendum ut. Risus
          feugiat in ante metus dictum at tempor. Dignissim enim sit amet
          venenatis urna. Adipiscing at in tellus integer feugiat scelerisque.
          Turpis egestas integer eget aliquet nibh praesent tristique magna.
          Adipiscing enim eu turpis egestas pretium. Felis donec et odio
          pellentesque diam volutpat commodo sed egestas. Non diam phasellus
          vestibulum lorem sed risus ultricies tristique. Sit amet nulla
          facilisi morbi tempus iaculis urna id volutpat. Sem viverra aliquet
          eget sit amet tellus cras adipiscing enim. Praesent semper feugiat
          nibh sed pulvinar proin. Amet est placerat in egestas erat. Elementum
          nibh tellus molestie nunc non blandit. Justo nec ultrices dui sapien
          eget mi. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.
          Amet venenatis urna cursus eget nunc scelerisque viverra mauris in.
          Vulputate enim nulla aliquet porttitor lacus luctus. Dui ut ornare
          lectus sit amet est placerat in egestas. In nisl nisi scelerisque eu
          ultrices vitae auctor eu augue. Purus in mollis nunc sed id semper
          risus in hendrerit. In dictum non consectetur a. Bibendum enim
          facilisis gravida neque convallis a. Sit amet risus nullam eget felis
          eget. Ultrices neque ornare aenean euismod. Orci eu lobortis elementum
          nibh tellus molestie nunc. Donec pretium vulputate sapien nec sagittis
          aliquam. In fermentum et sollicitudin ac orci phasellus egestas tellus
          rutrum. Eu feugiat pretium nibh ipsum consequat nisl vel pretium
          lectus. Orci phasellus egestas tellus rutrum tellus pellentesque eu.
          Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
          Scelerisque eleifend donec pretium vulputate sapien nec sagittis
          aliquam. Amet nulla facilisi morbi tempus. Dignissim suspendisse in
          est ante in nibh mauris cursus. Morbi leo urna molestie at elementum
          eu facilisis sed. Sit amet mauris commodo quis imperdiet massa
          tincidunt nunc pulvinar. Neque volutpat ac tincidunt vitae semper quis
          lectus nulla at. Amet est placerat in egestas erat imperdiet. Quis
          eleifend quam adipiscing vitae proin sagittis nisl. Pellentesque sit
          amet porttitor eget dolor. Penatibus et magnis dis parturient montes
          nascetur ridiculus. Scelerisque viverra mauris in aliquam sem
          fringilla ut. Mauris commodo quis imperdiet massa tincidunt nunc.
          Vitae elementum curabitur vitae nunc sed. Urna nec tincidunt praesent
          semper. Quisque id diam vel quam elementum pulvinar etiam non. Netus
          et malesuada fames ac turpis egestas. Lobortis feugiat vivamus at
          augue. Aliquet lectus proin nibh nisl. Egestas congue quisque egestas
          diam in arcu. Pulvinar sapien et ligula ullamcorper. Viverra accumsan
          in nisl nisi scelerisque eu ultrices vitae auctor. Rhoncus aenean vel
          elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
          Rutrum quisque non tellus orci ac auctor augue. In nulla posuere
          sollicitudin aliquam ultrices sagittis orci a. In hac habitasse platea
          dictumst quisque sagittis purus sit amet. Sem integer vitae justo eget
          magna fermentum iaculis eu non. Vitae tortor condimentum lacinia quis
          vel eros. Aenean sed adipiscing diam donec adipiscing tristique risus.
          Velit egestas dui id ornare arcu odio ut sem nulla. In vitae turpis
          massa sed. Sagittis vitae et leo duis ut. Ut faucibus pulvinar
          elementum integer. Tortor posuere ac ut consequat. Tincidunt lobortis
          feugiat vivamus at augue eget arcu. Faucibus interdum posuere lorem
          ipsum dolor sit. Amet purus gravida quis blandit turpis cursus in hac
          habitasse. Aliquam sem et tortor consequat. Pharetra sit amet aliquam
          id. Orci nulla pellentesque dignissim enim. Amet mattis vulputate enim
          nulla. Enim tortor at auctor urna nunc id cursus. Congue quisque
          egestas diam in. Condimentum vitae sapien pellentesque habitant. Eget
          gravida cum sociis natoque penatibus et magnis. Amet dictum sit amet
          justo donec enim. Eget velit aliquet sagittis id. Convallis a cras
          semper auctor neque. Tempor commodo ullamcorper a lacus vestibulum
          sed. Purus in massa tempor nec feugiat nisl pretium fusce. Laoreet sit
          amet cursus sit amet. Nulla malesuada pellentesque elit eget gravida
          cum sociis natoque. Donec adipiscing tristique risus nec feugiat in
          fermentum. Non tellus orci ac auctor. Sed turpis tincidunt id aliquet
          risus. Neque egestas congue quisque egestas diam in. Vitae tortor
          condimentum lacinia quis vel. Nunc mattis enim ut tellus elementum
          sagittis vitae et leo. Fermentum et sollicitudin ac orci phasellus
          egestas tellus. Blandit massa enim nec dui nunc mattis enim. Ac tortor
          vitae purus faucibus ornare suspendisse sed. Viverra nam libero justo
          laoreet sit. Tincidunt eget nullam non nisi est sit amet facilisis
          magna. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero.
          Dignissim enim sit amet venenatis urna cursus eget. Malesuada fames ac
          turpis egestas maecenas pharetra convallis posuere morbi. Quam viverra
          orci sagittis eu volutpat odio facilisis mauris sit. Vel eros donec ac
          odio tempor orci dapibus. Velit sed ullamcorper morbi tincidunt ornare
          massa eget egestas purus. Cursus sit amet dictum sit amet justo. In
          hendrerit gravida rutrum quisque non tellus orci. Quam viverra orci
          sagittis eu volutpat. Natoque penatibus et magnis dis parturient. Elit
          scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
          tristique. Urna nunc id cursus metus. Ut tristique et egestas quis
          ipsum suspendisse ultrices. Eget magna fermentum iaculis eu non. Ipsum
          dolor sit amet consectetur adipiscing elit ut. Viverra nam libero
          justo laoreet. Sed adipiscing diam donec adipiscing tristique risus
          nec feugiat. Etiam non quam lacus suspendisse faucibus interdum
          posuere. Justo nec ultrices dui sapien eget mi. Vel orci porta non
          pulvinar neque laoreet suspendisse interdum consectetur. Duis ut diam
          quam nulla porttitor massa id neque. Turpis nunc eget lorem dolor sed
          viverra. Faucibus a pellentesque sit amet porttitor eget dolor.
          Ultricies leo integer malesuada nunc vel risus. Proin nibh nisl
          condimentum id venenatis a. Varius sit amet mattis vulputate enim
          nulla. Eget aliquet nibh praesent tristique magna sit amet purus
          gravida. Et malesuada fames ac turpis. Sit amet luctus venenatis
          lectus magna fringilla urna porttitor. Mollis aliquam ut porttitor leo
          a diam sollicitudin tempor id. Sagittis id consectetur purus ut
          faucibus pulvinar elementum. Adipiscing elit duis tristique
          sollicitudin. Quis eleifend quam adipiscing vitae proin sagittis nisl
          rhoncus mattis. Donec ultrices tincidunt arcu non sodales neque
          sodales ut. Nibh sit amet commodo nulla. Lacus vestibulum sed arcu non
          odio euismod lacinia. Non consectetur a erat nam at lectus.
          Suspendisse ultrices gravida dictum fusce ut. Adipiscing bibendum est
          ultricies integer quis auctor elit sed. Hac habitasse platea dictumst
          vestibulum rhoncus est pellentesque elit ullamcorper. Semper auctor
          neque vitae tempus quam pellentesque nec nam aliquam. Eget nunc
          lobortis mattis aliquam faucibus purus in massa tempor. Diam
          sollicitudin tempor id eu nisl nunc. Nulla aliquet porttitor lacus
          luctus accumsan tortor posuere ac. Suspendisse potenti nullam ac
          tortor vitae purus faucibus ornare suspendisse. Adipiscing bibendum
          est ultricies integer quis auctor elit sed vulputate. Odio ut enim
          blandit volutpat maecenas volutpat blandit aliquam. Libero id faucibus
          nisl tincidunt eget nullam non. Rutrum quisque non tellus orci ac
          auctor augue mauris. Sed viverra ipsum nunc aliquet bibendum. Feugiat
          in fermentum posuere urna nec. Faucibus scelerisque eleifend donec
          pretium vulputate sapien nec sagittis aliquam. Non curabitur gravida
          arcu ac tortor dignissim convallis aenean et. Adipiscing bibendum est
          ultricies integer. Turpis tincidunt id aliquet risus feugiat. Blandit
          libero volutpat sed cras ornare. Eleifend mi in nulla posuere
          sollicitudin aliquam ultrices sagittis orci. Sit amet mattis vulputate
          enim nulla aliquet porttitor lacus luctus. Nulla aliquet porttitor
          lacus luctus accumsan tortor posuere. Tempus imperdiet nulla malesuada
          pellentesque elit eget. Semper risus in hendrerit gravida rutrum
          quisque non tellus orci. Bibendum at varius vel pharetra vel turpis
          nunc eget. Placerat orci nulla pellentesque dignissim enim sit amet
          venenatis. Vulputate enim nulla aliquet porttitor lacus luctus
          accumsan. Fusce ut placerat orci nulla. Pellentesque elit eget gravida
          cum sociis natoque. Praesent tristique magna sit amet purus gravida
          quis blandit turpis. Placerat duis ultricies lacus sed turpis
          tincidunt id. Pharetra convallis posuere morbi leo urna molestie at.
          Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.
          Urna cursus eget nunc scelerisque viverra mauris in. Pharetra vel
          turpis nunc eget lorem dolor sed viverra ipsum. Et sollicitudin ac
          orci phasellus. In iaculis nunc sed augue lacus viverra. Dictum non
          consectetur a erat nam at lectus urna. Egestas sed tempus urna et
          pharetra pharetra massa. Eget nunc scelerisque viverra mauris in.
          Ridiculus mus mauris vitae ultricies leo integer malesuada. Urna
          cursus eget nunc scelerisque viverra mauris. Aliquam nulla facilisi
          cras fermentum odio eu feugiat pretium. Sed ullamcorper morbi
          tincidunt ornare massa. Nunc congue nisi vitae suscipit tellus mauris
          a diam maecenas. Faucibus vitae aliquet nec ullamcorper. Nibh tortor
          id aliquet lectus proin nibh nisl condimentum id. Purus ut faucibus
          pulvinar elementum integer enim neque volutpat. Arcu odio ut sem nulla
          pharetra. Facilisis gravida neque convallis a cras semper auctor
          neque. Aenean pharetra magna ac placerat vestibulum. Hendrerit dolor
          magna eget est lorem. Donec adipiscing tristique risus nec feugiat.
          Dui accumsan sit amet nulla facilisi morbi. Nec ullamcorper sit amet
          risus nullam eget. Magna ac placerat vestibulum lectus mauris. Lorem
          ipsum dolor sit amet consectetur adipiscing elit pellentesque
          habitant. Hendrerit gravida rutrum quisque non. A cras semper auctor
          neque vitae tempus quam pellentesque nec. Sit amet tellus cras
          adipiscing enim. Tellus cras adipiscing enim eu turpis egestas.
          Ullamcorper a lacus vestibulum sed arcu non. Augue mauris augue neque
          gravida in. Quis commodo odio aenean sed adipiscing diam donec.
          Tristique risus nec feugiat in fermentum posuere urna. Lectus nulla at
          volutpat diam ut venenatis tellus in metus. Accumsan tortor posuere ac
          ut consequat semper viverra nam. Bibendum at varius vel pharetra vel
          turpis nunc eget. Dui ut ornare lectus sit. Amet facilisis magna etiam
          tempor orci eu. Nec feugiat in fermentum posuere urna nec tincidunt
          praesent. Lectus urna duis convallis convallis tellus. Lacus sed
          viverra tellus in. Neque vitae tempus quam pellentesque nec. Bibendum
          at varius vel pharetra vel turpis. Dignissim enim sit amet venenatis.
          Lacus viverra vitae congue eu consequat ac. Etiam erat velit
          scelerisque in. Venenatis lectus magna fringilla urna porttitor
          rhoncus. Dapibus ultrices in iaculis nunc sed augue lacus viverra
          vitae. Pretium lectus quam id leo in vitae. Ut enim blandit volutpat
          maecenas volutpat blandit. Laoreet non curabitur gravida arcu ac
          tortor dignissim. In nulla posuere sollicitudin aliquam ultrices
          sagittis orci. Pellentesque massa placerat duis ultricies. Suspendisse
          in est ante in nibh mauris. Ac turpis egestas integer eget aliquet.
          Massa ultricies mi quis hendrerit dolor magna. Aliquam malesuada
          bibendum arcu vitae elementum curabitur vitae nunc sed. Tincidunt nunc
          pulvinar sapien et. Euismod nisi porta lorem mollis. Nisl nisi
          scelerisque eu ultrices. Elementum sagittis vitae et leo duis ut diam.
          Sapien nec sagittis aliquam malesuada bibendum. Amet consectetur
          adipiscing elit duis. Pellentesque dignissim enim sit amet venenatis
          urna cursus. Congue mauris rhoncus aenean vel. Egestas purus viverra
          accumsan in. Ipsum dolor sit amet consectetur adipiscing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
