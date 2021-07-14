import React, {useEffect,useState} from "react";
import axios from 'axios';





export const fetchData = async () => {
    let response;
  
    try {
      response = await axios.get('/products');
      console.log(response)
    } catch (e) {
      // catch error
      throw new Error(e.message)
    }
  
    // if success return value
    return response?.data ? response?.data : null // or set initial value
  }
  