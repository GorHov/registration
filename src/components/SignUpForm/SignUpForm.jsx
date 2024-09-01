import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import AuthBox from "../AuthBox";
import useFormValidation from "../../hooks/useFormValidation";
import { validateSignUp } from "../../utils/validate";
import { registerUser } from "../../api/apiService";
import TextInput from "../TextInput";
import PasswordInput from "../PasswordInput";
import SelectInput from "../SelectInput";
import AutocompleteInput from "../AutocompleteInput";

function SignUpForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormValidation(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      region: "",
      city: "",
      school: "",
      subject: "",
      grade: [],
      password: "",
      confirmPassword: "",
    },
    validateSignUp
  );

  const regions = ["North", "South", "East", "West"];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston"];
  const schools = ["School A", "School B", "School C"];
  const subjects = ["Math", "Science", "English", "History"];
  const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4"];

  const handleCityChange = (event, newValue) => {
    handleChange({ target: { name: "city", value: newValue } });
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(async () => {
      try {
        const data = await registerUser(values);
        console.log("User registered:", data);
        navigate("/signin");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    });
  };

  return (
    <AuthBox title={t("sign_up")}>
      <Typography variant="body1" gutterBottom>
        {t("quick_and_easy")}
      </Typography>
      <form onSubmit={handleFormSubmit} noValidate>
        <Box mb={2} display="flex" gap={2}>
          <TextInput
            name="firstName"
            label={t("first_name")}
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <TextInput
            name="lastName"
            label={t("last_name")}
            value={values.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </Box>
        <Box mb={2}>
          <TextInput
            name="email"
            label={t("email")}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
        </Box>
        <Box mb={2}>
          <TextInput
            name="phone"
            label={t("phone")}
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder='+37499999999'
          />
        </Box>
        <Box mb={2}>
          <SelectInput
            name="region"
            value={values.region}
            onChange={handleChange}
            options={regions}
            error={errors.region}
            label={errors.region || t("region")}
          />
        </Box>
        <Box mb={2}>
          <AutocompleteInput
            name="city"
            value={values.city}
            onChange={handleCityChange}
            options={cities}
            error={errors.city}
            label={t("city_village")}
          />
        </Box>
        <Box mb={2}>
          <SelectInput
            name="school"
            value={values.school}
            onChange={handleChange}
            options={schools}
            error={errors.school}
            label={errors.school || t("school")}
          />
        </Box>
        <Box mb={2}>
          <SelectInput
            name="subject"
            value={values.subject}
            onChange={handleChange}
            options={subjects}
            error={errors.subject}
            label={errors.subject || t("subject")}
          />
        </Box>
        <Box mb={2}>
          <SelectInput
            name="grade"
            value={values.grade}
            onChange={handleChange}
            options={grades}
            error={errors.grade}
            label={errors.grade || t("grade")}
            multiselect
          />
        </Box>
        <Box mb={2}>
          <PasswordInput
            name={t("password")}
            value={values.password}
            onChange={handleChange}
            showPassword={showPassword}
            handleClickShowPassword={handleClickShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            label={t("password")}
            error={errors.password}
          />
        </Box>
        <Box mb={2}>
          <PasswordInput
            name={t("confirm_password")}
            value={values.confirmPassword}
            onChange={handleChange}
            showPassword={showConfirmPassword}
            handleClickShowPassword={handleClickShowConfirmPassword}
            handleMouseDownPassword={handleMouseDownPassword}
            label={t("confirm_password")}
            error={errors.confirmPassword}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={isSubmitting}
        >
          {t("sign_up")}
        </Button>
      </form>
    </AuthBox>
  );
}

export default SignUpForm;
