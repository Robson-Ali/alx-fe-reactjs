import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css'; // Assuming you kept the basic Vite CSS

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1>User Registration Form Comparison</h1>
      
      {/* Step 2: Controlled Component Implementation */}
      <RegistrationForm />
      
      <hr style={{ margin: '40px 0', borderTop: '3px dashed #eee', width: '50%', margin: '40px auto' }} />

      {/* Step 3: Formik Implementation */}
      <FormikForm />
    </div>
  );
}

export default App;