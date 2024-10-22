const ContactOpts = ({opt}) => {
  return (
    <div className="flex items-center">
        <span className="opt-icon p-4">{opt.icon}</span>
        <div className="md:block hidden">
            <h2 className="text-xl font-bold">{opt.text}</h2>
            <p>{opt.subText}</p>
        </div>
    </div>
  )
}

export default ContactOpts