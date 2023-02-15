import Head from 'next/head';
import Image from 'next/image';
import { MenuProps } from "antd";
import { Layout, theme, Typography, Menu, Row, Col, Avatar, Space, List, Card, Timeline, Tag, Alert } from "antd";
import Link from 'next/link';
import { UserOutlined, IdcardOutlined, ClockCircleOutlined, GithubOutlined } from "@ant-design/icons"

const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const gnbItems: MenuProps['items'] = [
  {
    'key': '1',
    'label': (
      <Link href="/">Portfolio</Link>
    )
  },
  {
    'key': '2',
    'label': (
      <Link href="/About">About me</Link>
    )
  }
];

const { Meta } = Card;

const myData = [
  {
    title: '김 진태',
    description: 'Jintae kim'
  },
  {
    title: 'Contact',
    description: (
      <Paragraph type="secondary">
        vuenos@gmail.com<br />
        +82 10-4860-6521
      </Paragraph>
    )
  }
];

const year2023 = [
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">셀러허브 2023 .02</Tag>),
    children: '현재 재직 중',
    color: 'green',
  },
  {
    label: (<Tag color="purple">셀러허브 2022 .04</Tag>),
    children:
      <>
        <Paragraph>
          셀러허브 공식 홈페이지 개편<br />
          셀러허브 3.0 API 를 활용하여 REST 아키텍쳐 구현(Restful)<br />
          <a href="https://sellerhub.co.kr/" target="_blank" rel="noreferrer">https://sellerhub.co.kr</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">React</Tag>
          <Tag color="red">Typescript</Tag>
          <Tag color="red">SCSS</Tag>
          <Tag color="red">npm, webpack</Tag>
        </Paragraph>
      </>
    ,
  },
  {
    label: (<Tag color="purple">셀러허브 2021 .09</Tag>),
    children: (
      <>
        <Paragraph>
          dropk(beta) - 한국 제품을 미국으로 판매하는 드랍쉬핑 개념의 플랫폼<br />
          blade template 과 javaScript
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">blade template</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">셀러허브 2021 .06</Tag>),
    children: (
      <>
        <Paragraph>
          shopify 기반 &quot;올타리 몰&quot; 온라인 쇼핑몰 구축 참여(Front, UI)<br />
          <a href="https://wooltariusa.com" target="_blank" rel="noreferrer">https://wooltariusa.com</a><br />
        </Paragraph>
        <Paragraph>
          <Tag color="red">liquid</Tag>
          <Tag color="red">shopify CLI</Tag>
          <Tag color="red">javaScript</Tag>
        </Paragraph>
      </>
    ),
  },
];


