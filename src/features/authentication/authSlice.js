import { createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice";
import AuthService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
