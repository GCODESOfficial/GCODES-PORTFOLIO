import GlitchText from "../components/glitchtext"

const Page = () => {
  return (
    <div>
      <div className="p-10 space-y-5">
  <GlitchText text="NEXT.JS ROCKS!" glitchChars="@$#%&*" className="text-2xl text-red-500" />
</div>
    </div>
  )
}

export default Page