const year2021 = [
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">2021 .03</Tag>),
    color: 'green',
    children: (
      <>
        <Paragraph>
          고용보험 민원서비스 고도화(web, mobile)<br />
          실업급여 인터넷 신청 단계별 UI 를 javaScript 로 구현<br />
          <a href="https://www.ei.go.kr" target="_blank" rel="noreferrer">https://www.ei.go.kr</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript, jQuery</Tag>
          <Tag color="red">HTML5</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    label: (<Tag color="purple">2020 .10 ~ 2021. 02</Tag>),
    children:
      <>
        <Paragraph>
          고용노동부 직업훈련 포털 HRD-Net 고도화(Web, Mobile)<br />
          훈련과정 선택 Flow 와 애니메이션을 javaScript 와 CSS 로 구현<br />
          <a href="https://www.hrd.go.kr" target="_blank" rel="noreferrer">https://www.hrd.go.kr</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML5</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ,
    color: 'green',
  },
  {
    label: (<Tag color="purple">2020 .05</Tag>),
    children:
      <>
        <Paragraph>
          올리브영 사내 직원 커뮤니티(Web, Mobile, App view)<br />
          React 프론트 개발을 위한 컴포넌트 제작 및 스타일링<br />
        </Paragraph>
        <Paragraph>
          <Tag color="red">React</Tag>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ,
  },
  {
    label: (<Tag color="purple">2019 .11</Tag>),
    children: (
      <>
        <Paragraph>
          EBSi LMS 고도화(Table, Mobile)<br />
          강사별 온라인 강의 영상 Player UI 와 컨트롤 제어 구현<br />
          <a href="https://www.ebsi.co.kr" target="_blank" rel="noreferrer">https://www.ebsi.co.kr</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML5</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    label: (<Tag color="purple">2019 .05 ~ 10</Tag>),
    children: (
      <>
        <Paragraph>
          제주에어 crew 온라인 업무관리 포털 구축<br />
          Web, Tablet, Mobile 반응형 UI 를 구현, TOAST UI 로 기능별 UI 구현(캘린더, 데이터 테이블, 입력화면 등)
        </Paragraph>
        <Paragraph>
          <Tag color="red">TOAST UI</Tag>
          <Tag color="red">javaScript</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    label: (<Tag color="purple">2019 .02</Tag>),
    children: (
      <>
        <Paragraph>
          KDB 캐피탈 카드 웹사이트 고도화 및 웹접근성 인증마크 획득<br />
          웹접근성 인증마크 획득을 위한 Navigation, Form, <br />
          <a href="https://www.kdbc.co.kr/" target="_blank" rel="noreferrer">https://www.kdbc.co.kr</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript, jQuery</Tag>
          <Tag color="red">HTML5</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    label: (<Tag color="purple">2018 .11</Tag>),
    children: (
      <>
        <Paragraph>
          L-Pay<br />
          Mobile UI 작업. javaScript Interaction 구현.<br />
          <a href="https://www.lpoint.com/" target="_blank" rel="noreferrer">https://www.lpoint.com</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript, jQuery</Tag>
          <Tag color="red">HTML5</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">2018 .02</Tag>),
    children: (
      <>
        <Paragraph>
          커피 앤 베이커리 프랜차이즈, THEBAKE 브랜딩 사이트 구축<br />
          <a href="http://thebake.co.kr/" target="_blank" rel="noreferrer">http://thebake.co.kr</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML5</Tag>
          <Tag color="red">CSS3</Tag>
          <Tag color="red">그누보드</Tag>
        </Paragraph>
      </>
    ),
  },
];

const year2012 = [
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">2016 .12</Tag>),
    children:
      <>
        <Paragraph>
          서울시립대 건축공학과 오픈아카이브 시스템 고도화<br />
          Project Manager, 아카이브 post UI 반응형 javaScript 로 동적 구현
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ,
    color: 'green',
  },
  {
    label: (<Tag color="purple">2015 .02</Tag>),
    children:
      <>
        <Paragraph>
          ALAND 온라인 쇼핑몰 글로벌 사이트 구축(영문, 중문)<br />
          고도몰 솔루션으로 영문, 중문 사이트 구축함.<br />
        </Paragraph>
        <Paragraph>
          <Tag color="red">고도몰</Tag>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML5</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ,
  },
  {
    label: (<Tag color="purple">2014 .09</Tag>),
    children: (
      <>
        <Paragraph>
          TNGT 2015 브랜딩 사이트 구축<br />
          워드프레스를 이용하여 브랜딩 사이트 및 블로그 구축<br />
        </Paragraph>
        <Paragraph>
          <Tag color="red">워드프레스</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    label: (<Tag color="purple">2014 .06</Tag>),
    children: (
      <>
        <Paragraph>
          카페24 솔루션을 이용하여 아이웨어 브랜드 PROJEKTPRODUKT 온라인몰 구축<br />
          <a href="https://projektprodukt.co.kr/" target="_blank" rel="noreferrer">https://projektprodukt.co.kr</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">카페24</Tag>
          <Tag color="red">javaScript</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    label: (<Tag color="purple">2012 .11</Tag>),
    children: (
      <>
        <Paragraph>
          정림재단 사이트 워드프레스로 구축<br />
          <a href="http://junglim.org/" target="_blank" rel="noreferrer">http://junglim.org/</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">Wordpress</Tag>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">2012 .05</Tag>),
    children: (
      <>
        <Paragraph>
          A.P.C 아페세 코리아 온라인몰을 고도몰 솔루션을 이용하여 구축<br />
        </Paragraph>
        <Paragraph>
          <Tag color="red">고도몰</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
];


const year2004 = [
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">2011 .11</Tag>),
    children:
      <>
        <Paragraph>
          한국무역협회 KITA, Web, Mobile 사이트 구축<br />
          반응형 UI 구축 및 웹접근성 개선작업<br />
          <a href="https://www.kita.net/" target="_blank" rel="noreferrer">https://www.kita.net</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">Web Accessibility</Tag>
          <Tag color="red">Web 2.0</Tag>
          <Tag color="red">HTML4</Tag>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ,
    color: 'green',
  },
  {
    label: (<Tag color="purple">2010 .07</Tag>),
    children:
      <>
        <Paragraph>
          롯데칠성음료 기업, 브랜딩 사이트 고도화<br />
          웹접근성 개선을 위한 네비게이션과 메인페이지 interaction 을 javaScript 로 구현<br />
        </Paragraph>
        <Paragraph>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML4</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ,
  },
  {
    label: (<Tag color="purple">2006 .12 ~ 2009. 06</Tag>),
    children: (
      <>
        <Paragraph>
          국민연금관리공단, 건강보험심사원, KB, 삼성애니카, 증권사, 삼성 USA 등의<br />
          웹접근성 개선 및 웹표준 UI 구현.
        </Paragraph>
        <Paragraph>
          <Tag color="red">Web Accessibility</Tag>
          <Tag color="red">Web 2.0</Tag>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML4</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    label: (<Tag color="purple">2006 .9</Tag>),
    children: (
      <>
        <Paragraph>
          SK 싸이월드2 통합 서비스 웹표준화 적용<br />
          서비스 UI에 웹표준 및 웹접근성 적용을 위한 리팩토링<br />
          <a href="https://www.cyworld.com/" target="_blank" rel="noreferrer">https://www.cyworld.com</a>
        </Paragraph>
        <Paragraph>
          <Tag color="red">Web Accessibility</Tag>
          <Tag color="red">Web 2.0</Tag>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML4</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">2004 .05 ~ 2006 .06</Tag>),
    children: (
      <>
        <Paragraph>
          신한증권, 한국방송통신대학교, 삼성화재, SBS, LG카드 웹표준화 적용을 위한 고도화 및 리팩토링<br />
        </Paragraph>
        <Paragraph>

          <Tag color="red">Web Accessibility</Tag>
          <Tag color="red">Web 2.0</Tag>
          <Tag color="red">javaScript</Tag>
          <Tag color="red">HTML4</Tag>
          <Tag color="red">CSS3</Tag>
        </Paragraph>
      </>
    ),
  },
];

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Head>
        <title>Jintae Kim</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout className="layout" style={{ background: '#f5f5f5' }}>
          <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', padding: 0, background: colorBgContainer }}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={gnbItems}
            />
          </Header>
          <Content style={{ padding: '24px' }}>
            <Row
              gutter={[16, 16]}
            >
              <Col md={12} sm={24}>
                <Card bordered={false}>
                  <Meta
                    avatar={<Avatar src="/jtk.jpg" style={{ width: '120px' }} size={120} />}
                    title="김 진태"
                    description={
                      <Paragraph type="secondary">
                        Jintae Kim<br />
                        <a href="mailto:vuenos@gmail.com">vuenos@gmail.com</a><br />
                        +82 10-4860-6521<br />
                        <GithubOutlined /> <a href="https://github.com/vuenos" target="_blank" rel="noreferrer">https://github.com/vuenos</a>
                      </Paragraph>
                    }
                  />
                </Card>
              </Col>

              <Col md={12} sm={24}>
                <Card size="small" bordered={false}>
                  <Meta
                    title="Skills"
                    description={
                      <Paragraph type="secondary" style={{ lineHeight: '2.1em' }}>
                        <Tag color="red">React</Tag>
                        <Tag color="red">javaScript</Tag>
                        <Tag color="red">HTML5</Tag>
                        <Tag color="red">CSS3</Tag>
                        <Tag color="red">SCSS</Tag>
                        <Tag color="red">Antd</Tag>
                        <Tag color="red">ReactQuery</Tag>
                        <Tag color="red">git</Tag>

                        <Tag color="blue">Redux, Recoil</Tag>
                        <Tag color="blue">Next.js</Tag>
                        <Tag color="blue">TypeScript</Tag>
                        <Tag color="blue">bootstrap</Tag>
                        <Tag color="blue">Zeplin</Tag>
                        <Tag color="blue">Figma</Tag>

                        <Tag color="green">npm</Tag>
                        <Tag color="green">webpack</Tag>
                      </Paragraph>
                    }
                  />
                </Card>
              </Col>
            </Row>

            <Row
              gutter={[16, 16]}
              style={{ marginTop: '24px', padding: 0, minHeight: 380, background: '#f5f5f5' }}
            >
              <Col span={24} lg={12}>
                <Card
                  title={<Title level={4} style={{ margin: '0' }}>2021 ~ 2023 <Text type="secondary">(셀러허브, 팀장)</Text></Title>}
                  bordered={false}
                >
                  <Alert
                    message="프론트엔드팀 구성하여 팀셀러허브의 운영 및 개선 관련 프론트 업무를 진행"
                    type="info"
                    showIcon
                    style={{ marginBottom: '24px' }}
                  />
                  <Timeline
                    mode="alternate"
                    items={year2023}
                  />
                </Card>
              </Col>

              <Col span={24} lg={12}>
                <Card title={<Title level={4} style={{ margin: '0' }}>2018 ~ 2021 <Text type="secondary">(프리렌서)</Text></Title>} extra={<Text type="secondary">(주요 프로젝트만 기술함)</Text>} bordered={false}>
                  <Alert
                    message="관공서, 금융, 항공사 프로젝트 진행함. 주로 Web, Mobile 반응형 UI 구현과 웹접근성 인증마크 획득"
                    type="info"
                    showIcon
                    style={{ marginBottom: '24px' }}
                  />
                  <Timeline
                    mode="alternate"
                    items={year2021}
                  />
                </Card>
              </Col>

              <Col span={24} lg={12}>
                <Card title={<Title level={4} style={{ margin: '0' }}>2012 ~ 2017 <Text type="secondary">(코즈믹웹, Owner)</Text></Title>} extra={<Text type="secondary">(주요 프로젝트만 기술함)</Text>} bordered={false}>
                  <Alert
                    message="개인 창업 후 고도몰, 카페24 솔루션으로 쇼핑몰 구축과 워드프레스로 웹사이트 구축을 주로 함. Web + Mobile Responsive UI 를 주로 구현 함."
                    type="info"
                    showIcon
                    style={{ marginBottom: '24px' }}
                  />
                  <Timeline
                    mode="alternate"
                    items={year2012}
                  />
                </Card>
              </Col>

              <Col span={24} lg={12}>
                <Card title={<Title level={4} style={{ margin: '0' }}>2004 ~ 2011 <Text type="secondary">(스타일**, 팀장)</Text></Title>} extra={<Text type="secondary">(주요 프로젝트만 기술함)</Text>} bordered={false}>
                  <Alert
                    message="관공서, 기업, 금융, 방송국 등의 웹접근성 인증마크 및 웹표준(웹 2.0) 개선 관련 컨설팅과 리팩토링 업무를 주로 함."
                    type="info"
                    showIcon
                    style={{ marginBottom: '24px' }}
                  />
                  <Timeline
                    mode="alternate"
                    items={year2004}
                  />
                </Card>
              </Col>
            </Row>

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Paragraph type="secondary">©2023 Jintae kim</Paragraph>
            <Paragraph type="secondary">
              이 페이지는 <a href="https://ko.reactjs.org/" target="_blank" rel="noreferrer">React 18</a>, <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a>, <a href="https://nextjs.org/blog/next-13" target="_blank" rel="noreferrer">Next.js 13</a> 과 <a href="https://ant.design" target="_blank" rel="noreferrer">Antd</a> 로 제작되었습니다.
            </Paragraph>
          </Footer>
        </Layout>
      </main>
    </>
  )
}
