import Skill from "./skills";

const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>I will help you develop better solutions, faster.</strong>
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Skills</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Skill id="react" name="React" />
          <Skill id="typescript" name="Typescript" />
          <Skill id="nodejs" name="Node.js" />
          <Skill id="kubernetes" name="Kubernetes" />
          <Skill id="css" name="Css" />
          <Skill id="aws" name="Aws" />
          <Skill id="nextjs" name="Next.js" />
          <Skill id="nestjs" name="Nest.js" />
          <Skill id="postgresql" name="PostgreSQL" />
          <Skill id="mysql" name="MySQL" />
          <Skill id="docker" name="Docker" />
          <Skill id="graphql" name="GraphQL" />
          <Skill id="redis" name="Redis" />
          <Skill id="html" name="HTML" />
          <Skill id="mongodb" name="MongoDB" />
          <Skill id="angular" name="Angular" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
