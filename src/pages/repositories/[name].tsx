import RepositoryInfo from "@components/RepositoryInfo";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {useEffect, useState} from 'react'

export default function Repository(){
    const router = useRouter();
    const [name, setName] = useState<string>();

    useEffect(() => {
        const {name} = router.query
        setName(name?.toString())
    }, [router?.isReady])
    return (
        <RepositoryInfo name={name} />
    )
}