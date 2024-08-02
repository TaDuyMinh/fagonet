import { useTranslation } from 'react-i18next';
import mohinhImg from '../../../assets/images/solutions/mo-hinh.png';
import mohinhProxyImg from '../../../assets/images/solutions/mo-hinh-proxy.png';
export default function DataSolutions() {
  const { t } = useTranslation();
  const data = [
    {
      //SIEM
      id: 0,
      link: 'siem',
      title: 'SIEM',
      intro: t('intro.siem'),
      details: [
        {
          imgUrl: '',
          step: t('SIEM.title1'),
          content: [
            {
              list: t('SIEM.content1'),
            },
            {
              list: t('SIEM.content2'),
            },
            {
              list: t('SIEM.content3'),
            },
            {
              list: t('SIEM.content4'),
            },
            {
              list: t('SIEM.content5'),
            },
            {
              list: t('SIEM.content6'),
            },
            {
              list: t('SIEM.content7'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SIEM.title2'),
          content: [
            {
              list: t('SIEM.content8'),
            },
            {
              list: t('SIEM.content9'),
            },
            {
              list: t('SIEM.content10'),
            },
            {
              list: t('SIEM.content11'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SIEM.title3'),
          content: [
            {
              list: t('SIEM.content12'),
            },
            {
              list: t('SIEM.content13'),
            },
            {
              list: t('SIEM.content14'),
            },
            {
              list: t('SIEM.content15'),
            },
            {
              list: t('SIEM.content16'),
            },
            {
              list: t('SIEM.content17'),
            },
            {
              list: t('SIEM.content18'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SIEM.title4'),
          content: [
            {
              list: t('SIEM.content19'),
            },
            {
              list: t('SIEM.content20'),
            },
            {
              list: t('SIEM.content21'),
            },
            {
              list: t('SIEM.content22'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SIEM.title5'),
          content: [
            {
              list: t('SIEM.content23'),
            },
            {
              list: t('SIEM.content24'),
            },
            {
              list: t('SIEM.content25'),
            },
            {
              list: t('SIEM.content26'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SIEM.title6'),
          content: [
            {
              list: t('SIEM.content27'),
            },
            {
              list: t('SIEM.content28'),
            },
            {
              list: t('SIEM.content29'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SIEM.title7'),
          content: [
            {
              list: t('SIEM.content30'),
            },
            {
              list: t('SIEM.content31'),
            },
            {
              list: t('SIEM.content32'),
            },
            {
              list: t('SIEM.content33'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SIEM.title8'),
          content: [
            {
              list: t('SIEM.content34'),
            },
            {
              list: t('SIEM.content35'),
            },
            {
              list: t('SIEM.content36'),
            },
            {
              list: t('SIEM.content37'),
            },
            {
              list: t('SIEM.content38'),
            },
            {
              list: t('SIEM.content39'),
            },
            {
              list: t('SIEM.content40'),
            },
            {
              list: t('SIEM.content41'),
            },
            {
              list: t('SIEM.content42'),
            },
          ],
        },
      ],
    },
    //WAF
    {
      id: 1,
      link: 'waf',
      title: 'WAF',
      intro: t('intro.waf'),
      details: [
        {
          imgUrl: '',
          step: t('WAF.title1'),
          content: [
            {
              list: t('WAF.content1'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('WAF.title2'),
          content: [
            {
              list: t('WAF.content2'),
            },
            {
              list: t('WAF.content3'),
            },
            {
              list: t('WAF.content4'),
            },
            {
              list: t('WAF.content5'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('WAF.title3'),
          content: [
            {
              list: t('WAF.content9'),
            },
            {
              list: t('WAF.content10'),
            },
            {
              list: t('WAF.content11'),
            },
            {
              list: t('WAF.content12'),
            },
            {
              list: t('WAF.content13'),
            },
            {
              list: t('WAF.content14'),
            },
            {
              list: t('WAF.content15'),
            },
            {
              list: t('WAF.content16'),
            },
            {
              list: t('WAF.content17'),
            },
            {
              list: t('WAF.content18'),
            },
            {
              list: t('WAF.content19'),
            },
            {
              list: t('WAF.content20'),
            },
            {
              list: t('WAF.content21'),
            },
            {
              list: t('WAF.content22'),
            },
            {
              list: t('WAF.content23'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('WAF.title4'),
          content: [
            {
              list: t('WAF.content6'),
            },
            {
              list: t('WAF.content7'),
            },
            {
              list: t('WAF.content8'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('WAF.title5'),
          content: [
            {
              list: t('WAF.content24'),
            },
            {
              list: t('WAF.content25'),
            },
            {
              list: t('WAF.content26'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('WAF.title6'),
          content: [
            {
              list: t('WAF.content27'),
            },
            {
              list: t('WAF.content28'),
            },
            {
              list: t('WAF.content29'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('WAF.title7'),
          content: [
            {
              list: t('WAF.content30'),
            },
            {
              list: t('WAF.content31'),
            },
            {
              list: t('WAF.content32'),
            },
            {
              list: t('WAF.content33'),
            },
            {
              list: t('WAF.content34'),
            },
            {
              list: t('WAF.content35'),
            },
            {
              list: t('WAF.content36'),
            },
            {
              list: t('WAF.content37'),
            },
            {
              list: t('WAF.content38'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('WAF.title8'),
          content: [
            {
              list: t('WAF.content39'),
            },
            {
              list: t('WAF.content40'),
            },
            {
              list: t('WAF.content41'),
            },
            {
              list: t('WAF.content42'),
            },
            {
              list: t('WAF.content43'),
            },
          ],
        },
      ],
    },
    //NIPS
    {
      id: 2,
      link: 'nips',
      title: 'NIPS',
      intro: t('intro.nips'),
      details: [
        {
          imgUrl: '',
          step: t('NIPS.title1'),
          content: [
            {
              list: t('NIPS.content1'),
            },
            {
              list: t('NIPS.content2'),
            },
            {
              list: t('NIPS.content3'),
            },
            {
              list: t('NIPS.content4'),
            },
            {
              list: t('NIPS.content5'),
            },
            {
              list: t('NIPS.content6'),
            },
            {
              list: t('NIPS.content7'),
            },
            {
              list: t('NIPS.content8'),
            },
            {
              list: t('NIPS.content9'),
            },
            {
              list: t('NIPS.content10'),
            },
            {
              list: t('NIPS.content11'),
            },
            {
              list: t('NIPS.content12'),
            },
            {
              list: t('NIPS.content13'),
            },
            {
              list: t('NIPS.content14'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIPS.title2'),
          content: [
            {
              list: t('NIPS.content15'),
            },
            {
              list: t('NIPS.content16'),
            },
            {
              list: t('NIPS.content17'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIPS.title3'),
          content: [
            {
              list: t('NIPS.content20'),
            },
            {
              list: t('NIPS.content21'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIPS.title4'),
          content: [
            {
              list: t('NIPS.content22'),
            },
            {
              list: t('NIPS.content23'),
            },
            {
              list: t('NIPS.content24'),
            },
            {
              list: t('NIPS.content25'),
            },
            {
              list: t('NIPS.content26'),
            },
            {
              list: t('NIPS.content27'),
            },
            {
              list: t('NIPS.content28'),
            },
          ],
        },
      ],
    },
    //EDR
    {
      id: 3,
      link: 'edr',
      title: 'EDR',
      intro: t('intro.edr'),
      details: [
        {
          imgUrl: '',
          step: t('EDR.title1'),
          content: [
            {
              list: t('EDR.content1'),
            },
            {
              list: t('EDR.content2'),
            },
            {
              list: t('EDR.content3'),
            },
            {
              list: t('EDR.content4'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('EDR.title2'),
          content: [
            {
              list: t('EDR.content5'),
            },
            {
              list: t('EDR.content6'),
            },
            {
              list: t('EDR.content7'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('EDR.title3'),
          content: [
            {
              list: t('EDR.content8'),
            },
            {
              list: t('EDR.content9'),
            },
            {
              list: t('EDR.content10'),
            },
            {
              list: t('EDR.content11'),
            },
            {
              list: t('EDR.content12'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('EDR.title4'),
          content: [
            {
              list: t('EDR.content13'),
            },
            {
              list: t('EDR.content14'),
            },
            {
              list: t('EDR.content15'),
            },
            {
              list: t('EDR.content16'),
            },
            {
              list: t('EDR.content17'),
            },
            {
              list: t('EDR.content18'),
            },
            {
              list: t('EDR.content19'),
            },
            {
              list: t('EDR.content20'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('EDR.title5'),
          content: [
            {
              list: t('EDR.content21'),
            },
            {
              list: t('EDR.content22'),
            },
            {
              list: t('EDR.content23'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('EDR.title6'),
          content: [
            {
              list: t('EDR.content24'),
            },
            {
              list: t('EDR.content25'),
            },
            {
              list: t('EDR.content26'),
            },
            {
              list: t('EDR.content27'),
            },
            {
              list: t('EDR.content28'),
            },
            {
              list: t('EDR.content29'),
            },
            {
              list: t('EDR.content30'),
            },
            {
              list: t('EDR.content31'),
            },
            {
              list: t('EDR.content32'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('EDR.title7'),
          content: [
            {
              list: t('EDR.content33'),
            },
            {
              list: t('EDR.content34'),
            },
            {
              list: t('EDR.content35'),
            },
            {
              list: t('EDR.content36'),
            },
            {
              list: t('EDR.content37'),
            },
            {
              list: t('EDR.content38'),
            },
            {
              list: t('EDR.content39'),
            },
          ],
        },
      ],
    },
    //Nac
    {
      id: 4,
      link: 'nac',
      title: 'NAC',
      intro: t('intro.nac'),
      details: [
        {
          imgUrl: '',
          step: t('NAC.title1'),
          content: [
            {
              list: t('NAC.content1'),
            },
            {
              list: t('NAC.content2'),
            },
            {
              list: t('NAC.content3'),
            },
            {
              list: t('NAC.content4'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NAC.title2'),
          content: [
            {
              list: t('NAC.content5'),
            },
            {
              list: t('NAC.content6'),
            },
            {
              list: t('NAC.content7'),
            },
            {
              list: t('NAC.content8'),
            },
            {
              list: t('NAC.content9'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NAC.title3'),
          content: [
            {
              list: t('NAC.content10'),
            },
            {
              list: t('NAC.content11'),
            },
            {
              list: t('NAC.content12'),
            },
            {
              list: t('NAC.content13'),
            },
            {
              list: t('NAC.content14'),
            },
            {
              list: t('NAC.content15'),
            },
            {
              list: t('NAC.content16'),
            },
            {
              list: t('NAC.content17'),
            },
            {
              list: t('NAC.content18'),
            },
            {
              list: t('NAC.content19'),
            },
            {
              list: t('NAC.content20'),
            },
            {
              list: t('NAC.content21'),
            },
            {
              list: t('NAC.content22'),
            },
            {
              list: t('NAC.content23'),
            },
          ],
        },
      ],
    },
    //NIDS
    {
      id: 5,
      link: 'nids',
      title: 'NIDS',
      intro: t('intro.nids'),
      details: [
        {
          imgUrl: '',
          step: t('NIDS.title1'),
          content: [
            {
              list: t('NIDS.content1'),
            },
            {
              list: t('NIDS.content2'),
            },
            {
              list: t('NIDS.content3'),
            },
            {
              list: t('NIDS.content4'),
            },
            {
              list: t('NIDS.content5'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIDS.title2'),
          content: [
            {
              list: t('NIDS.content6'),
            },
            {
              list: t('NIDS.content7'),
            },
            {
              list: t('NIDS.content8'),
            },
            {
              list: t('NIDS.content9'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIDS.title3'),
          content: [
            {
              list: t('NIDS.content10'),
            },
            {
              list: t('NIDS.content11'),
            },
            {
              list: t('NIDS.content12'),
            },
            {
              list: t('NIDS.content13'),
            },
            {
              list: t('NIDS.content14'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIDS.title4'),
          content: [
            {
              list: t('NIDS.content15'),
            },
            {
              list: t('NIDS.content16'),
            },
            {
              list: t('NIDS.content17'),
            },
            {
              list: t('NIDS.content18'),
            },
            {
              list: t('NIDS.content19'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIDS.title5'),
          content: [
            {
              list: t('NIDS.content20'),
            },
            {
              list: t('NIDS.content21'),
            },
            {
              list: t('NIDS.content22'),
            },
            {
              list: t('NIDS.content23'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('NIDS.title6'),
          content: [
            {
              list: t('NIDS.content24'),
            },
            {
              list: t('NIDS.content25'),
            },
            {
              list: t('NIDS.content26'),
            },
            {
              list: t('NIDS.content27'),
            },
          ],
        },
      ],
    },
    //DIP
    {
      id: 6,
      link: 'dip',
      title: 'DIP',
      intro: t('intro.dip'),
      details: [
        {
          imgUrl: '',
          step: t('DIP.title1'),
          content: [
            {
              list: t('DIP.content1'),
            },
            {
              list: t('DIP.content2'),
            },
            {
              list: t('DIP.content3'),
            },
            {
              list: t('DIP.content4'),
            },
            {
              list: t('DIP.content5'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('DIP.title2'),
          content: [
            {
              list: t('DIP.content6'),
            },
            {
              list: t('DIP.content7'),
            },
            {
              list: t('DIP.content8'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('DIP.title3'),
          content: [
            {
              list: t('DIP.content9'),
            },
            {
              list: t('DIP.content10'),
            },
            {
              list: t('DIP.content11'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('DIP.title4'),
          content: [
            {
              list: t('DIP.content12'),
            },
            {
              list: t('DIP.content13'),
            },
            {
              list: t('DIP.content14'),
            },
            {
              list: t('DIP.content15'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('DIP.title5'),
          content: [
            {
              list: t('DIP.content16'),
            },
            {
              list: t('DIP.content17'),
            },
            {
              list: t('DIP.content18'),
            },
            {
              list: t('DIP.content19'),
            },
          ],
        },
      ],
    },
    //SWL3
    {
      id: 7,
      link: 'swl3',
      title: 'SWL3',
      intro: t('intro.swl3'),
      details: [
        {
          imgUrl: '',
          step: t('SWL3.title1'),
          content: [
            {
              list: t('SWL3.content1'),
            },
            {
              list: t('SWL3.content2'),
            },
            {
              list: t('SWL3.content3'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('SWL3.title2'),
          content: [
            {
              list: t('SWL3.content4'),
            },
            {
              list: t('SWL3.content5'),
            },
            {
              list: t('SWL3.content6'),
            },
            {
              list: t('SWL3.content7'),
            },
            {
              list: t('SWL3.content8'),
            },
            {
              list: t('SWL3.content9'),
            },
            {
              list: t('SWL3.content10'),
            },
            {
              list: t('SWL3.content11'),
            },
          ],
        },
      ],
    },
    // DBFW
    {
      id: 8,
      link: 'dbfw',
      title: 'DBFW',
      intro: t('intro.dbfw'),
      details: [
        {
          imgUrl: '',
          step: t('DBFW.title1'),
          content: [
            {
              list: t('DBFW.content1'),
            },
            {
              list: t('DBFW.content2'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('DBFW.title2'),
          content: [
            {
              list: t('DBFW.content3'),
            },
            {
              list: t('DBFW.content4'),
            },
            {
              list: t('DBFW.content5'),
            },
            {
              list: t('DBFW.content6'),
            },
          ],
        },
        {
          imgUrl: mohinhImg,
          step: t('DBFW.title3'),
          content: [
            {
              list: t('DBFW.content7'),
            },
            {
              list: t('DBFW.content8'),
            },
            {
              list: t('DBFW.content9'),
            },
            {
              list: t('DBFW.content10'),
            },
            {
              list: t('DBFW.content11'),
            },
            {
              list: t('DBFW.content12'),
            },
          ],
        },
        {
          imgUrl: mohinhProxyImg,
          step: t('DBFW.title4'),
          content: [
            {
              list: t('DBFW.content13'),
            },
            {
              list: t('DBFW.content14'),
            },
            // {
            //   list: t('DBFW.content15'),
            // },
            {
              list: t('DBFW.content16'),
            },
            {
              list: t('DBFW.content17'),
            },
            {
              list: t('DBFW.content18'),
            },
            {
              list: t('DBFW.content19'),
            },
            {
              list: t('DBFW.content20'),
            },
            {
              list: t('DBFW.content21'),
            },
            {
              list: t('DBFW.content22'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('DBFW.title5'),
          content: [
            {
              list: t('DBFW.content23'),
            },
            {
              list: t('DBFW.content24'),
            },
            {
              list: t('DBFW.content25'),
            },
            {
              list: t('DBFW.content26'),
            },
            {
              list: t('DBFW.content27'),
            },
            {
              list: t('DBFW.content28'),
            },
          ],
        },
        {
          imgUrl: '',
          step: t('DBFW.title5'),
          content: [
            {
              list: t('DBFW.content29'),
            },
            {
              list: t('DBFW.content30'),
            },
            {
              list: t('DBFW.content31'),
            },
            {
              list: t('DBFW.content32'),
            },
          ],
        },
      ],
    },
  ];
  return { data };
}
