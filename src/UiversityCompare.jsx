import { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid2,Grid,
  
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from "@mui/material";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function UniversityCompare() {
  //   const [universities, setUniversities] = useState([]);
  const [selectedUni1, setSelectedUni1] = useState("");
  const [selectedUni2, setSelectedUni2] = useState("");
  const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

  // Fetch mock university API
  //   useEffect(() => {
  //     setLoading(true);
  //     axios.get("https://api.example.com/universities")
  //       .then(response => {
  //         setUniversities(response.data);
  //         setLoading(false);
  //       }).catch(error => {
  //         console.error("Error fetching data: ", error);
  //         setLoading(false);
  //       });
  //   }, []);

  const universities = [
    {
      name: "University A",
      tuition: 30000,
      ranking: 10,
      satisfaction: 85,
      location: 90,
    },
    {
      name: "University B",
      tuition: 25000,
      ranking: 20,
      satisfaction: 78,
      location: 85,
    },
    {
      name: "University C",
      tuition: 35000,
      ranking: 5,
      satisfaction: 92,
      location: 88,
    },
    {
      name: "University D",
      tuition: 20000,
      ranking: 50,
      satisfaction: 80,
      location: 82,
    },
  ];

  // Handle comparison
  const handleCompare = () => {
    const uni1Data = universities.find((uni) => uni.name === selectedUni1);
    const uni2Data = universities.find((uni) => uni.name === selectedUni2);
    if (uni1Data && uni2Data) {
      setData([
        
        {
          KPI: "Ranking",
          "University 1": uni1Data.ranking,
          "University 2": uni2Data.ranking,
        },
        {
          KPI: "Student Satisfaction",
          "University 1": uni1Data.satisfaction,
          "University 2": uni2Data.satisfaction,
        },
        {
          KPI: "Location",
          "University 1": uni1Data.location,
          "University 2": uni2Data.location,
        },
      ]);
    //   console.log(data);
      
    } else {
      alert("Please select two universities to compare.");
    }
  };

  return (
    <>
      <Grid container spacing={3} sx={{ marginTop: '1.5rem' }}>
        
      <Grid 
  container 
  spacing={3} 
  sx={{ marginTop: '1.5rem',marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

  {/* University 1 Dropdown */}
  <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
    <FormControl sx={{ width: '10rem', padding: '8px' }}>
      <InputLabel>University 1</InputLabel>
      <Select
        value={selectedUni1}
        onChange={(e) => setSelectedUni1(e.target.value)}
      >
        {universities.map((uni, index) => (
          <MenuItem key={index} value={uni.name}>
            {uni.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>

  {/* University 2 Dropdown */}
  <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
    <FormControl sx={{ width: '10rem', padding: '8px' }}>
      <InputLabel>University 2</InputLabel>
      <Select
        value={selectedUni2}
        onChange={(e) => setSelectedUni2(e.target.value)}
      >
        {universities.map((uni, index) => (
          <MenuItem key={index} value={uni.name}>
            {uni.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>

</Grid>

        <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
        
          <Button
            variant="contained"
            color="primary"
            onClick={handleCompare}
            sx={{
              
              padding: '10px 20px',
            }}
          >
            Compare
          </Button>
        </div>

        {/* Table for Metric Comparison */}
        <Grid item xs={12} sx={{ margin: '20px' }}>
          <TableContainer component={Paper} sx={{width:"100%"}}>
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell>KPI</TableCell>
                  <TableCell>University 1</TableCell>
                  <TableCell>University 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.KPI}</TableCell>
                    <TableCell>{row['University 1']}</TableCell>
                    <TableCell>{row['University 2']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Chart for Visual Comparison */}
        {data.length > 0 && (
           
          <Grid item xs={12} sx={{ margin: '20px',width:"250px" }}>
            <ResponsiveContainer  height={400}   style={{ backgroundColor: 'white',width:"100%" }}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="KPI" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="University 1" fill="#8884d8" />
                <Bar dataKey="University 2" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>
          
        )}
      </Grid>
        </>
  );
}

export default UniversityCompare;
