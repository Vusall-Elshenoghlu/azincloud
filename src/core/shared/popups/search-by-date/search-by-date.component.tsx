import { useSearchByDateSyles } from "./search-by-date.style";
import { DatePicker } from "antd";
import { useState } from "react";
import dayjs from "dayjs";

const SearchByDateComponent = ({ onSearch, onReset }: any) => {
    const classes = useSearchByDateSyles();
    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);

    const handleSearch = () => {
        if (date1 && date2) {
            onSearch(date1, date2);
        }
    };

    const handleReset = () => {
        setDate1(null);
        setDate2(null);
        onReset();
    };

    return (
        <div className={classes.popupSelect}>
            <div className={classes.container}>
                <div className={classes.dateInputs}>
                    <DatePicker
                        value={date1}
                        format="DD.MM.YYYY"
                        onChange={(date) => setDate1(date)}
                        className={`${classes.dateInput} ${classes.calendarDropdown}`}
                    />
                    <DatePicker
                        value={date2}
                        format="DD.MM.YYYY"
                        onChange={(date) => setDate2(date)}
                        className={`${classes.dateInput} ${classes.calendarDropdown}`}
                    />
                </div>
                <div className={classes.searchButtons}>
                    <p className={classes.reset} onClick={handleReset}>Reset</p>
                    <p className={classes.search} onClick={handleSearch}>Search</p>
                </div>
            </div>
        </div>
    );
};

export default SearchByDateComponent;