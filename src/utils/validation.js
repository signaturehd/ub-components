import React, { Component } from 'react'

export function emailValidation (email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase())
}
export function accntnumberValidation (accntnumber) {
    const regex =  /^(?=[\d-]{5,24}$)\d{1,6}-\d*[-]?\d+$ /
}
