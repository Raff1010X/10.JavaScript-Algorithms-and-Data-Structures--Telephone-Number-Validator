class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.telephoneCheck = this.telephoneCheck.bind(this);
  }

  componentDidMount() {
   this.setState({
      input: "1 245-678-9101",
      output: this.telephoneCheck("1 235-678-9101")
    });
  }

telephoneCheck(str) {
  let regex = /^(|1)(|\s)((\d{3})|([(]\d{3}[)])|(\s[(]\d{3}[)]\s)|((\d{3}\s)|(\d{3}-)))(\d{3})(|-|\s)(\d{4}$)/g;
  if (regex.test(str)) return "Valid telephone number.";
  return "Not valid telephone number.";
}

  handleChange(e) {
    this.setState({
      input: e.target.value,
      output: this.telephoneCheck(e.target.value)
    });
  }

  render() {
    return (
      <div id="app">
        <h1>Telephone Number Validator</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        ></input>
        <div id="output">{this.state.output}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
