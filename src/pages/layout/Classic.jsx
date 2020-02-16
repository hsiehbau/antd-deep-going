import React, { Component } from "react";

import { Layout } from "antd";
export default class Classic extends Component {
  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <>
        <div>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Sider>Sider</Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </div>
      </>
    );
  }
}
