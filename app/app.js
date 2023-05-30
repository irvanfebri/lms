const express = require('express');
const morgan = require('morgan');
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//middleware 
app.use(morgan("dev"));


//routes 

// admin register 
app.use("/api/v1/admins/register", adminRouter);
app.use('/me', (req,res) => {
    res.json({
        msg: "i will always be called",
    });
});

// admin login
app.post("/api/v1/admins/login", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin has been login",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});

// get all admin
app.get("/api/v1/admins", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "All Admin",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});

// get single admin
app.get("/api/v1/admins/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Single Admins",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});

// update admin 
app.put("/api/v1/admins/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin has update",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});


//delete admin
app.delete("/api/v1/admins/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin has delete",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});


// admin suspending teacher 
app.put("/api/v1/admins/suspend/teacher/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin has suspend",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});

//admin unsuspending teacher 
app.put("/api/v1/admins/unsuspend/teacher/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin has unsuspend",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});


// admin withdrwaring teacher 
app.put("/api/v1/admins/withdraw/teacher/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin has withdraw",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});

// admin unwithdrwaring teacher 
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin has unwithdraw",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});

// admin publish exam result teacher 
app.put("/api/v1/admins/publish/exam/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin publish exam",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});

// admin unpublish exam result teacher 
app.put("/api/v1/admins/unpublish/exam/:id", (req,res ) => { 
    try {
        res.status(201).json({ 
            status: "success",
            data: "Admin unpublish exam",
        });
    } catch (error) { 
        res.json({
            status: "failed",
            error: error.message,
});
    }
});



module.exports = app;
