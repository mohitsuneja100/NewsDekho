import React, {useEffect, useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
 
    //document.title = `${this.props.heading}-News`;
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)

  const updateNews=async()=> {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat
      }&apiKey=2f262485bd2548a4af36d15d06fe9a05&page=${page
      }&pageSize=6`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(75);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  },[])

  const fetchMoreData = async() => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.cat
      }&apiKey=2f262485bd2548a4af36d15d06fe9a05&page=${page+1
      }&pageSize=6`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };

    return (
      <>
        <h2 className="text-center" style={{ margin: "75px 0px 10px 0px" }}>
          {props.heading}
        </h2>
        {loading && <Spinner />}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className="container my-2">
          <div className="row">
            {
              articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      Url={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
          </div>
        </InfiniteScroll>
      
      </>
    );
  }

export default News;
