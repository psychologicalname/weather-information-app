'use client'

import { Autocomplete, TextField, InputAdornment, IconButton, Divider } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

//constants
import { cities } from "@/utils/constants";

//types
import type { City } from "@/utils/types";

//icons
import { AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";

//redux
import { RootState } from "@/redux/store";
import { setLocalityId } from "@/redux/localitySlice";

const Search: React.FC = () => {
    const router = useRouter();

    const dispatch = useDispatch();

    const localityId = useSelector((state: RootState) => state.locality.localityId);

    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const [inputValue, setInputValue] = useState<string>("");

    const handleSearch = (e: React.FormEvent, value: City | null) => {
        e.preventDefault();
        if (value) {
            setSelectedCity(value);
            dispatch(setLocalityId(value.localityId));
            router.push(`/weather?city=${value.cityName}&locality=${value.localityName}&localityId=${value.localityId}`);
        } else {
            setSelectedCity(null);
            dispatch(setLocalityId(null));
        }
    };

    const handleClear = () => {
        setInputValue("");
        setSelectedCity(null);
        dispatch(setLocalityId(null));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/weather?city=${selectedCity?.cityName}&locality=${inputValue}&localityId=${localityId}`);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
            <Autocomplete
                fullWidth
                id="search-locality"
                options={cities}
                groupBy={(option) => option.cityName}
                getOptionLabel={(option) => option.localityName}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search Locality..."
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <InputAdornment position="end">
                                    {inputValue && (
                                        <IconButton onClick={handleClear}>
                                            <AiOutlineClose className="text-gray-400 text-[20px]" />
                                        </IconButton>
                                    )}
                                    <Divider orientation="vertical" flexItem sx={{ borderColor: '#9ca3af', height: '36px', marginX: 0.5, marginY: -2.25, color: '#9ca3af' }} />
                                    <IconButton edge="end" onClick={handleSubmit}>
                                        <IoSearchOutline className="text-[#4285F4]" />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: null,
                        }}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "2rem",
                                width: "100%",
                                padding: '6px 18px',
                                // Override MUI padding for custom icons
                                paddingRight: '25px !important',
                            },
                            "& .MuiInputBase-input": {
                                paddingRight: '0px !important',
                            },
                            "& .MuiAutocomplete-endAdornment": {
                                marginRight: '0px !important',
                            },
                            maxWidth: "672px",
                            width: "100%",
                        }}
                    />
                )}
                value={selectedCity}
                onChange={(event, newValue) => handleSearch(event, newValue)}
            />
        </form>
    )
}

export default Search