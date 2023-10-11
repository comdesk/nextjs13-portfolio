import Link from "next/link";
import Image from "next/image";

export default function ProjectItem({data}) {
    const title = data.properties.이름.title[0].plain_text;
    const github = data.properties.github.url;
    const description = data.properties.설명.rich_text[0].plain_text;
    // const imgExternal = data.cover.external;
    // let imgSrc;

    // if(imgExternal === undefined) {
    //     imgSrc = data.cover.file.url;
    // } else {
    //     imgSrc = imgExternal.url;
    // }

    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.태그.multi_select;
    const startDateString = data.properties.기간.date.start;
    const endDateString = data.properties.기간.date.end;

    const calculatePeriod = (startDateString, endDateString) => {
        const startDateArray = startDateString.split('-');
        const endDateArray = endDateString.split('-');

        const startDate = new Date(startDateArray[0], startDateArray[1], startDateArray[2]);
        const endDate = new Date(endDateArray[0], endDateArray[1], endDateArray[2]);

        const period = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

        console.log(`기간: ${period}`)
        console.log(`start: ${startDate}`)
        console.log(`end: ${endDate}`)

        return period;
    }

    calculatePeriod(startDateString, endDateString);

    return (
        <div className="project-card">
            <div className="relative w-full h-96">
                <Image 
                    className="rounded-t-xl"
                    src={imgSrc}
                    alt="cover image"
                    // width="200"
                    // height="200"
                    fill="true"
                    style={{objectFit: "cover", layout: "responsive"}}
                    quality={100}
                />
            </div>
            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-2 text-xl">{description}</h3>
                <Link href={github}>깃허브 바로가기</Link>
                <p className="my-1">
                    작업기간: {startDateString} ~ {endDateString} ({calculatePeriod(startDateString, endDateString)}일)
                </p>
                <div className="flex items-start mt-2">
                    {
                        tags.map((tag) => (
                            <h1 className={`px-2 py-1 mr-2 rounded-md
                                        bg-${tag.color}-200
                                        dark:bg-sky-700 w-30`} 
                                key={tag.id}>
                                {tag.name}
                                </h1>
                        ))
                    }
                </div>
            </div>            
        </div>
    )
}