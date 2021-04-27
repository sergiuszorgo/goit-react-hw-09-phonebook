import React, { useState } from 'react'; //!
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function LoginViz() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const updatePassword = e => {
    setPassword(e.target.value);
  };

  const handleSumbit = e => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
  };
  return (
    <section>
      <h1>Login page</h1>
      <form onSubmit={handleSumbit}>
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
        <button type="submit" className="formBtn">
          Login
        </button>
      </form>
    </section>
  );
}

// class LoginViz extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSumbit = e => {
//     e.preventDefault();
//     this.props.onLogin(this.state);
//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <section>
//         <h1>Login page</h1>
//         <form onSubmit={this.handleSumbit}>
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
//           <button type="submit" className="formBtn">
//             Login
//           </button>
//         </form>
//       </section>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginViz);
