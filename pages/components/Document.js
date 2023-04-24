import React from 'react'

const Document = () => {
  return (
    <div>
      <div className="text-4xl underline">INTRODUCTION:</div>
      <div className="text-l mb-2">
        Stock market price prediction is an important problem in finance and has
        been tackled with various approaches. One of the most common approaches
        is using machine learning techniques to predict future stock prices. In
        this report, we will describe a machine learning stock market price
        prediction that we did using CSV files of multiple companies, where we
        calculated the actual and predicted prices and generated a linear
        regression graph. We utilized linear regression as the algorithm for
        this project. <br></br> Along with linear regression we also did smaller
        analysis using different visualisation methods such as heatmap, bar
        graph of all the columns of the dataset, boxplot, histogram, scatter
        plot and lastly a graph stating the stock prices of the companies over
        years.
      </div>

      <div className="text-4xl underline">Data:</div>
      <div className="text-l mb-2">
        The first step in this project was to obtain the data. We downloaded
        four CSV files containing historical stock prices of four companies
        named as Tata Consultancy Services(TCS), AdaninPorts, State Bank of
        India(SBIN) and Britannia . The file contained data for each day,
        including the date, the opening price, the highest price, the lowest
        price, the closing price, and the volume. We used Python to load the
        file into a Pandas DataFrame.
      </div>

      <div className="text-4xl underline">Preprocessing:</div>
      <div className="text-l mb-2">
        Next, we performed data preprocessing. We removed the unnecessary
        columns and kept only the date, open, high, low, last and close columns.
        Then we splitted the data into two sets, one for training the model, and
        another for testing its performance. We used the first 80% of the data
        for training and the remaining 20% for testing.
      </div>

      <div className="text-4xl underline">Model::</div>
      <div className="text-l mb-2">
        The algorithm we chose for this project was linear regression. Linear
        regression is a simple but effective algorithm for predicting numeric
        values. It works by finding a line that best fits the data points. In
        this case, the line represents the relationship between the closing
        prices and the time.
      </div>

      <div className="text-4xl underline">RESULTS:</div>
      <div className="text-l mb-2">
        After training the model, we used it to predict the stock prices for the
        testing set. We calculated the actual and predicted prices and plotted
        them on a graph. The graph showed that the predicted prices followed the
        actual prices relatively closely. The model achieved Mean Squared Error
        (MSE) of: <br></br> 230006.858 on the testing set of TCS.<br></br>{" "}
        734166.890 on the testing set of Adani Ports. <br></br> 734166.890 on
        the testing set of SBIN. <br></br>
        286.527 on the testing set of Britannia.
      </div>
      <div className="text-4xl underline">CONCLUSION:</div>
      <div className="text-l mb-10">
        In conclusion, we implemented a machine learning stock market price
        prediction using a CSV file and utilized linear regression as the
        algorithm. The model achieved good performance and was able to predict
        the stock prices relatively accurately. However, it is worth noting that
        other algorithms may have performed better than linear regression,
        depending on the specific dataset and problem.
      </div>
      <div className='flex items-center justify-center flex-col'>
        <div className="text-4xl underline mb-2">ABSTRACT:</div>
        <div className="text-l mb-2 px-20">
          This mini project aims to develop a model for predicting stock prices
          using machine learning techniques. Historical stock price data are
          collected and preprocessed, and a range of machine learning algorithms
          are trained and tested on this data. The performance of each algorithm
          is evaluated based on key metrics such as accuracy, precision, recall,
          and F1 score. The results of the project are used to identify the most
          effective algorithms for predicting stock prices, and to gain insights
          into the factors that influence stock prices. The potential
          applications of this project include assisting investors and financial
          analysts in making informed decisions about buying and selling stocks,
          and providing insights into the behavior of financial markets. <br></br> And
          then we have also made a website using frontend regarding this showing
          our various results of the dataset that we have performed.
        </div>
      </div>
    </div>
  );
}

export default Document