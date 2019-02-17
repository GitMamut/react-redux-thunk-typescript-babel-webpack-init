import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
import { connect } from "react-redux";
import { addArticle } from "../../actions/index";
import uuidv1 from "uuid";

class FormContainerConnected extends Component {
    constructor() {
        super();

        this.state = {
            seo_title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { seo_title } = this.state;
        this.props.addArticle({ seo_title, id: uuidv1() });
        this.setState({ seo_title: "" });
    }

    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form" onSubmit={this.handleSubmit}>
                <Input
                    text="SEO titleeee"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
                <button type="submit">Add</button>
                {this.props.articles.map(art => <p key={art.id}>{art.seo_title}</p>)}
            </form>
        );
    }
}

const mapStateToProps = state => {
    return { articles: state.articles };
};

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormContainerConnected);
export default FormContainer;