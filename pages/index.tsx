import Head from 'next/head';
import Image from 'next/image';
import { MenuProps } from "antd";
import { Layout, theme, Typography, Menu, Row, Col, Avatar, Space, List, Card, Timeline, Tag } from "antd";
import Link from 'next/link';
import { UserOutlined, IdcardOutlined, ClockCircleOutlined } from "@ant-design/icons"

const { Header, Content, Footer } = Layout;
const { Text, Paragraph } = Typography;

const gnbItems: MenuProps['items'] = [
  {
    'key': '1',
    'label': (
      <Link href="#">Portfolio</Link>
    )
  },
  {
    'key': '2',
    'label': (
      <Link href="#">About me</Link>
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
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Solve initial network problems 2015-09-01',
    color: 'green',
  },
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
  },
  {
    color: 'red',
    children: 'Network problems being solved 2015-09-01',
  },
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    label: (<Tag color="purple">2021 .03</Tag>),
    children: (
      <Paragraph>
        고용보험 민원서비스 고도화(web, mobile)<br />
        <a href="https://www.ei.go.kr" target="_blank" rel="noreferrer">https://www.ei.go.kr</a><br />

      </Paragraph>
    ),
  },
]

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
              className="site-layout-content"
              style={{ padding: 0, minHeight: 380, background: '#f5f5f5' }}
            >
              <Col sm={8} xs={24}>
                <Card bordered={false}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" size={80} />}
                    title="김 진태"
                    description={
                      <Paragraph type="secondary">
                        Jintae Kim<br />
                        vuenos@gmail.com<br />
                        +82 10-4860-6521
                      </Paragraph>
                    }
                  />
                </Card>
              </Col>

              <Col sm={16} xs={24}>
                <Card title="2021 ~ 2023" bordered={false}>
                  <Timeline
                    mode="alternate"
                    items={year2023}
                  />
                </Card>
              </Col>
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Paragraph>©2023 Jintae kim</Paragraph>
            <Paragraph>
              이 페이지는 React 18, Typescript, <a href="https://nextjs.org/blog/next-13" target="_blank" rel="noreferrer">Next.js 13</a> 과 <a href="https://ant.design" target="_blank" rel="noreferrer">Antd</a> 로 제작되었습니다.
            </Paragraph>
          </Footer>
        </Layout>
      </main>
    </>
  )
}
