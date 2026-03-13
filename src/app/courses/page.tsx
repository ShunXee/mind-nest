import { CoursesPage as CoursesContent } from "@/components/courses/courses-page";
import { getCourseVideos } from "@/lib/course-videos";

export default async function CoursesPage() {
  const videos = await getCourseVideos();
  return <CoursesContent videos={videos} />;
}
