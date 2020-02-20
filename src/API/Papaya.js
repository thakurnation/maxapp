import React from 'react';
import fetch from 'isomorphic-fetch';

import Constants from '../constants/Constants';


export const getRecommondations = async (params) => {
   return new Promise((resolve, reject) => {
		try {

			fetch(Constants.RECOMMENDATION, {
				  method: 'PUT',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(params)
			})
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson)
				resolve(responseJson);
			})
			.catch(function(error) {
				reject('Network error');
			})
		} catch(err) {
			reject(err.message);
		}
	});
}

export const getRecommondationItems = async (id) => {
   return new Promise((resolve, reject) => {
		try {

			fetch(Constants.RECOMMENDATION+'/'+id, {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json',
				  },
			})
			.then((response) => {
				if(response.status == 204){
					resolve('reload');
				}else{
					resolve(response.json());
				}
			})

			.catch(function(error) {
				reject('Network error');
			})
		} catch(err) {
			reject(err.message);
		}
	});
}
