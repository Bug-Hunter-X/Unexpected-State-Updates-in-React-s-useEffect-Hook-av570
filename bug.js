```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // This will overwrite the previous update
  }, []);

  return <div>Count: {count}</div>;
}
```