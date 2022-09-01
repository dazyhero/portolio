const ContactMe: React.FC = () => {
  return (
    <div className="bg-white text-black flex flex-col justify-center pt-10 min-h-screen items-center">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px] ">
        <input id="name" name="name" required maxLength={128} type="text" placeholder="Name" className="outline-none border-2 border-black rounded-3xl px-8 py-2"/>
        <input id="email" name="email" required maxLength={128} type="text" placeholder="Your email" className="outline-none border-2 border-black rounded-3xl px-8 py-2"/>
        <textarea id="message" name="message" required maxLength={1048576} placeholder="Additional information" className="outline-none border-2 border-black rounded-3xl px-8 py-6 min-h-[16em]"/>
        <div className="text-center mt-10">
          <button type="submit" className="bg-black text-white rounded-3xl px-8 py-2">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ContactMe;
