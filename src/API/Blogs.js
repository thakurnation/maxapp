import React from 'react';
import fetch from 'isomorphic-fetch';

import Constants from '../constants/Constants';


	export const getBlogs = async (params) => {
	   return new Promise((resolve, reject) => {
		try {
			fetch(Constants.BLOGS+'?_embed=true', {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json',
				  },
			})
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch(function(error) {
				reject('Network error');
			})
		} catch(err) {
			reject(err.message);
		}
		})
	}


	export const getBlogBySlug = async (slug) => {
	   return new Promise((resolve, reject) => {
		try {
			fetch(Constants.BLOGS+'?slug='+slug+'&&_embed=true', {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json',
				  },
			})
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch(function(error) {
				reject('Network error');
			})
		} catch(err) {
			reject(err.message);
		}
		})
	}
	
	export const getBlogByCategory = async (cateId) => {
	   return new Promise((resolve, reject) => {
		try {
			fetch(Constants.BLOGS+'?categories='+cateId+'&page=1&per_page=10&_embed=true', {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json',
				  },
			})
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch(function(error) {
				reject('Network error');
			})
		} catch(err) {
			reject(err.message);
		}
		})
	}
	
	export const getCategories = async (params) => {
	   return new Promise((resolve, reject) => {
		try {
			fetch(Constants.BLOG_CATEGORIES, {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json',
				  },
			})
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch(function(error) {
				reject('Network error');
			})
		} catch(err) {
			reject(err.message);
		}
		})
	}
	
	export const getCategoryBySlug = async (cateSlug) => {
	   return new Promise((resolve, reject) => {
		try {
			fetch(Constants.BLOG_CATEGORIES+'/?slug='+cateSlug, {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json',
				  },
			})
			.then((response) => response.json())
			.then((responseJson) => {
				resolve(responseJson);
			})
			.catch(function(error) {
				reject('Network error');
			})
		} catch(err) {
			reject(err.message);
		}
		})
	}
