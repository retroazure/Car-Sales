import { ADD_FEATURE } from "../actions/featureActions.js";
import { REMOVE_FEATURE } from "../actions/featureActions.js";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalPrice: state.additionalPrice + action.payload.price,
        additionalFeatures: state.additionalFeatures.filter((feature) => {
          return feature !== action.payload;
        }),
      };
    case REMOVE_FEATURE:
      // console.log(action.payload); just testing if the event triggers the action
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter((feature) => {
            return feature.id !== action.payload.id;
          }),
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
        additionalPrice: state.additionalPrice - action.payload.price,
      };
    default:
      return state;
  }
};
