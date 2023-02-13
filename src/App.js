//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const contacts = [
 {
  id: "1",
  name:"Pallavi 1",
  mail:"tt@gg.com"
},
{
  id: "2",
  name:"Pallavi 2",
  mail:"tt@gg.com"
},
{
  id: "3",
  name:"Pallavi 3",
  mail:"tt@gg.com"
},
{
  id: "4",
  name:"Pallavi 4",
  mail:"tt@gg.com"
}]

function App() {
  return (
    <div className="ui container">
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
