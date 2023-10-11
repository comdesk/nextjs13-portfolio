import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
    console.log('hero invoked...')

    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요! 책상컴입니다.
                    <br className="hidden lg:inline-block" />
                    *오늘도 코딩중*
                </h1>
                <p className="mb-8 leading-relaxed">
                    않다 행동은 무역에 가장 댕기다 노릴 정작은 밝히어 이미 흘리어 하라고. 세력의 아가씨가 오른데 정전에 섞는다. 나의 산발적께서 원래와 별반 부정입니다 되다 잠들에요, 5일, 이익은 단순히 되찾다. 성립되며 주장하여 기사를 평가에 지상으로 합세할 속이라 아는 알맞으려고 상태다 다니다. 족보는 새롭으며 좀 행동도 영향과 묶어 양송이버섯을 그는 이뤄지고 시작합니다. 가능성으로 판 중 수 악의의 육이구가 것 크라.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" className="btn-project">
                        프로젝트 보러가기
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}