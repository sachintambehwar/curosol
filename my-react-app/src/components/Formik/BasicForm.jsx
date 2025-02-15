import { useFormik } from "formik";
import basicSchema from "./basicSchema";
import { Button, TextField, Grid, Typography } from "@mui/material";

const BasicForm = () => {
  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    isSubmitting,
    resetForm,
    ...rest
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(values, "values");
          resolve();
        }, 1000);
      });
      resetForm();
    },
  });
  console.log(rest, "values??");

  console.log(errors, "error");
  console.log(touched, "touched");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Formik For MUI</Typography>
      </Grid>
      <Grid item xs={6} md={8}>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            value={values.name}
            fullWidth
            label={touched && errors.name ? "Error" : "Name"}
            type="text"
            error={touched && errors.name}
            id="name"
            name="name"
            helperText={touched.name && errors.name ? "Incorrect entry." : ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            fullWidth
            label={touched.email && errors.email ? "Error" : "email"}
            value={values.email}
            error={touched.email && errors.email}
            type="email"
            id="email"
            name="email"
            helperText={
              touched?.email && errors.email ? "Enter valid email." : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            fullWidth
            label={touched?.password && errors.password ? "Error" : "password"}
            value={values.password}
            type="text"
            error={touched.password && errors.password}
            id="password"
            name="password"
            helperText={
              touched?.password && errors.password ? errors.password : ""
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            value={values.confirmPassword}
            type="text"
            fullWidth
            error={touched.confirmPassword && errors.confirmPassword}
            label={
              touched.confirmPassword && errors.confirmPassword
                ? "Error"
                : "confirmPassword"
            }
            helperText={
              touched?.confirmPassword && errors.confirmPassword
                ? errors.confirmPassword
                : ""
            }
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Button disabled={isSubmitting} variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
export default BasicForm;
