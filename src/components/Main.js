import Hello from "./Hello"

function Header() {
  // Melakukan destructing props (object)
  return (
    <div className="main">
        <p>learn react</p>
        <Hello name="Aufa"/>
        <Hello name="Yazid"/>
        <Hello name="Ilyas"/>
        <Hello name="Ahmad"/>
        <Hello name="Ujang"/>
    </div>
  );
}

export default Header;
