import {useSearchPopupStyles} from './search-popup.style';
import { Input} from 'antd';
import {useState} from 'react';
import useLocalization from "../../../../assets/lang";

const SearchPopupComponent =({onSearch, onReset}: any)=>{
    const classes=useSearchPopupStyles();
    const [searchValue, setSearchValue] = useState('');
    const translate = useLocalization();

    const handleSearch = () => {
        onSearch(searchValue);
    };

    const handleReset = () => {
        setSearchValue('');
        onReset();
    };

    const handleInputChange = (e: any) => {
        setSearchValue(e.target.value);
    };

    return (
       <div className={classes.popupSelect}>
           <div className={classes.container}>
               <Input onChange={handleInputChange} value={searchValue} className={classes.searchInput} placeholder='Axtarış mətni'></Input>
               <div className={classes.searchButtons}>
                   <p className={classes.reset} onClick={handleReset}>{translate("reset")}</p>
                   <p className={classes.search} onClick={handleSearch}>{translate("search")}</p>
               </div>
           </div>
       </div>
    );
};
export default SearchPopupComponent;