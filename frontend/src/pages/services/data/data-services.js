import { useTranslation } from 'react-i18next';
import img7 from './images/img7.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img6 from './images/img6.png';
import introImg1 from './images/material-symbols_security.png';
import introImg2 from './images/material-symbols_security-threat.png';
import introImg3 from './images/ion_bag-check.png';
import introImg4 from './images/material-symbols_security-update-good.png';
import hoverIntroImg1 from './images/material-symbols-security-checked.png';
import hoverIntroImg2 from './images/mdi-shield-bug-checked.png';
import hoverIntroImg3 from './images/ion-bag-checked.png';
import hoverIntroImg4 from './images/material-symbols-security-update-good-checked.png';
import carriedColor from './../../../assets/images/services/desktopColor.png';
import receivedColorImg from '../../../assets/images/services/receivedColor.png';
import processColorImg from '../../../assets/images/services/processColor.png';
import improveColorImg from '../../../assets/images/services/improvementColor.png';
import reviewColorImg from '../../../assets/images/services/reviewColor.png';
import managementColor from '../../../assets/images/services/managementColor.png';
export default function DataServices() {
  const { t } = useTranslation();
  const data = [
    {
      id: 0,
      link: 'managed-security-service',
      intro: t('services-page.intro1'),
      introImg: introImg1,
      hoverIntroImg: hoverIntroImg1,
      imgUrl: img7,
      firstWord: t('services-page.firstWord1'),
      title: t('services-page.title'),
      desc: t('services-page.desc1'),
      content: [
        {
          list: t('services-page.content1.list1'),
        },
        {
          list: t('services-page.content1.list2'),
        },
        {
          list: t('services-page.content1.list3'),
        },
        {
          list: t('services-page.content1.list4'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
      step: [
        {
          imgUrl: carriedColor,
          title: t('services-page.process.service1.step1.title'),
          content: t('services-page.process.service1.step1.content'),
        },
        {
          imgUrl: receivedColorImg,
          title: t('services-page.process.service1.step2.title'),
          content: t('services-page.process.service1.step2.content'),
        },
        {
          imgUrl: processColorImg,
          title: t('services-page.process.service1.step3.title'),
          content: t('services-page.process.service1.step3.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service1.step4.title'),
          content: t('services-page.process.service1.step4.content'),
        },
        {
          imgUrl: reviewColorImg,
          title: t('services-page.process.service1.step5.title'),
          content: t('services-page.process.service1.step5.content'),
        },
        {
          imgUrl: managementColor,
          title: t('services-page.process.service1.step6.title'),
          content: t('services-page.process.service1.step6.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service1.step7.title'),
          content: t('services-page.process.service1.step7.content'),
        },
        {
          imgUrl: managementColor,
          title: t('services-page.process.service1.step8.title'),
          content: t('services-page.process.service1.step8.content'),
        },
      ],
    },
    {
      id: 1,
      link: 'threat-hunting',
      intro: t('services-page.intro2'),
      introImg: introImg2,
      hoverIntroImg: hoverIntroImg2,
      imgUrl: img2,
      firstWord: t('services-page.firstWord2'),
      title: t('services-page.title'),
      desc: t('services-page.desc2'),
      content: [
        {
          list: t('services-page.content2.list1'),
        },
        {
          list: t('services-page.content2.list2'),
        },
        {
          list: t('services-page.content2.list3'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
      step: [
        {
          imgUrl: carriedColor,
          title: t('services-page.process.service2.step1.title'),
          content: t('services-page.process.service2.step1.content'),
        },
        {
          imgUrl: receivedColorImg,
          title: t('services-page.process.service2.step2.title'),
          content: t('services-page.process.service2.step2.content'),
        },
        {
          imgUrl: processColorImg,
          title: t('services-page.process.service2.step3.title'),
          content: t('services-page.process.service2.step3.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service2.step4.title'),
          content: t('services-page.process.service2.step4.content'),
        },
        {
          imgUrl: reviewColorImg,
          title: t('services-page.process.service2.step5.title'),
          content: t('services-page.process.service2.step5.content'),
        },
        {
          imgUrl: managementColor,
          title: t('services-page.process.service2.step6.title'),
          content: t('services-page.process.service2.step6.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service2.step7.title'),
          content: t('services-page.process.service2.step7.content'),
        },
      ],
    },
    {
      id: 2,
      link: 'pentest-and-audit',
      intro: t('services-page.intro3'),
      introImg: introImg3,
      hoverIntroImg: hoverIntroImg3,
      imgUrl: img3,
      firstWord: t('services-page.firstWord3'),
      desc: t('services-page.desc3'),
      content: [
        {
          list: t('services-page.content3.list1'),
        },
        {
          list: t('services-page.content3.list2'),
        },
        {
          list: t('services-page.content3.list3'),
        },
        {
          list: t('services-page.content3.list4'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
      step: [
        {
          imgUrl: carriedColor,
          title: t('services-page.process.service3.step1.title'),
          content: t('services-page.process.service3.step1.content'),
        },
        {
          imgUrl: receivedColorImg,
          title: t('services-page.process.service3.step2.title'),
          content: t('services-page.process.service3.step2.content'),
        },
        {
          imgUrl: processColorImg,
          title: t('services-page.process.service3.step3.title'),
          content: t('services-page.process.service3.step3.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service3.step4.title'),
          content: t('services-page.process.service3.step4.content'),
        },
        {
          imgUrl: reviewColorImg,
          title: t('services-page.process.service3.step5.title'),
          content: t('services-page.process.service3.step5.content'),
        },
        {
          imgUrl: managementColor,
          title: t('services-page.process.service3.step6.title'),
          content: t('services-page.process.service3.step6.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service3.step7.title'),
          content: t('services-page.process.service3.step7.content'),
        },
        {
          imgUrl: managementColor,
          title: t('services-page.process.service3.step8.title'),
          content: t('services-page.process.service3.step8.content'),
        },
      ],
    },
    {
      id: 3,
      link: 'application-security',
      intro: t('services-page.intro4'),
      introImg: introImg4,
      hoverIntroImg: hoverIntroImg4,
      imgUrl: img6,
      firstWord: t('services-page.firstWord4'),
      title: t('services-page.title'),
      desc: t('services-page.desc4'),
      content: [
        {
          list: t('services-page.content4.list1'),
        },
        {
          list: t('services-page.content4.list2'),
        },
        {
          list: t('services-page.content4.list3'),
        },
        {
          list: t('services-page.content4.list4'),
        },
      ],
      endTitle: t('services-page.endTitle'),
      endWord: t('services-page.endWord'),
      step: [
        {
          imgUrl: carriedColor,
          title: t('services-page.process.service4.step1.title'),
          content: t('services-page.process.service4.step1.content'),
        },
        {
          imgUrl: receivedColorImg,
          title: t('services-page.process.service4.step2.title'),
          content: t('services-page.process.service4.step2.content'),
        },
        {
          imgUrl: processColorImg,
          title: t('services-page.process.service4.step3.title'),
          content: t('services-page.process.service4.step3.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service4.step4.title'),
          content: t('services-page.process.service4.step4.content'),
        },
        {
          imgUrl: reviewColorImg,
          title: t('services-page.process.service4.step5.title'),
          content: t('services-page.process.service4.step5.content'),
        },
        {
          imgUrl: managementColor,
          title: t('services-page.process.service4.step6.title'),
          content: t('services-page.process.service4.step6.content'),
        },
        {
          imgUrl: improveColorImg,
          title: t('services-page.process.service4.step7.title'),
          content: t('services-page.process.service4.step7.content'),
        },
      ],
    },
  ];
  return { data };
}
