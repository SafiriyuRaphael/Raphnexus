

const Loader = () => {
  // const [dots, setDots] = useState(".");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDots((prev) => (prev.length < 3 ? prev + "." : "."));
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex items-center justify-center  text-amber-400">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      
      </div>
    </div>
  );
};

export default Loader;