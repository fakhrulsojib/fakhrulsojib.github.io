export interface NavItem {
    id: string;
    name: string;
}

export interface Position {
    designation: string;
    "start-date": string;
    "end-date": string;
}

export interface ExperienceItem {
    company: string;
    type: string;
    positions: Position[];
    location: string;
    "tech-stack": string[];
    "profile-link"?: string;
}

export interface EducationItem {
    id: string;
    school: string;
    degree: string;
    field?: string;
    startDate: string;
    endDate: string;
    location: string;
    "intersting-courses"?: string[];
    highlights?: string[];
}

export interface CPProfile {
    platform: string;
    "max-rating": string;
    rank: {
        name: string;
        color: string;
    };
    solved: string;
    "contest-participation": string;
    profile: string;
}

export interface Project {
    title: string;
    description: string;
    link?: string;
    imageUrl?: string;
    technologies?: string[];
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string;
}
