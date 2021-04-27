import React, { useState } from 'react'; //!
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function RegisterViz() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const updateName = e => {
    setName(e.target.value);
  };
  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
  };
  return (
    <section>
      <h1>Register page</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={updateName} />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
          />
        </label>
        <button type="submit">Join</button>
      </form>
    </section>
  );
}
// class RegisterViz extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onRegister(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };
//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <section>
//         <h1>Register page</h1>
//         <form onSubmit={this.handleSubmit} autoComplete="off">
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             E-mail:
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>
//           <label>
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Join</button>
//         </form>
//       </section>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterViz);
