export interface ProjectModel{
    name: string
    description: string
    image: string,
    git_url?: string;
    site_url?: string;
    tools: string[];
}