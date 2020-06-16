import React, { Component } from "react";
import { Table } from "reactstrap";
import NewNoteModal from "./NewNoteModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class NoteList extends Component {
	render() {
		const notes = this.props.notes
		return (
			<Table dark>
				<thead>
          			<tr>
			            <th>Name</th>
			            <th>Text</th>
			            <th></th>
          			</tr>
        		</thead>

        		<tbody>
        			{!notes || notes.length <= 0 ? (
        				<tr>
        					<td colSpan="6" align="center">
        						<b>Oops, nothing here yet</b>
        					</td>
        				</tr>
        			) : (
        				notes.map(note => (
        				<tr key={note.pk}>
        					<td>{note.name}</td>
        					<td>{note.text}</td>
        					<td align="center">
        						<NewNoteModal
        							create={false}
        							note={note}
        							resetState={this.props.resetState}
        						/>

        						<ConfirmRemovalModal
        							pk={note.pk}
        							resetState={this.props.resetState}
        						/>
        					</td>
        				</tr>
        				))
        			)}
        		</tbody>
        	</Table>
        );
    }
}

export default NoteList;
