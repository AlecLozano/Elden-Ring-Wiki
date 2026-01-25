import { useState } from "react";
import tags from '../WikiTags/Wiki-Sections'
import './Banner.css'


interface Tag {
  name: string,
  children: Tag[] | undefined
}

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);

  const renderTag = (tag: Tag) => {
    const hasChildren = tag.children && tag.children.length > 0;
    const isHovered = hoveredTag === tag.name;

    return (
      <div
        key={tag.name}
        className="navbar-item"
        onMouseEnter={() => hasChildren && setHoveredTag(tag.name)}
        onMouseLeave={() => hasChildren && setHoveredTag(null)}
      >
        <div className="navbar-tag">
          {tag.name}
        </div>
        {hasChildren && isHovered && (
          <div className="navbar-children">
            {tag.children!.map((child) => (
              <div key={child.name} className="navbar-child">
                {child.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`navbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button
        className="navbar-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '✕' : '☰'}
      </button>
      {isExpanded && (
        <div className="navbar-content">
          {tags.map(tag => renderTag(tag))}
        </div>
      )}
    </div>
  )
}

export default Navbar;