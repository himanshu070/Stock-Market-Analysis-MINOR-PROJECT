#!/usr/bin/env python
# coding: utf-8

# In[24]:


import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
import seaborn as sns
import matplotlib as plib


# In[25]:


tcs=pd.read_csv('TCS.csv')
tcs


# In[26]:


tcs.info()


# In[27]:


tcs.describe()


# In[28]:


corr=tcs.corr()
sns.heatmap(corr,annot=True)


# In[29]:


tcs.plot(legend=True)


# In[30]:


tcs['Date']=pd.to_datetime(tcs['Date'])


# In[31]:


print(f'DataFrame contains stock prices between{tcs.Date.min()} {tcs.Date.max()}')
print(f'Total days={(tcs.Date.max()-tcs.Date.min()).days}days')


# In[32]:


tcs[['Open','High','Low','Last','Close']].plot(kind='box')


# In[33]:


tcs.hist()
plt.show()


# In[34]:


x = tcs['Open'].values
y = tcs['Close'].values
plt.scatter(x,y)
plt.xlabel('Open', fontsize=14)
plt.ylabel('Close', fontsize=18)
plt.show()


# In[35]:


layout=go.Layout(
title='Stock prices of TCS',
xaxis=dict(
title='Date',
titlefont=dict(
family='Courier New, monospace',
size=20,
color='#7f7f7f'
)
),
yaxis=dict(
title='Price',
titlefont=dict(
family='Courier New, monospace',
size=20,
color='#7f7f7f'
)
)
)
tcs_data=[{'x':tcs['Date'],'y':tcs['Close']}]
plot=go.Figure(data=tcs_data, layout=layout)


# In[37]:


iplot(plot)


# In[39]:


# split the data into train and test sets
x=np.array(tcs.index).reshape(-1,1)
y=tcs['Close']
x_train,x_test,y_train,y_test= train_test_split(x,y,test_size=0.4,random_state=101)


# In[40]:


x_train.shape


# In[41]:


x_test.shape


# In[42]:


# feature scaling
scaler= StandardScaler().fit(x_train)


# In[44]:


# creating a linear model
lm=LinearRegression()
lm.fit(x_train, y_train)


# In[45]:


print(lm.intercept_)


# In[46]:


predicted=lm.predict(x_test)


# In[47]:


print(x_test)


# In[48]:


predicted.shape


# In[49]:


df=pd.DataFrame(y_test,predicted)
df1=pd.DataFrame({'Actual Price':y_test,'Predicted Price':predicted})
print(df1)


# In[50]:


lm.score(x_test,y_test)


# In[36]:


# building regression model
from sklearn.model_selection import train_test_split

#for preprocessing
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import StandardScaler

#for model evaluation
from sklearn.metrics import mean_squared_error as mse
from sklearn.metrics import r2_score


# In[53]:


from sklearn.linear_model import LinearRegression 


# In[38]:


import plotly.graph_objs as go
from plotly.offline import plot

# for offline plotting
from plotly.offline import download_plotlyjs, init_notebook_mode, plot, iplot
init_notebook_mode(connected=True)


# In[51]:


# plot actual and predicted values for train dataset
trace0=go.Scatter(
x=x_train.T[0],
y=y_train,
mode='markers',
name='Actual'
)
trace1=go.Scatter(
x=x_train.T[0],
y=lm.predict(x_train).T,
mode='lines',
name='Predicted'
)
tcs_data= [trace0,trace1]
layout.xaxis.title.text='Day'
plot2=go.Figure(data=tcs_data,layout=layout)


# In[52]:


iplot(plot2)


# In[33]:


tcs['Open'].plot(figsize=(16,6))


# In[34]:


import math


# In[35]:


from sklearn.metrics import confusion_matrix,accuracy_score
from sklearn import metrics


# In[37]:


print('Mean Absolute Error:',metrics.mean_absolute_error(y_test,predicted))


# In[38]:


print('Mean Squared Error:',metrics.mean_squared_error(y_test,predicted))


# In[39]:


print('Root Mean Squared Error:',math.sqrt(metrics.mean_squared_error(y_test,predicted)))


# In[40]:


graph=df1.head(20)


# In[52]:


graph.plot(kind='bar')


# In[54]:


graph.plot(kind='line')