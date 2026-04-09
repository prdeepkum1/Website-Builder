import React from 'react';
import { motion } from "motion/react"
import { Sparkle, X } from "lucide-react"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase.js"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUserData } from "../redux/userSlice"
import { useNavigate } from "react-router-dom"

const LoginModel = ({ open, onClose }) => {

    // store ke aanadar data send krna ho to use hota hai dispatch ka or store se data lena ho to use hota hai useSelector ka
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleAuth = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            console.log(result)
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/google`, {
                name: result.user.displayName,
                email: result.user.email,
                avatar: result.user.photoURL
            }, { withCredentials: true })
            dispatch(setUserData(data))
            // hello
            // console.log(data)
            onClose()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex z-50 items-center justify-center bg-black/80 backdrop-blur-xl px-4"
                >
                    <motion.div
                        initial={{ scale: 0.88, opacity: 0, y: 60 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 40 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative w-full max-w-md p-px rounded-3xl bg-linear-to-br from-purple-500/40 via-blue-500 to-transparent"
                    >
                        <div className="relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0,0.8)] overflow-hidden">

                            {/* glow background */}
                            <motion.div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/30 blur-[140px]" />

                            <motion.div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/25 blur-[140px]" />

                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg"><X /></button>
                            <div className="relative px-8 pt-14 pb-10 text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur">
                                    <Sparkle className="w-4 h-4 text-purple-400" />
                                    <span className="text-sm text-gray-300">AI Website Builder</span>
                                </div>
                                <h2 className="text-3xl font-semibold leading-tight mb-3 space-x-2 text-white">Welcome to{" "}
                                    <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dora ai</span>
                                </h2>

                                <motion.button
                                    onClick={handleGoogleAuth}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.90 }}
                                    className="bg-white text-black rounded-xl group relative w-full h-13 shadow-xl font-semibold overflow-hidden"
                                >
                                    <div className="relative flex items-center justify-center gap-3">
                                        <img className="h-5 w-5" src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                                        Continue with Google
                                    </div>
                                </motion.button>

                                <div className="flex items-center gap-4 my-10">
                                    <div className="h-px flex-1 bg-white/10" />
                                    <span className="text-xs tracking-tight text-zinc-500">Secure Login</span>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>

                                <p className="text-xs text-zinc-500 leading-relaxed">By continuing you agree to our {" "}
                                    <span className="underline cursor-pointer hover:text-zinc-300">Terms of Services</span>{" "}
                                    and{" "}
                                    <span className="underline cursor-pointer hover:text-zinc-300">Privacy Policy</span>
                                </p>

                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default LoginModel;
