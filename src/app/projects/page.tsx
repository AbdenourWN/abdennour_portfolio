import Projects from "../Components/Projects";

function ProjectsPage() {
  return (
    <div className="py-20">
      <Projects props={{ animate: "visible" }} />
    </div>
  );
}

export default ProjectsPage;
