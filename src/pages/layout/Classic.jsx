import React, { Component } from "react";

import { Layout } from "antd";
export default class Classic extends Component {
  render() {
    const { Header, Footer, Content } = Layout;
    return (
      <>
        <div>
          <Layout>
            <Header>Headerggggggggggggg</Header>
            <Content>Contensdfsdfgsdgfsdft</Content>
            <Footer>Footer</Footer>
          </Layout>
        </div>
      </>
    );
  }
}
