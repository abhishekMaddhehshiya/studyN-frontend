import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"


export default function ContactUsFrom() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", email: "", message: "", contact: "" })
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data)
    setLoading(false)
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Name
        </label>
        <input
          className="w-full rounded-md border border-gray-800 bg-gray-700 px-4 py-2 text-gray-300 focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="Your Name"
          {...register("name", { required: true, maxLength: 80 })}
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Email
        </label>
        <input
          className="w-full rounded-md border border-gray-800 bg-gray-700 px-4 py-2 text-gray-300 focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="Email"
          {...register("email", { required: true, maxLength: 80 })}
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Contact No.
        </label>
        <input
          className="w-full rounded-md border border-gray-800 bg-gray-700 px-4 py-2 text-gray-300 focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="910XXXXXXX"
          {...register("contact", { required: true, maxLength: 15 })}
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          className="w-full rounded-md border border-gray-800 bg-gray-700 px-4 py-2 text-gray-300 focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="i.e. I want to know about..."
          {...register("message", { required: true, maxLength: 800 })}
        />
        {errors.name && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>
      

      <input className="w-full mt-4 rounded-md border border-gray-800 bg-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-900 focus:outline-none"
        type="submit" />
    </form>
  )
}
