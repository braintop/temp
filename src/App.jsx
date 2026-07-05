import Counter from './Counter';
import StatusBadge from './StatusBadge';
import Notification from './Notification';
function App() {
  const items = [
    <li key="1">Apple</li>,
    <li key="2">Banana</li>,
    <li key="3">Cherry</li>
  ]
  const fruits = ['Apple', 'Banana', 'Cherry']

  return (
    <>
      <h1>Hello World</h1>
      <Counter initialCount={0} />
      <StatusBadge initialIsOnline={true} />
      <Notification initialCount={0} />

      <ol>{items}</ol>
      <ul>{fruits.map((fruit,index) => <li  key={index} style={{ color: 'red', fontWeight: 'bold' }}>{fruit}</li>)}</ul>
    </>
  )
}

export default App
