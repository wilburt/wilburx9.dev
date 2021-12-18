import React, {Component} from "react";
import {ArticleModel, ArticleResponse} from "./models/ArticleModel";
import axios from "axios";
import {RepoModel, RepoResponse} from "./models/RepoModel";

export type DataValue = {
  articles: ArticleModel[],
  repos: RepoModel[],
  fetchArticles: () => void,
  fetchRepos: () => void,
  hasData: () => boolean,
}

const DataContext = React.createContext<Partial<DataValue>>({});

const http = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}/api`,
  headers: {"Content-type": "application/json"}
})

type DataState = {
  articles: ArticleModel[],
  repos: RepoModel[],
}

export class DataProvider extends Component<any, DataState> {

  state: DataState = {articles: [], repos: []}

  componentDidMount() {
    this.fetchArticles()
    this.fetchRepos()
  }

  fetchArticles = () => {
    http
      .get<ArticleResponse>("/articles")
      .then(response => {
        console.log("Articles success:: " + response.data)
        this.setState({articles: response.data.data})
      })
      .catch(ex => {
        console.log(ex)
      })
  }

  fetchRepos = () => {
    http
      .get<RepoResponse>("/repos")
      .then(response => {
        console.log("Repos success:: " + response.data)
        this.setState({repos: response.data.data})
      })
      .catch(ex => {
        console.log(ex)
      })
  }

  hasData = (): boolean => {
    return this.state.repos.length > 0 || this.state.repos.length > 0
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          fetchArticles: this.fetchArticles,
          fetchRepos: this.fetchRepos,
          hasData: this.hasData
        }}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}


export {DataContext}
export default DataProvider