import {createBrowserRouter,} from "react-router-dom";
import {App} from "../App.tsx";
import {Error404} from "../components/pages/Error404.tsx";
import {Adidas} from "../components/pages/Adidas.tsx";

import {Nike} from "../components/pages/Nike.tsx";
import {Model} from "../components/pages/Model.tsx";
import {Prices} from "../components/pages/Prices.tsx";
import {Puma} from "../components/pages/Puma.tsx";
import {ProtectedPage} from "../components/pages/ProtectedPage.tsx";
import {ProtectedRoute} from "./ProtectedRoute.tsx";

const PATH = {
    PAGE0: '/',
    ADIDAS: '/adidas',
    PUMA: '/puma',
    NIKE: '/nike',
    ERROR: '/error404',
    MODEL: '/model/:model/:id',
    PRICES: '/prices',
    PROTECTED: '/protectedPage',
} as const


// @ts-ignore
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                index: true, // для PATH.PAGE0
                element: <Adidas/>
            },
            {
                path: PATH.ADIDAS,
                element: <Adidas/>
            },
            {
                path: PATH.PUMA,
                element: <Puma/>
            },
            {
                path: PATH.NIKE,
                element: <Nike/>
            },
            {
                path: PATH.MODEL,
                element: <Model/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            },
            {

                path: PATH.PROTECTED,
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                )

            },
            {
                path: PATH.ERROR,
                element: <Error404/>
            },
            {
                path: "*", // catch-all route
                element: <Error404/>
            }
        ]
    },
]);