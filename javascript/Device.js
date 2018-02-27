import EventEmitter from 'eventemitter3'

export default class Device {
  static Event = {
    KEY_BOARD_CHANGE: 'key-board-change',
    SCREEN_STATUS_CHANGE: 'screen-status-change'
  }

  static ScreenStatus = {
    LANDSCAPE: 1,
    PORTRAIT: 2
  }

  static _eventEmitter = new EventEmitter()
  static screenHeight = window.innerHeight
  static currentHeight = window.innerHeight
  static AndroidDeviceHeight = window.innerHeight / 3
  static isDown = true

  static currentScreenStatus = Device.ScreenStatus.LANDSCAPE

  static init = () => {
    window.addEventListener('resize', Device._getCurrentHeight)

    const hasOrientationStatus = 'onorientationchange' in window
    window.addEventListener(hasOrientationStatus ? 'orientationchange' : 'resize', Device._screenStatusChanged, false)
  }

  static addEventListener = (eventName, listener) => {
    Device._eventEmitter.addListener(eventName, listener)
  }

  static removeEventListener = (eventName, listener) => {
    Device._eventEmitter.removeListener(eventName, listener)
  }

  static isScreenPortrait = () => {
    return Device.currentScreenStatus === Device.ScreenStatus.PORTRAIT
  }

  static _getCurrentHeight = () => {
    Device.currentHeight = window.innerHeight
    if (Device.screenHeight - Device.currentHeight < Device.AndroidDeviceHeight) {
      Device.isDown = true
    } else {
      Device.isDown = false
    }

    Device._eventEmitter.emit(Device.Event.KEY_BOARD_CHANGE, Device.isDown)
  }

  static _screenStatusChanged = () => {
    let screenStatus = Device.currentScreenStatus
    if (window.orientation === 180 || window.orientation === 0) {
      screenStatus = Device.ScreenStatus.LANDSCAPE
    }

    if (window.orientation === 90 || window.orientation === -90) {
      screenStatus = Device.ScreenStatus.PORTRAIT
    }

    if (screenStatus !== Device.currentScreenStatus) {
      Device._eventEmitter.emit(Device.Event.SCREEN_STATUS_CHANGE, screenStatus)
      Device.currentScreenStatus = screenStatus
    }
  }

}
