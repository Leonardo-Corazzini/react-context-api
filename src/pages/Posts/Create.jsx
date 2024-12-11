import axios from "axios";
import { useState } from "react";
import { BASE_URI } from "../../config";
import { useNavigate } from "react-router-dom";

const initialformData = {
    name: '',
    image: '',
    tags: '',
    content: '',
    punlished: true
}
export default function Create() {
    return (
        <div>
            form
        </div>
    )
}