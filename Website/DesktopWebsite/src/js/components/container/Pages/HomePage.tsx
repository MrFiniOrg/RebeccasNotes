import * as React from "react"
import axios, { AxiosResponse } from "axios"
import { IPageProps } from "../../../interfaces/ICommon"
import { NavigationBar } from "../../presentational/NavigationBar"

export const HomePage : React.FC<IPageProps> = (props: IPageProps) => 
{

    const { title } = props
    // USING OF REACT HOOKS
    const [data, setData] = React.useState([] as Array<string>)

    React.useEffect(() => {

        (async () => {
            try {
                const response: AxiosResponse<{ data: string[] }> = await axios('https://localhost:5001/api/Default/badResponse/?requestCount=300');
                const { data } = response
                console.log(data)
            } catch (SomeError) {
                console.error(SomeError.response.data)
            }
        })();

        /*
        axios('https://localhost:5001/api/Default').then((result: { data: Array<string> }) =>
        {
            const { data } = result;
            setData(data);
            //setData(result.data)
        }).catch((Error: Error) => { console.log(Error) })
        */
    }, [])

    return (<div id="home">

        <NavigationBar
            minHeight="10vh"
            minWidth="100%"
            withBorderRadius={false}
        />

    </div>)
}