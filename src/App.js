import {Component} from 'react'
import logo from './logo.svg';
import './App.css';
 
class FormEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      editFirstName: '',
      editLastName: '',
      firstName: '',
      lastName: ''
    }

    this.handleCancel = this.handleCancel.bind(this) 
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  handleText(e) {
    const key = e.target.name,
          value = e.target.value
    this.setState({
      [key]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      editing: false,
      firstName: this.state.editFirstName,
      lastName: this.state.editLastName
    })
  }

  handleEdit() {
    this.setState({ 
      editing: true, 
      editFirstName: this.state.firstName, 
      editLastName: this.state.lastName 
    })
  }

  handleCancel() {
    this.setState({ editing: false })
  }


  render () {
    return this.state.editing ? (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name: 
          <input type="text" name="editFirstName" value={this.state.editFirstName} onChange={this.handleText} />
        </label>
        <br/>
        <label>
          Last Name: 
          <input type="text" name="editLastName" value={this.state.editLastName} onChange={this.handleText} />
        </label>
        <br/>
        <input type="submit" value="Save" />
        <input type="button" value="Cancel" onClick={this.handleCancel} />

      </form>
    ) : (
      <div>
      <div>
        First Name: {this.state.firstName}
      </div>
      <div>
        Last Name: {this.state.lastName}
      </div>
      <button onClick={this.handleEdit}>Edit</button>
      </div>
    )
  }
}


function App() {
  return (
   <FormEdit />
  );
}

export default App;
