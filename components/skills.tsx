import Image from "next/image";

interface Props {
  id: string
  name: string
}

const Skill: React.FC<Props> = ({ id, name }) => {
  return (
    <div>
      <Image src={`/assets/skills/${id}.svg`} width={1355} height={1555} />
      <div className="text-2xl xl:text-3xl">{name}</div>
    </div>
  )
}

export default Skill;
