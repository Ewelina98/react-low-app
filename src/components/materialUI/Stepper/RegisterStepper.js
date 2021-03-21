import React, { useState, useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { StepperFinishHintView } from "./StepperFinishHintView";
import { useStyles } from "./StepperStyles";
import { StepperActions } from "./StepperActions";
import {
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import { fetchAllCountries } from "services/fetchCountries";

export function RegisterStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");
  const [value8, setValue8] = useState("");
  const [value9, setValue9] = useState("");
  const [value10, setValue10] = useState("");

  const [value11, setValue11] = useState("");
  const [value12, setValue12] = useState("");
  const [value13, setValue13] = useState("");
  const [value14, setValue14] = useState("");
  const [value15, setValue15] = useState("");

  const [value16, setValue16] = useState("");
  const [value17, setValue17] = useState("");
  const [value18, setValue18] = useState("");
  const [value19, setValue19] = useState("");
  const [value20, setValue20] = useState("");

  const [value21, setValue21] = useState("");
  const [value22, setValue22] = useState("");
  const [value23, setValue23] = useState("");

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("Polska");

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries().subscribe((data) => {
      setCountries(data);
    });
  }, [fetchAllCountries]);

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <TextField
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              placeholder="Username"
              required
            />
            <TextField
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className={classes.input}
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              placeholder="Email"
              required
            />
            <TextField
              value={value3}
              onChange={(e) => setValue3(e.target.value)}
              className={classes.input}
              type="password"
              id="outlined-basic"
              label="Hasło"
              variant="outlined"
              placeholder="Hasło"
              required
            />
            <TextField
              value={value4}
              onChange={(e) => setValue4(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Nazwa zamawiającego"
              variant="outlined"
              placeholder="Nazwa zamawiającego"
              required
            />
            <TextField
              value={value5}
              onChange={(e) => setValue5(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Oddział Zamawiającego"
              variant="outlined"
              placeholder="Oddział Zamawiającego"
              required
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              value={value6}
              onChange={(e) => setValue6(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Adres ulica"
              variant="outlined"
              placeholder="Adres ulica"
              required
            />
            <TextField
              value={value7}
              onChange={(e) => setValue7(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Adres nr domu"
              variant="outlined"
              placeholder="Adres nr domu"
              required
            />
            <TextField
              value={value8}
              onChange={(e) => setValue8(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Adres kod pocztowy"
              variant="outlined"
              placeholder="Adres kod pocztowy"
              required
            />
            <TextField
              value={value9}
              onChange={(e) => setValue9(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Adres miejscowość"
              variant="outlined"
              placeholder=""
              required
            />
            <SelectInput
              label={"Wojewodztwa"}
              current={selectedRegion}
              options={regions}
              onSelect={setSelectedRegion}
            />
          </>
        );
      case 2:
        return (
          <>
            <TextField
              value={value10}
              onChange={(e) => setValue10(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Kod NUTS"
              variant="outlined"
              placeholder="Kod NUTS"
              required
            />
            <SelectInput
              label={"Państwo"}
              current={selectedCountry}
              options={countries}
              onSelect={setSelectedCountry}
            />
            <TextField
              value={value11}
              onChange={(e) => setValue11(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="NIP"
              variant="outlined"
              placeholder="NIP"
              required
            />
            <TextField
              value={value12}
              onChange={(e) => setValue12(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="REGON"
              variant="outlined"
              placeholder="REGON"
              required
            />
            <TextField
              value={value13}
              onChange={(e) => setValue13(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Adres e-mail Zamawiającego"
              variant="outlined"
              placeholder="Adres e-mail Zamawiającego"
              required
            />
          </>
        );

      case 3:
        return (
          <>
            <TextField
              value={value14}
              onChange={(e) => setValue14(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Adres strony internetowej Zamawiającego (URL)"
              variant="outlined"
              placeholder="Adres strony internetowej Zamawiającego (URL)"
              required
            />
            <TextField
              value={value15}
              onChange={(e) => setValue15(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Osoba do kontaktu"
              variant="outlined"
              placeholder="Osoba do kontaktu"
              required
            />
            <TextField
              value={value16}
              onChange={(e) => setValue16(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Numer telefonu"
              variant="outlined"
              placeholder="Numer telefonu"
              required
            />
            <TextField
              value={value17}
              onChange={(e) => setValue17(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Numer faksu"
              variant="outlined"
              placeholder="Numer faksu"
              required
            />
            <TextField
              value={value18}
              onChange={(e) => setValue18(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Skrzynka ePUAP"
              variant="outlined"
              placeholder="Skrzynka ePUAP"
              required
            />
          </>
        );

      case 4:
        return (
          <>
            <TextField
              value={value19}
              onChange={(e) => setValue19(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Informacje dodatkowe"
              variant="outlined"
              placeholder="Informacje dodatkowe"
            />
            <TextField
              value={value20}
              onChange={(e) => setValue20(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Rodzaj zamówienia w BIP"
              variant="outlined"
              placeholder="Rodzaj zamówienia w BIP"
              required
            />
            <TextField
              value={value21}
              onChange={(e) => setValue21(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Rodzaj zamówienia w DUUE"
              variant="outlined"
              placeholder="Numer telefonu"
              required
            />
            <TextField
              value={value22}
              onChange={(e) => setValue22(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Przedmiot działalności Zamawiającego "
              helperText="zgodnie z klasyfikacją w ogłoszeniu w BIP"
              variant="outlined"
              placeholder="Przedmiot działalności Zamawiającego "
              required
            />
            <TextField
              value={value23}
              onChange={(e) => setValue23(e.target.value)}
              className={classes.input}
              type="text"
              id="outlined-basic"
              label="Przedmiot działalności Zamawiającego "
              helperText="zgodnie z klasyfikacją w ogłoszeniu w DUUE"
              variant="outlined"
              placeholder="Przedmiot działalności Zamawiającego "
              required
            />
          </>
        );
      default:
        return "Unknown step";
    }
  };

  const isFinished = () => {
    return activeStep === steps.length;
  };

  const isNext = () => {
    return activeStep !== steps.length - 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = () => {
    console.log("Submitting.....");

    const data = {
      username: value1,
      email: value2,
      password: value3,
      customer: {
        name: value4,
        department: value12,
        addressStreet: value6,
        addressHouseNumber: value7,
        addressZipCode: value8,
        addressCity: value9,
        addressVoivodeship: value5,
        addressCountry: countries[selectedCountry],
        nutsCode: value10,
        nip: value11,
        regon: regions[selectedRegion],
        email: value13,
        www: value14,
        contactPerson: value15,
        phoneNumber: value16,
        faxNumber: value17,
        epuap: value18,
        additionalInformation: value19,
        bipClientType: value20,
        duueClientType: value21,
        bipCoreBusiness: value22,
        duueCoreBusiness: value23,
      },  
    };

    console.log(data);

    props.onSubmit(data);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent()}
              <StepperActions
                onNextPress={handleNext}
                onBackPress={handleBack}
                isNext={isNext()}
                isNextDisabled={activeStep === 0}
              />
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {isFinished() && (
        <StepperFinishHintView
          onRestPress={handleReset}
          onSubmitClick={handleSubmit}
        />
      )}
    </div>
  );
}

function getSteps() {
  return [
    "Rejestracja 1",
    "Rejestracja 2",
    "Rejestracja 3",
    "Rejestracja 4",
    "Rejestracja 5",
  ];
}

const SelectInput = ({ label, current, options, onSelect }) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={current}
        label={label}
        onChange={(e) => onSelect(e.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((o, idx) => (
          <MenuItem key={idx} value={idx}>
            {o}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const regions = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "łódzkie",
  "małopolskie",
  "mazowieckie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "śląskie",
  "świętokrzyskie",
  "warmińsko-mazurskie",
  "wielkopolskie",
  "zachodniopomorskie",
];
