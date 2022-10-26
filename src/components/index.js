import Navbar from './nav';
import Hooks from './hooks/index';
import { Container } from 'react-bootstrap';

export default function index() {
  return (
    <div>
      <div>
        <Navbar />
        <Container className="mt-3">
          <Hooks />
        </Container>
      </div>
    </div>
  );
}

// export default class index extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Container className="mt-3">
//           <Hooks />
//         </Container>
//       </div>
//     );
//   }
// }
