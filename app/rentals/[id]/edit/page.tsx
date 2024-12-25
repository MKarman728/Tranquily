import {
  fetchRentalDetails,
  updatePropertyImageAction,
  updatePropertyAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import CategoriesInput from "@/components/form/CategoriesInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CountriesInput from "@/components/form/CountriesInput";
import CounterInput from "@/components/form/CounterInput";
import AmenitiesInput from "@/components/form/AmenitiesInput";
import { SubmitButton } from "@/components/form/Buttons";
import { redirect } from "next/navigation";
import { type Amenity } from "@/utils/amenities";
import ImageInputContainer from "@/components/form/ImageInputContainer";

import React from "react";

function EditRentalPage() {
  return <div>EditRentalPage</div>;
}

export default EditRentalPage;
