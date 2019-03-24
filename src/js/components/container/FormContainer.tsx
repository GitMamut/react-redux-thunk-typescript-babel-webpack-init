import React, { Dispatch } from "react";
import Input from "../presentational/Input";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { Article, addArticleAction } from "../../constants/action-types";
import { AppState } from "../../redux/rootReducer";
import { addArticle } from "../../redux/actions";

type DispatchProps = { addArticle: (article: Article) => void };
type OwnProps = { articles: Article[] };
type Props = OwnProps & DispatchProps;
type State = { seo_title: string };

class FormContainerConnected extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            seo_title: ""
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ seo_title: event.currentTarget.value });
    }

    private handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        const { seo_title } = this.state;
        this.props.addArticle({ seo_title, id: uuidv1() });
        this.setState({ seo_title: "" });
    }

    public render() {
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

const mapStateToProps = (state: AppState) => {
    return { articles: state.articles };
};

const mapDispatchToProps = (dispatch: Dispatch<addArticleAction>) => {
    return {
        addArticle: (article: Article) => dispatch(addArticle(article))
    };
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(FormContainerConnected);
export default FormContainer;
