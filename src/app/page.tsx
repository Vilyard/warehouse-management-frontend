"use client"
import { LoginForm } from "@/components/LoginForm"
import { RootState } from "@/lib/reducers"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Home() {
  const router = useRouter()
  const { token } = useSelector((state: RootState) => state.auth)
  useEffect(() => {
    if(token){
      router.push("/dashboard")
    }
  }, [token, router])
  return <LoginForm />
}
