export const spriteCategory = [
    {
        id: '5e1d9b5dac9e9644cc0ab58f',
        name: '엔트리봇',
        value: 'entrybot_friends',
        label: {
            ko: '엔트리봇',
            en: 'Entry friends',
            ja: 'Entry friends',
            vn: null,
        },
        categoryType: 'sprite',
        depth: 1,
        categoryOrder: 0,
        children: [
            {
                id: '62cfc0dadb5c900030f9623b',
                name: '소분류1',
                value: 'sub_RwDYBuplLP',
                label: {
                    ko: '소분류1',
                    en: 'nonamed',
                    ja: '名前のない',
                    vn: null,
                },
                categoryType: 'sprite',
                depth: 2,
                categoryOrder: 0,
            },
        ],
    },
    {
        id: '5e1d9b5dac9e9644cc0ab590',
        name: '사람',
        value: 'people',
        label: {
            ko: '사람',
            en: 'people',
            ja: '人物',
            vn: 'peoples',
        },
        categoryType: 'sprite',
        depth: 1,
        categoryOrder: 1,
        children: [],
    },
];

export const soundCategory = [
    {
        id: '5e1d9b5dac9e9644cc0ab589',
        name: '사람',
        value: 'people',
        label: {
            ko: '사람',
            en: 'people',
            ja: '人物',
            vn: null,
        },
        categoryType: 'sound',
        depth: 1,
        categoryOrder: 0,
        children: [
            {
                id: '5e20464eac9e9644cc0ab646',
                name: '일상생활',
                value: 'people_daily',
                label: {
                    ko: '일상생활',
                    en: 'everyday life',
                    ja: '日常生活',
                    vn: null,
                },
                categoryType: 'sound',
                depth: 2,
                categoryOrder: 0,
            },
        ],
    },
    {
        id: '5e1d9b5dac9e9644cc0ab58a',
        name: '자연',
        value: 'nature',
        label: {
            ko: '자연',
            en: 'nature',
            ja: '自然',
            vn: null,
        },
        categoryType: 'sound',
        depth: 1,
        categoryOrder: 1,
        children: [],
    },
];

