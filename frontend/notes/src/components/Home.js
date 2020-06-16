import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import NoteList from "./NoteList";
import NewNoteModal from "./NewNoteModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.resetState();
  }

  getNotes = () => {
    axios.get(API_URL).then(res => this.setState({ notes: res.data }));
  };

  resetState = () => {
    this.getNotes();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <NoteList
              notes={this.state.notes}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewNoteModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;