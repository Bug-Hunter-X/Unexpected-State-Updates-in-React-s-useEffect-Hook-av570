```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic to update count
    setCount(prevCount => prevCount + 2); 
  }, []);

  return <div>Count: {count}</div>;
}
```