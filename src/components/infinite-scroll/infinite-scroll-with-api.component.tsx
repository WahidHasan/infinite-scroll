import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetData } from "../../API/api";

const InfiniteScrollWithApiComponent = (prop: any) => {
  const [data, setData] = useState<any>([]);
  const [pages, setPages] = React.useState(1);

  const getData = async (pages: number) => {
    const responseData = await GetData(pages);
    if (responseData && responseData.length > 0) {
      let tempData = data;
      setData([...tempData, ...responseData]);
    }
  };

  const fetchMoreData =()=>{
    setPages((pages) => pages + 1);
    getData(pages + 1);
  }

  React.useEffect(() => {
    getData(pages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (data && data.length > 0) {
    return (
      <div>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        {data.map((item: any, index: number) => (
          <div key={index} className="">
            <div className="card border-dark mb-3 card-style justify-content-center">
              <div className="card-body">
                <b><p color="black">{item.id}</p></b>
                <img src={item.thumbnailUrl} alt={item.albumId} />
              </div>
            </div>
          </div>
        ))}
        </InfiniteScroll>
      </div>
    );
  } else {
    return <>No data</>;
  }
};

export default InfiniteScrollWithApiComponent;
