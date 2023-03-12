// import { useState } from "react";
// import {
// 	GeoapifyGeocoderAutocomplete,
// 	GeoapifyContext,
// } from "@geoapify/react-geocoder-autocomplete";
// import "@geoapify/geocoder-autocomplete/styles/minimal.css";

const Autocomplete = () => {
//     function onPlaceSelect(value) {
//         console.log(value);
//       }
    
//       function onSuggectionChange(value) {
//         console.log(value);
//       }
    
//       function preprocessHook(value) {
//         return `${value}, Munich, Germany`
//       }
    
//       function postprocessHook(feature) {
//         return feature.properties.street;
//       }
    
//       function suggestionsFilter(suggestions) {
//         const processedStreets = [];
    
//         const filtered = suggestions.filter(value => {
//           if (!value.properties.street || processedStreets.indexOf(value.properties.street) >= 0) {
//             return false;
//           } else {
//             processedStreets.push(value.properties.street);
//             return true;
//           }
//         })
    
//         return filtered;
//       }

// 	return (
// 		<GeoapifyContext apiKey="b97a4dab3ff54b878c9ebdb1bed819fd">
// 			<GeoapifyGeocoderAutocomplete
// 				placeSelect={onPlaceSelect}
// 				suggestionsChange={onSuggectionChange}
// 			/>

// 			<GeoapifyGeocoderAutocomplete
// 				placeholder="Enter address here"
// 				value={value}
// 				placeSelect={onPlaceSelect}
// 				suggestionsChange={onSuggectionChange}
// 			/>

// 			<GeoapifyGeocoderAutocomplete
// 				placeSelect={onPlaceSelect}
// 				suggestionsChange={onSuggectionChange}
// 				preprocessHook={preprocessHook}
// 				postprocessHook={postprocessHook}
// 				suggestionsFilter={suggestionsFilter}
// 			/>
// 		</GeoapifyContext>
// 	);
};

export default Autocomplete;
