import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GetDataWithoutPagination } from "../../API/api";

export const deepCopy = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

const VerticalInfiniteScroll = (props: any) => {
  const [data, setData] = React.useState<any>([]);
  const [sumData, setSumData] = React.useState<any[]>([]);
  const [end, setEnd] = React.useState<number>(0);
  const offset = 20;
  const getData = async () => {
    const responseData = await GetDataWithoutPagination();
    if (responseData && responseData.length > 0) {
      setData(responseData);
      minimizeArray(offset, responseData);
    }
  };

  const minimizeArray = (endPoint: number, list: []) => {
    setSumData(list.slice(0, endPoint));
    setEnd(endPoint + offset);
  };

  const fetchMoreData = () => {
    minimizeArray(end, data);
  };
  React.useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (data && data.length > 0) {
    return (

        <InfiniteScroll
          dataLength={sumData.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          className="flex flex-wrap"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row">
            {sumData.map((item: any, index: number) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 pb-3">
                <div className="card border-dark mb-3">
                  <div className="card-body">
                    <p>{item.id}</p>
                    <img src={item.thumbnailUrl} alt={item.albumId} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>

    );
  } else {
    return <>No data</>;
  }
};

export default VerticalInfiniteScroll;
