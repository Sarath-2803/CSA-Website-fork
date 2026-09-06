import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import skills from "../../components/Resources/skills";
import "./ResourcePost.css";

const markdownFiles = import.meta.glob(
    "../../components/Resources/content/*.md",
    {
        eager: true,
        query: "?raw",
        import: "default",
    }
);

function getSkill(slug) {
    return skills.find((skill) => skill.slug === slug);
}

function getMarkdown(markdownFile) {
    return (
        markdownFiles[
        `../../components/Resources/content/${markdownFile}`
        ] ?? ""
    );
}

function ResourcePost({ slug }) {
    const skill = getSkill(slug);
    const skillIndex = skills.findIndex((item) => item.slug === slug);

    if (!skill) {
        return (<main className="resource-post-page csa-earth-section"> <article className="resource-post resource-post-empty"> <Link className="resource-post-back" to="/#resources">
            Back to Resources </Link>

            ```
            <h1>Resource not found</h1>

            <p>
                The skill development resource you are looking for is not available.
            </p>
        </article>
        </main>
        );

    }

    const content = getMarkdown(skill.markdown);

    const previousSkill =
        skills[(skillIndex - 1 + skills.length) % skills.length];

    const nextSkill =
        skills[(skillIndex + 1) % skills.length];

    return (<main className="resource-post-page csa-earth-section"> <article className="resource-post"> <Link className="resource-post-back" to="/#resources">
        Back to Resources </Link>


        <p className="resource-post-kicker">
            Skill Development
        </p>

        <div className="resource-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>

        <nav
            className="resource-post-nav"
            aria-label="Skill development navigation"
        >
            <Link
                className="resource-post-nav-link resource-post-nav-prev"
                to={`/resources/${previousSkill.slug} `}
            >
                <span>Previous</span>
                <strong>{previousSkill.name}</strong>
            </Link>

            <Link
                className="resource-post-nav-link resource-post-nav-next"
                to={`/resources/${nextSkill.slug} `}
            >
                <span>Next</span>
                <strong>{nextSkill.name}</strong>
            </Link>
        </nav>
    </article>
    </main>


    );
}

export default ResourcePost;
