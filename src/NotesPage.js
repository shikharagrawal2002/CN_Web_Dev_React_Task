import { useState } from "react";
import Logo from "./undraw_file_searching_re_3evy.svg";

const NotesPage = () => {

  const Semesters = [
    { id: 'Semester 1', Subjects: [{id : 'Semiconductor', notes: [{id: 'Module1 ',name: 'Module 1',author: 'Shikhar',date: '20th January 2022'},{id: 'Module1 ',name: 'Module 1',author: 'Shikhar',date: '20th January 2022'},{id: 'Module1 ',name: 'Module 1',author: 'Shikhar',date: '20th January 2022'},{id: 'Module1 ',name: 'Module 1',author: 'Shikhar',date: '20th January 2022'},{id: 'Module1 ',name: 'Module 1',author: 'Shikhar',date: '20th January 2022'},{id: 'Module1 ',name: 'Module 1',author: 'Shikhar',date: '20th January 2022'}]}] },
    { id: 'Semester 2', Subjects: [{id : 'BEEE', notes: [{id: 'Module 1',name: 'Module 2',author: 'Shikhar',date: '20th January 2022'},{id: 'Module 1',name: 'Module 2',author: 'Shikhar',date: '20th January 2022'},{id: 'Module 1',name: 'Module 2',author: 'Shikhar',date: '20th January 2022'},{id: 'Module 1',name: 'Module 2',author: 'Shikhar',date: '20th January 2022'}]}] },
    { id: 'Semester 3', Subjects: [{id : 'Chemistry', notes: [{id: 'Module 1',name: 'Module 3',author: 'Shikhar',date: '20th January 2022'}]}] },
    { id: 'Semester 4', Subjects: [{id : 'Maths', notes: [{id: 'Module 1',name: 'Module 4',author: 'Shikhar',date: '20th January 2022'}]}] },
];

  const [showdata,setShowData] = useState(false);
  const [subject1,setSubject] = useState('');
  const [semester1,setSemester] = useState('');

  const showData = () => (
    setShowData(true)
  ) 

  const onChangeSemester = () => {
    var select2 = document.getElementById('semesters');
    var optionSem = select2.options[select2.selectedIndex].value;
    setSemester(optionSem)
  }

  const onChangeSubject = () => {
    var select = document.getElementById('subjects');
    var optionSub = select.options[select.selectedIndex].value;
    setSubject(optionSub);
  }

  const DisplayData = () => (<div className="container">{  
    Semesters.filter(semester => semester.id === semester1)
    .map(semester => (
      semester.Subjects.filter(subject => subject.id === subject1)
      .map(subject =>(
        subject.notes.map(note => 
          (
          <div className="card">
            <h1>{note.name}</h1>
            <p>{note.author}</p>
            <p2>{note.date}</p2>  
          </div>
          )))))

        )
    }</div>
    );
  
return (
    <div className = "notesPage">

      <div className = "text">
        <h1>NOTES</h1>
      </div>

      <div className = "searchBar">
        <form method="get" className="formDisp">
          <label htmlFor="header-search">
              <span className="visually-hidden">Search Topic</span>
          </label>

          <select name="subjects" id="subjects" className="dropdown" onChange={onChangeSubject}>
            <option value="" hidden selected>Subject</option>
            <option value="Semiconductor" className="displaytext">Semiconductor</option>
            <option value="BEEE" className="displaytext">BEEE</option>
          </select>

          <select name="semesters" id="semesters" className="dropdown" onChange={onChangeSemester}>
            <option value="" hidden selected>Semester</option>
            <option value="Semester 1" className="displaytext">Semester 1</option>
            <option value="Semester 2" className="displaytext">Semester 2</option>
          </select>

          <button type="button" value="Search" className="search" onClick={showData}>Search</button>
        </form>
      </div>

      <div className="container">
        {showdata ? <DisplayData/> : 
        <div className="logo">
          <img src={Logo} alt="Searching" className="logo"/>
        </div>}
      </div>

    </div>
  );
};

export default NotesPage;
