import express from "express";

import portsRouter from "./routes/ports.routes.js";

const app=express();
const PORT= 3000;
app.use(express.json());



app.get("/",(req,res)=>{
    res.json({message: "Port API running"});
});

app.use((req, res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
app.use("/port",portsRouter);

// export const getAllPorts=(req,res)=>{
//     ok(res, { ports });
// };

//404 catch all

app.use((req,res)=>{
    res.status(404).json({success:false,error:"route not found"});
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});