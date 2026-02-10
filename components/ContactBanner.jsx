import ContactCardAnimated from './ContactCardAnimated'

const ContactBanner = () => {
  return (
    <div className="relative min-h-[100vh] w-full bg-white text-purple-900 overflow-hidden py-12 lg:py-20 px-6 lg:px-20 text-center">
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center gap-12 z-40">
        <ContactCardAnimated />
      </div>
    </div>
  )
}

export default ContactBanner