export const assets = {
    sprite: [
        {
            id: 1,
            name: '(1)엔트리봇',
            label: {
                ko: '(1)엔트리봇',
                en: '(1)Entrybot',
                ja: null,
                vn: '(1)Entrybot',
            },
            category: {
                main: 'entrybot_friends',
                sub: null,
            },
            pictures: [
                {
                    id: null,
                    name: '(1)엔트리봇_걷기1',
                    label: {
                        ko: '(1)엔트리봇_걷기1',
                        en: '(1)Entrybot_walk1',
                        ja: null,
                        vn: '(1)Entrybot_walk1',
                    },
                    fileurl: '/assets/image/a8268fd79a48fd9b92c7b47406b95393.png',
                    thumbUrl: '/assets/thumb/a8268fd79a48fd9b92c7b47406b95393.png',
                    imageType: null,
                    dimension: {
                        width: 284,
                        height: 350,
                    },
                    trimmed: null,
                },
            ],
            sounds: [
                {
                    id: null,
                    name: '강아지 짖는소리',
                    label: {
                        ko: '강아지 짖는소리',
                        en: 'Bark of a Dog',
                        ja: null,
                        vn: 'Bark of a Dog',
                    },
                    fileurl: '/assets/sound/30a5116094820dedc36a4a761b9d1816.mp3',
                    duration: 1.3,
                },
            ],
        },
        {
            id: 2,
            name: '궁수 엔트리봇',
            label: {
                ko: '궁수 엔트리봇',
                en: 'Archer entrybot',
                ja: null,
                vn: null,
            },
            category: {
                main: 'entrybot_friends',
                sub: 'sub_RwDYBuplLP',
            },
            pictures: [
                {
                    id: null,
                    name: '궁수 엔트리봇',
                    label: {
                        ko: '궁수 엔트리봇',
                        en: 'Archer entrybot',
                        ja: null,
                        vn: '궁수 엔트리봇.svg',
                    },
                    fileurl: '/assets/image/k4dcspn4ldcncd1l000q7ad3223e07m3.svg',
                    thumbUrl: '/assets/thumb/k4dcspn4ldcncd1l000q7ad3223e07m3.svg',
                    imageType: 'svg',
                    dimension: {
                        width: 390,
                        height: 390,
                    },
                    trimmed: null,
                },
            ],
            sounds: [],
        },
        {
            id: 3,
            name: '개구쟁이',
            label: {
                ko: '개구쟁이',
                en: 'Playful child',
                ja: null,
                vn: 'Playful child',
            },
            category: {
                main: 'people',
                sub: null,
            },
            pictures: [
                {
                    id: null,
                    name: '개구쟁이_1',
                    label: {
                        ko: '개구쟁이_1',
                        en: 'Playful child_1',
                        ja: null,
                        vn: 'Playful child_1',
                    },
                    fileurl: '/assets/image/ba7d688dfacfcb77d61b952669372d9d.png',
                    thumbUrl: '/assets/thumb/ba7d688dfacfcb77d61b952669372d9d.png',
                    imageType: null,
                    dimension: {
                        width: 215,
                        height: 355,
                    },
                    trimmed: null,
                },
            ],
            sounds: [],
        },
    ],
    picture: [
        {
            id: 1,
            name: '(1)엔트리봇_걷기1',
            label: {
                ko: '(1)엔트리봇_걷기1',
                en: '(1)Entrybot_walk1',
                ja: null,
                vn: null,
            },
            fileurl: '/assets/image/a8268fd79a48fd9b92c7b47406b95393.png',
            thumbUrl: '/assets/thumb/a8268fd79a48fd9b92c7b47406b95393.png',
            imageType: 'png',
            dimension: {
                width: 284,
                height: 350,
            },
            trimmed: null,
        },
        {
            id: 2,
            name: '궁수 엔트리봇',
            label: {
                ko: '궁수 엔트리봇',
                en: 'Archer entrybot',
                ja: null,
                vn: '궁수 엔트리봇.svg',
            },
            fileurl: '/assets/image/k4dcspn4ldcncd1l000q7ad3223e07m3.svg',
            thumbUrl: '/assets/thumb/k4dcspn4ldcncd1l000q7ad3223e07m3.svg',
            imageType: 'svg',
            dimension: {
                width: 390,
                height: 390,
            },
            trimmed: null,
        },
    ],
    sound: [
        {
            id: 1,
            name: '기타 루프1',
            label: {
                ko: '기타 루프1',
                en: '기타 루프1.mp3',
                ja: null,
                vn: '기타 루프1.mp3',
            },
            path: '/assets/sound/9pcv13o6la1u2rhr000q75262d1nupd0.mp3',
            duration: 8,
        },
    ],
    table: [
        {
            id: '63eb28429b18bc31f53a2180',
            name: 'vibe 장르별 재생 수',
            lang: 'ko',
            url: '',
            rows: 12,
            fields: ['월', ' 발라드', ' 댄스', ' 힙합', ' 팝', ' 락', ' 캐롤', ' 합계'],
            fieldInfos: [],
            provider: 'vibe',
            summary: 'summary',
            description: 'summary',
            exampleurl: null,
            linkText: '',
            isOpen: true,
            projectTable: {
                _id: '63eb28b4045eb131fdb0d156',
                chart: [],
                fields: ['월', ' 발라드', ' 댄스', ' 힙합', ' 팝', ' 락', ' 캐롤', ' 합계'],
                type: 'user',
                data: [
                    [
                        '2019-01',
                        ' 4580340',
                        ' 3506013',
                        ' 2530997',
                        ' 1781670',
                        ' 433264',
                        ' 0',
                        ' 12832284',
                    ],
                    [
                        '2019-02',
                        ' 5983086',
                        ' 5039213',
                        ' 3306147',
                        ' 2441981',
                        ' 563172',
                        ' 0',
                        ' 17333599',
                    ],
                    [
                        '2019-03',
                        ' 7930240',
                        ' 6968901',
                        ' 5153241',
                        ' 3041281',
                        ' 2296628',
                        ' 0',
                        ' 25390291',
                    ],
                    [
                        '2019-04',
                        ' 14700171',
                        ' 17289767',
                        ' 6208220',
                        ' 6488231',
                        ' 2541564',
                        ' 0',
                        ' 47227953',
                    ],
                    [
                        '2019-05',
                        ' 14190101',
                        ' 18188894',
                        ' 6447376',
                        ' 6440902',
                        ' 2444351',
                        ' 0',
                        ' 47711624',
                    ],
                    [
                        '2019-06',
                        ' 12654122',
                        ' 13172189',
                        ' 5232155',
                        ' 6014894',
                        ' 1164560',
                        ' 0',
                        ' 38237920',
                    ],
                    [
                        '2019-07',
                        ' 10796347',
                        ' 11106577',
                        ' 6280753',
                        ' 7027246',
                        ' 1193829',
                        ' 0',
                        ' 36404752',
                    ],
                    [
                        '2019-08',
                        ' 11164315',
                        ' 9920786',
                        ' 6034153',
                        ' 6296636',
                        ' 940801',
                        ' 0',
                        ' 34356691',
                    ],
                    [
                        '2019-09',
                        ' 12817607',
                        ' 9089189',
                        ' 6217664',
                        ' 5947186',
                        ' 1963010',
                        ' 0',
                        ' 36034656',
                    ],
                    [
                        '2019-10',
                        ' 13698109',
                        ' 10993654',
                        ' 6905381',
                        ' 4656590',
                        ' 5908256',
                        ' 84619',
                        ' 42246609',
                    ],
                    [
                        '2019-11',
                        ' 14737404',
                        ' 11373791',
                        ' 7293055',
                        ' 6093062',
                        ' 5899834',
                        ' 257110',
                        ' 45654256',
                    ],
                    [
                        '2019-12',
                        ' 14564714',
                        ' 11576156',
                        ' 8853884',
                        ' 6405432',
                        ' 4932374',
                        ' 521156',
                        ' 46853716',
                    ],
                ],
                name: '월발라드댄스힙합팝락캐롤합계.csv',
                user: '5f9ab512df5079a03d4611f2',
                created: '2023-02-14T06:22:44.770Z',
                updated: '2023-02-14T06:22:44.770Z',
                __v: 0,
            },
            updated: '2023-02-14T06:22:45.960Z',
            hasOtherTypes: false,
            otherTypes: [],
        },
        {
            id: '63aaa00fd660420030fee255',
            name: '계절별 기온',
            lang: 'ko',
            url: 'https://playentry.org/project/5eb8da7bef70170024ef768f',
            rows: 49,
            fields: ['연도', '연평균', '봄', '여름', '가을', '겨울'],
            fieldInfos: [],
            provider: '기상청',
            summary: '우리나라의 연평균 기온과 계절별 평균 기온입니다. (℃)',
            description:
                '우리나라의 연평균 기온과 계절별 평균 기온 변화의 추이를 알 수 있는 데이터입니다. 이 통계는 전국 평균 데이터로 전문 자료가 아닌 참고용으로 사용하는 값으로 지난 49년간의 계절별 기온 변화 현황을 통해 기후 변화 경향을 파악하는데 사용할 수 있습니다. \n전국 평균은 1973년부터 안정적으로 연속관측을 수행한 62개 지점의 평균값을 사용합니다. 계절 구분은 봄(3-5월), 여름(6-8월), 가을(9-11월), 겨울(당해년12-다음해1,2월)로 했습니다.',
            exampleurl: null,
            linkText: '계절에 따라 기온은 어떻게 변화할까?',
            isOpen: true,
            projectTable: {
                _id: '63aaa00af5e7a8001a2fe0e9',
                chart: [],
                fields: ['연도', '연평균', '봄', '여름', '가을', '겨울'],
                type: 'user',
                data: [
                    ['1973', '12.4', '11.6', '24.5', '12.9', '-1.4'],
                    ['1974', '11.4', '10.8', '22.4', '13.0', '-0.1'],
                    ['1975', '12.6', '11.2', '23.9', '15.5', '0.3'],
                    ['1976', '11.7', '10.9', '22.6', '12.5', '-1.7'],
                    ['1977', '12.3', '11.8', '23.5', '15.0', '0.7'],
                    ['1978', '12.8', '11.7', '24.7', '14.3', '2.2'],
                    ['1979', '12.6', '11.2', '23.5', '13.6', '-0.2'],
                    ['1980', '11.2', '11.0', '22.1', '13.4', '-2.3'],
                    ['1981', '11.4', '11.5', '23.6', '12.2', '-0.1'],
                    ['1982', '12.4', '12.0', '23.4', '14.3', '-0.2'],
                    ['1983', '12.3', '12.2', '23.4', '14.2', '-2.1'],
                    ['1984', '11.8', '10.7', '24.3', '13.8', '-0.6'],
                    ['1985', '12.1', '11.5', '24.1', '14.3', '-2.1'],
                    ['1986', '11.5', '11.4', '22.9', '12.6', '1.2'],
                    ['1987', '12.2', '11.1', '23.2', '14.1', '0.3'],
                    ['1988', '12.1', '11.0', '23.6', '13.6', '1.7'],
                    ['1989', '12.8', '12.3', '22.9', '13.7', '1.4'],
                    ['1990', '13.1', '11.7', '24.3', '15.2', '0.2'],
                    ['1991', '12.2', '11.4', '23.4', '13.5', '1.7'],
                    ['1992', '12.4', '11.6', '23.2', '13.4', '1.1'],
                    ['1993', '11.8', '11.1', '21.7', '13.8', '0.5'],
                    ['1994', '13.2', '11.8', '25.3', '14.8', '0.8'],
                    ['1995', '12.0', '11.1', '23.7', '13.4', '-0.6'],
                    ['1996', '12.1', '10.6', '23.5', '14.1', '0.5'],
                    ['1997', '12.7', '12.1', '24.0', '14.0', '1.9'],
                    ['1998', '13.5', '13.4', '23.1', '15.4', '1.6'],
                    ['1999', '12.8', '12.1', '23.3', '14.7', '0.3'],
                    ['2000', '12.5', '11.6', '24.2', '13.7', '0.3'],
                    ['2001', '12.7', '12.2', '24.2', '14.3', '1.5'],
                    ['2002', '12.6', '12.7', '23.1', '12.5', '0.9'],
                    ['2003', '12.5', '11.9', '22.3', '14.7', '1.4'],
                    ['2004', '13.2', '12.2', '24.0', '14.7', '0.5'],
                    ['2005', '12.3', '11.7', '24.1', '14.8', '-0.1'],
                    ['2006', '12.9', '11.5', '23.6', '15.1', '2.4'],
                    ['2007', '13.2', '12.1', '23.8', '14.5', '0.7'],
                    ['2008', '12.9', '12.5', '23.7', '15.1', '1.7'],
                    ['2009', '13.0', '12.6', '23.3', '14.7', '0.5'],
                    ['2010', '12.7', '10.8', '24.9', '14.5', '-0.7'],
                    ['2011', '12.4', '11.0', '24.0', '15.3', '-0.4'],
                    ['2012', '12.3', '12.2', '24.7', '13.7', '-1.0'],
                    ['2013', '12.9', '11.6', '25.4', '14.6', '1.5'],
                    ['2014', '13.1', '13.1', '23.6', '14.9', '0.7'],
                    ['2015', '13.4', '12.7', '23.7', '15.2', '1.4'],
                    ['2016', '13.6', '13.2', '24.8', '15.1', '1.6'],
                    ['2017', '13.1', '13.0', '24.5', '14.2', '-0.8'],
                    ['2018', '13.0', '13.1', '25.4', '13.8', '1.3'],
                    [2019, 13.3, 12.5, 23.9, 15.2, 2.8],
                    [2020, 13, 12, 23.9, 14.1, 0.9],
                    [2021, 13.3, 12.8, 24.2, 14.9, 0.3],
                ],
                name: '계절별 기온_2021.xlsx',
                user: '5f9ab512df5079a03d4611f2',
                created: '2022-12-27T07:34:34.516Z',
                updated: '2022-12-27T07:34:34.516Z',
                __v: 0,
            },
            updated: '2022-12-27T07:34:39.325Z',
            hasOtherTypes: false,
            otherTypes: [],
        },
    ],
};
