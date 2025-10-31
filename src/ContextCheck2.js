import { createContext, useCallback, useContext, useMemo } from "react";

const arrayObj = [
  {
    name: "abc",
    age: 20,
    location: "Delhi",
  },
  {
    name: "xyz",
    age: 30,
    location: "Mumbai",
  },
  {
    name: "RTS",
    age: 60,
    location: "Kolkata",
  },
  {
    name: "ope",
    age: 10,
    location: "Chennai",
  },
];

const MyContext = createContext();

const ContextCheck2 = () => {
  const memorisedData = useMemo(() => arrayObj, []);

  return (
    <MyContext.Provider value={memorisedData}>
      <Listing
      // data={arrayObj}
      />
    </MyContext.Provider>
  );
};

const Listing = (props) => {
  const data = useContext(MyContext);
  // const { data } = props;
  const headings = useMemo(() => {
    return data.length === 0 ? [] : Object.keys(data[0]);
  }, [data]);

  const renderRow = useCallback((item, index) => {
    return (
      <tr key={index}>
        <td>{item.age}</td>
        <td>{item.name}</td>
        <td>{item.location}</td>
      </tr>
    );
  }, []);

  return (
    <div>
      <table width="100%" border="1" cellPadding="5">
        <tr>
          {headings.map((heading) => {
            return <th key={heading}>{heading}</th>;
          })}
        </tr>
        {data.map(renderRow)}
      </table>
    </div>
  );
};

export default ContextCheck2;
