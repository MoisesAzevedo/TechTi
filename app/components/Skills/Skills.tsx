import React from "react";
import GradientText from "@/app/styles/GradientText";
import styles from "./Skills.module.scss";

export interface SkillItem {
  icon: string;
  text: string;
}

export interface SkillsProps {
  title?: string;
  subtitle?: string;
  skillsList: SkillItem[];
  showIconsGrid?: boolean;
  listTitle?: string;
  listItems: string[];
  className?: string;
}

export default function Skills({
  title,
  subtitle,
  skillsList,
  showIconsGrid = true,
  listTitle,
  listItems,
  className = "",
}: SkillsProps) {
  return (
    <section
      data-name="skills-section"
      className={`desktop:w-main-desktop mb-60 ${className}`}
    >
      {showIconsGrid && (
        <div data-name="skills-container" className="flex mb-10">
          <div data-name="skills-text" className="w-[357px]">
            {title && (
              <GradientText data-name="skills-title" as="h2">
                {title}
              </GradientText>
            )}
            {subtitle && (
              <GradientText data-name="skills-subtitle" as="p">
                {subtitle}
              </GradientText>
            )}
          </div>
          <div data-name="skills-icons" className={styles.skillsIconsContainer}>
            <div data-name="skills-grid" className={styles.skillsGrid}>
              {skillsList.map((item, idx) => (
                <div
                  key={idx}
                  data-name={`skill-item-${idx}`}
                  className={styles.skillItem}
                >
                  <img
                    data-name={`skill-icon-${idx}`}
                    src={item.icon}
                    alt={item.text}
                    className={styles.skillIcon}
                  />
                  <div
                    data-name={`skill-text-${idx}`}
                    className={styles.skillText}
                  >
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div data-name="skills-list-wrapper" className="w-full">
        <div data-name="skills-list-row" className="flex">
          <div data-name="skills-list-title" className="w-[357px]">
            {listTitle && (
              <GradientText data-name="skills-list-title-text" as="h2">
                {listTitle}
              </GradientText>
            )}
          </div>
          <div data-name="skills-list-items" className={styles.skillsListItems}>
            {listItems.map((item, idx) => (
              <div
                key={idx}
                data-name={`skills-list-item-${idx}`}
                className={styles.skillsListItem}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
