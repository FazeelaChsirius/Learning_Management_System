import { Category, Course } from "@prisma/client";
import { CourseCard } from "@/components/course-card";

type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progress: number | null;
};

interface CoursesListProps {
    items: CourseWithProgressWithCategory[];
}

export const CoursesList = ({
    items
}: CoursesListProps) => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {items.map((item) => (
                    <CourseCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl!}  
                        chaptersLength={item.chapters.length}
                        price={item.price!}
                        progress={item.progress}
                        category={item?.category?.name!}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className="text-center text-sm text-muted-forground mt-10">
                    No courses found
                </div>
            )}
        </div>
    )
} 

// In course-card props, imageUrl, price and category is required.
// But in our prisma schema these things can be optional.
// So we will put Exclamation point (!) at the end to override that. 

// '!' (Non-null assertion): The '!' is a non-null assertion operator in TypeScript and JavaScript. 
// It tells the TypeScript compiler to override strict null checks and assume that 
//the expression before it will not be null or undefined.