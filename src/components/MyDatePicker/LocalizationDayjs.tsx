import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en-gb";
import "dayjs/locale/zh-cn";
import * as React from "react";
import "./dayjs.css";

const locales = ["en", "en-gb", "zh-cn", "de"];

type LocaleKey = (typeof locales)[number];

const LocalizationDayjs: React.FC = () => {
  const [locale, setLocale] = React.useState<LocaleKey>("en-gb");

  return (
    <div className="localization-dayjs">
      <h2>Pick A Date</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
        <Stack spacing={3} sx={{ width: 300 }}>
          <ToggleButtonGroup
            value={locale}
            exclusive
            fullWidth
            onChange={(event, newLocale) => {
              if (newLocale != null) {
                setLocale(newLocale);
              }
            }}
          >
            {locales.map((localeItem) => (
              <ToggleButton key={localeItem} value={localeItem}>
                {localeItem}
              </ToggleButton>
            ))}{" "}
          </ToggleButtonGroup>
          <DateField
            className="field"
            label="Date"
            defaultValue={dayjs("2025-04-17")}
          />
          <TimeField label="Time" defaultValue={dayjs("2025-04-17T18:30")} />
        </Stack>
      </LocalizationProvider>
    </div>
  );
};

export default LocalizationDayjs;
