import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLogs, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLogs, setCurrent }) => {
    const onDelete = () => {
        deleteLogs(log.id);
        M.toast({ html: 'Log Deleted'});
    }
    
    return (
        <li>
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>{log.message}</a>
                <br/>
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by 
                    <span className="black-text"> {log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
                </span>
                <a className="secondary-content" href="#!" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func,
    setCurrent: PropTypes.func.isRequired
}

export default connect (null, { deleteLogs, setCurrent })(LogItem);