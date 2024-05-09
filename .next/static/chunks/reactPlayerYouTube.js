/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerYouTube"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/YouTube.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/YouTube.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar YouTube_exports = {};\n__export(YouTube_exports, {\n  default: () => YouTube\n});\nmodule.exports = __toCommonJS(YouTube_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://www.youtube.com/iframe_api\";\nconst SDK_GLOBAL = \"YT\";\nconst SDK_GLOBAL_READY = \"onYouTubeIframeAPIReady\";\nconst MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;\nconst MATCH_USER_UPLOADS = /user\\/([a-zA-Z0-9_-]+)\\/?/;\nconst MATCH_NOCOOKIE = /youtube-nocookie\\.com/;\nconst NOCOOKIE_HOST = \"https://www.youtube-nocookie.com\";\nclass YouTube extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"parsePlaylist\", (url) => {\n      if (url instanceof Array) {\n        return {\n          listType: \"playlist\",\n          playlist: url.map(this.getID).join(\",\")\n        };\n      }\n      if (MATCH_PLAYLIST.test(url)) {\n        const [, playlistId] = url.match(MATCH_PLAYLIST);\n        return {\n          listType: \"playlist\",\n          list: playlistId.replace(/^UC/, \"UU\")\n        };\n      }\n      if (MATCH_USER_UPLOADS.test(url)) {\n        const [, username] = url.match(MATCH_USER_UPLOADS);\n        return {\n          listType: \"user_uploads\",\n          list: username\n        };\n      }\n      return {};\n    });\n    __publicField(this, \"onStateChange\", (event) => {\n      const { data } = event;\n      const { onPlay, onPause, onBuffer, onBufferEnd, onEnded, onReady, loop, config: { playerVars, onUnstarted } } = this.props;\n      const { UNSTARTED, PLAYING, PAUSED, BUFFERING, ENDED, CUED } = window[SDK_GLOBAL].PlayerState;\n      if (data === UNSTARTED)\n        onUnstarted();\n      if (data === PLAYING) {\n        onPlay();\n        onBufferEnd();\n      }\n      if (data === PAUSED)\n        onPause();\n      if (data === BUFFERING)\n        onBuffer();\n      if (data === ENDED) {\n        const isPlaylist = !!this.callPlayer(\"getPlaylist\");\n        if (loop && !isPlaylist) {\n          if (playerVars.start) {\n            this.seekTo(playerVars.start);\n          } else {\n            this.play();\n          }\n        }\n        onEnded();\n      }\n      if (data === CUED)\n        onReady();\n    });\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"mute\");\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"unMute\");\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  getID(url) {\n    if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {\n      return null;\n    }\n    return url.match(import_patterns.MATCH_URL_YOUTUBE)[1];\n  }\n  load(url, isReady) {\n    const { playing, muted, playsinline, controls, loop, config, onError } = this.props;\n    const { playerVars, embedOptions } = config;\n    const id = this.getID(url);\n    if (isReady) {\n      if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {\n        this.player.loadPlaylist(this.parsePlaylist(url));\n        return;\n      }\n      this.player.cueVideoById({\n        videoId: id,\n        startSeconds: (0, import_utils.parseStartTime)(url) || playerVars.start,\n        endSeconds: (0, import_utils.parseEndTime)(url) || playerVars.end\n      });\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (YT) => YT.loaded).then((YT) => {\n      if (!this.container)\n        return;\n      this.player = new YT.Player(this.container, {\n        width: \"100%\",\n        height: \"100%\",\n        videoId: id,\n        playerVars: {\n          autoplay: playing ? 1 : 0,\n          mute: muted ? 1 : 0,\n          controls: controls ? 1 : 0,\n          start: (0, import_utils.parseStartTime)(url),\n          end: (0, import_utils.parseEndTime)(url),\n          origin: window.location.origin,\n          playsinline: playsinline ? 1 : 0,\n          ...this.parsePlaylist(url),\n          ...playerVars\n        },\n        events: {\n          onReady: () => {\n            if (loop) {\n              this.player.setLoop(true);\n            }\n            this.props.onReady();\n          },\n          onPlaybackRateChange: (event) => this.props.onPlaybackRateChange(event.data),\n          onPlaybackQualityChange: (event) => this.props.onPlaybackQualityChange(event),\n          onStateChange: this.onStateChange,\n          onError: (event) => onError(event.data)\n        },\n        host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : void 0,\n        ...embedOptions\n      });\n    }, onError);\n    if (embedOptions.events) {\n      console.warn(\"Using `embedOptions.events` will likely break things. Use ReactPlayer\\u2019s callback props instead, eg onReady, onPlay, onPause\");\n    }\n  }\n  play() {\n    this.callPlayer(\"playVideo\");\n  }\n  pause() {\n    this.callPlayer(\"pauseVideo\");\n  }\n  stop() {\n    if (!document.body.contains(this.callPlayer(\"getIframe\")))\n      return;\n    this.callPlayer(\"stopVideo\");\n  }\n  seekTo(amount, keepPlaying = false) {\n    this.callPlayer(\"seekTo\", amount);\n    if (!keepPlaying && !this.props.playing) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction * 100);\n  }\n  setPlaybackRate(rate) {\n    this.callPlayer(\"setPlaybackRate\", rate);\n  }\n  setLoop(loop) {\n    this.callPlayer(\"setLoop\", loop);\n  }\n  getDuration() {\n    return this.callPlayer(\"getDuration\");\n  }\n  getCurrentTime() {\n    return this.callPlayer(\"getCurrentTime\");\n  }\n  getSecondsLoaded() {\n    return this.callPlayer(\"getVideoLoadedFraction\") * this.getDuration();\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style }, /* @__PURE__ */ import_react.default.createElement(\"div\", { ref: this.ref }));\n  }\n}\n__publicField(YouTube, \"displayName\", \"YouTube\");\n__publicField(YouTube, \"canPlay\", import_patterns.canPlay.youtube);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvWW91VHViZS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1GQUFPO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLDhFQUFVO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLG9GQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLDBFQUEwRSw0QkFBNEI7QUFDcEgsY0FBYyxxREFBcUQ7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtEQUErRDtBQUMzRSxZQUFZLDJCQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxPQUFPLDhEQUE4RCxlQUFlO0FBQzNKO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvWW91VHViZS5qcz85MjliIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBZb3VUdWJlX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KFlvdVR1YmVfZXhwb3J0cywge1xuICBkZWZhdWx0OiAoKSA9PiBZb3VUdWJlXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKFlvdVR1YmVfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCI7XG5jb25zdCBTREtfR0xPQkFMID0gXCJZVFwiO1xuY29uc3QgU0RLX0dMT0JBTF9SRUFEWSA9IFwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHlcIjtcbmNvbnN0IE1BVENIX1BMQVlMSVNUID0gL1s/Jl0oPzpsaXN0fGNoYW5uZWwpPShbYS16QS1aMC05Xy1dKykvO1xuY29uc3QgTUFUQ0hfVVNFUl9VUExPQURTID0gL3VzZXJcXC8oW2EtekEtWjAtOV8tXSspXFwvPy87XG5jb25zdCBNQVRDSF9OT0NPT0tJRSA9IC95b3V0dWJlLW5vY29va2llXFwuY29tLztcbmNvbnN0IE5PQ09PS0lFX0hPU1QgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tXCI7XG5jbGFzcyBZb3VUdWJlIGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImNhbGxQbGF5ZXJcIiwgaW1wb3J0X3V0aWxzLmNhbGxQbGF5ZXIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJwYXJzZVBsYXlsaXN0XCIsICh1cmwpID0+IHtcbiAgICAgIGlmICh1cmwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxpc3RUeXBlOiBcInBsYXlsaXN0XCIsXG4gICAgICAgICAgcGxheWxpc3Q6IHVybC5tYXAodGhpcy5nZXRJRCkuam9pbihcIixcIilcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChNQVRDSF9QTEFZTElTVC50ZXN0KHVybCkpIHtcbiAgICAgICAgY29uc3QgWywgcGxheWxpc3RJZF0gPSB1cmwubWF0Y2goTUFUQ0hfUExBWUxJU1QpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxpc3RUeXBlOiBcInBsYXlsaXN0XCIsXG4gICAgICAgICAgbGlzdDogcGxheWxpc3RJZC5yZXBsYWNlKC9eVUMvLCBcIlVVXCIpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoTUFUQ0hfVVNFUl9VUExPQURTLnRlc3QodXJsKSkge1xuICAgICAgICBjb25zdCBbLCB1c2VybmFtZV0gPSB1cmwubWF0Y2goTUFUQ0hfVVNFUl9VUExPQURTKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaXN0VHlwZTogXCJ1c2VyX3VwbG9hZHNcIixcbiAgICAgICAgICBsaXN0OiB1c2VybmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt9O1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblN0YXRlQ2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHsgb25QbGF5LCBvblBhdXNlLCBvbkJ1ZmZlciwgb25CdWZmZXJFbmQsIG9uRW5kZWQsIG9uUmVhZHksIGxvb3AsIGNvbmZpZzogeyBwbGF5ZXJWYXJzLCBvblVuc3RhcnRlZCB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgeyBVTlNUQVJURUQsIFBMQVlJTkcsIFBBVVNFRCwgQlVGRkVSSU5HLCBFTkRFRCwgQ1VFRCB9ID0gd2luZG93W1NES19HTE9CQUxdLlBsYXllclN0YXRlO1xuICAgICAgaWYgKGRhdGEgPT09IFVOU1RBUlRFRClcbiAgICAgICAgb25VbnN0YXJ0ZWQoKTtcbiAgICAgIGlmIChkYXRhID09PSBQTEFZSU5HKSB7XG4gICAgICAgIG9uUGxheSgpO1xuICAgICAgICBvbkJ1ZmZlckVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEgPT09IFBBVVNFRClcbiAgICAgICAgb25QYXVzZSgpO1xuICAgICAgaWYgKGRhdGEgPT09IEJVRkZFUklORylcbiAgICAgICAgb25CdWZmZXIoKTtcbiAgICAgIGlmIChkYXRhID09PSBFTkRFRCkge1xuICAgICAgICBjb25zdCBpc1BsYXlsaXN0ID0gISF0aGlzLmNhbGxQbGF5ZXIoXCJnZXRQbGF5bGlzdFwiKTtcbiAgICAgICAgaWYgKGxvb3AgJiYgIWlzUGxheWxpc3QpIHtcbiAgICAgICAgICBpZiAocGxheWVyVmFycy5zdGFydCkge1xuICAgICAgICAgICAgdGhpcy5zZWVrVG8ocGxheWVyVmFycy5zdGFydCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkVuZGVkKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YSA9PT0gQ1VFRClcbiAgICAgICAgb25SZWFkeSgpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcihcIm11dGVcIik7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJ1bk11dGVcIik7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInJlZlwiLCAoY29udGFpbmVyKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91bnQgJiYgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMpO1xuICB9XG4gIGdldElEKHVybCkge1xuICAgIGlmICghdXJsIHx8IHVybCBpbnN0YW5jZW9mIEFycmF5IHx8IE1BVENIX1BMQVlMSVNULnRlc3QodXJsKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB1cmwubWF0Y2goaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9ZT1VUVUJFKVsxXTtcbiAgfVxuICBsb2FkKHVybCwgaXNSZWFkeSkge1xuICAgIGNvbnN0IHsgcGxheWluZywgbXV0ZWQsIHBsYXlzaW5saW5lLCBjb250cm9scywgbG9vcCwgY29uZmlnLCBvbkVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGxheWVyVmFycywgZW1iZWRPcHRpb25zIH0gPSBjb25maWc7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdldElEKHVybCk7XG4gICAgaWYgKGlzUmVhZHkpIHtcbiAgICAgIGlmIChNQVRDSF9QTEFZTElTVC50ZXN0KHVybCkgfHwgTUFUQ0hfVVNFUl9VUExPQURTLnRlc3QodXJsKSB8fCB1cmwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB0aGlzLnBsYXllci5sb2FkUGxheWxpc3QodGhpcy5wYXJzZVBsYXlsaXN0KHVybCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnBsYXllci5jdWVWaWRlb0J5SWQoe1xuICAgICAgICB2aWRlb0lkOiBpZCxcbiAgICAgICAgc3RhcnRTZWNvbmRzOiAoMCwgaW1wb3J0X3V0aWxzLnBhcnNlU3RhcnRUaW1lKSh1cmwpIHx8IHBsYXllclZhcnMuc3RhcnQsXG4gICAgICAgIGVuZFNlY29uZHM6ICgwLCBpbXBvcnRfdXRpbHMucGFyc2VFbmRUaW1lKSh1cmwpIHx8IHBsYXllclZhcnMuZW5kXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwsIFNES19HTE9CQUxfUkVBRFksIChZVCkgPT4gWVQubG9hZGVkKS50aGVuKChZVCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgWVQuUGxheWVyKHRoaXMuY29udGFpbmVyLCB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgdmlkZW9JZDogaWQsXG4gICAgICAgIHBsYXllclZhcnM6IHtcbiAgICAgICAgICBhdXRvcGxheTogcGxheWluZyA/IDEgOiAwLFxuICAgICAgICAgIG11dGU6IG11dGVkID8gMSA6IDAsXG4gICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzID8gMSA6IDAsXG4gICAgICAgICAgc3RhcnQ6ICgwLCBpbXBvcnRfdXRpbHMucGFyc2VTdGFydFRpbWUpKHVybCksXG4gICAgICAgICAgZW5kOiAoMCwgaW1wb3J0X3V0aWxzLnBhcnNlRW5kVGltZSkodXJsKSxcbiAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICAgcGxheXNpbmxpbmU6IHBsYXlzaW5saW5lID8gMSA6IDAsXG4gICAgICAgICAgLi4udGhpcy5wYXJzZVBsYXlsaXN0KHVybCksXG4gICAgICAgICAgLi4ucGxheWVyVmFyc1xuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBvblJlYWR5OiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobG9vcCkge1xuICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRMb29wKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvblBsYXliYWNrUmF0ZUNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKGV2ZW50LmRhdGEpLFxuICAgICAgICAgIG9uUGxheWJhY2tRdWFsaXR5Q2hhbmdlOiAoZXZlbnQpID0+IHRoaXMucHJvcHMub25QbGF5YmFja1F1YWxpdHlDaGFuZ2UoZXZlbnQpLFxuICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IHRoaXMub25TdGF0ZUNoYW5nZSxcbiAgICAgICAgICBvbkVycm9yOiAoZXZlbnQpID0+IG9uRXJyb3IoZXZlbnQuZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgaG9zdDogTUFUQ0hfTk9DT09LSUUudGVzdCh1cmwpID8gTk9DT09LSUVfSE9TVCA6IHZvaWQgMCxcbiAgICAgICAgLi4uZW1iZWRPcHRpb25zXG4gICAgICB9KTtcbiAgICB9LCBvbkVycm9yKTtcbiAgICBpZiAoZW1iZWRPcHRpb25zLmV2ZW50cykge1xuICAgICAgY29uc29sZS53YXJuKFwiVXNpbmcgYGVtYmVkT3B0aW9ucy5ldmVudHNgIHdpbGwgbGlrZWx5IGJyZWFrIHRoaW5ncy4gVXNlIFJlYWN0UGxheWVyXFx1MjAxOXMgY2FsbGJhY2sgcHJvcHMgaW5zdGVhZCwgZWcgb25SZWFkeSwgb25QbGF5LCBvblBhdXNlXCIpO1xuICAgIH1cbiAgfVxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBsYXlWaWRlb1wiKTtcbiAgfVxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwYXVzZVZpZGVvXCIpO1xuICB9XG4gIHN0b3AoKSB7XG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuY2FsbFBsYXllcihcImdldElmcmFtZVwiKSkpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic3RvcFZpZGVvXCIpO1xuICB9XG4gIHNlZWtUbyhhbW91bnQsIGtlZXBQbGF5aW5nID0gZmFsc2UpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZWVrVG9cIiwgYW1vdW50KTtcbiAgICBpZiAoIWtlZXBQbGF5aW5nICYmICF0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0Vm9sdW1lXCIsIGZyYWN0aW9uICogMTAwKTtcbiAgfVxuICBzZXRQbGF5YmFja1JhdGUocmF0ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldFBsYXliYWNrUmF0ZVwiLCByYXRlKTtcbiAgfVxuICBzZXRMb29wKGxvb3ApIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRMb29wXCIsIGxvb3ApO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoXCJnZXREdXJhdGlvblwiKTtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKFwiZ2V0Q3VycmVudFRpbWVcIik7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKFwiZ2V0VmlkZW9Mb2FkZWRGcmFjdGlvblwiKSAqIHRoaXMuZ2V0RHVyYXRpb24oKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNwbGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXlcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiB0aGlzLnJlZiB9KSk7XG4gIH1cbn1cbl9fcHVibGljRmllbGQoWW91VHViZSwgXCJkaXNwbGF5TmFtZVwiLCBcIllvdVR1YmVcIik7XG5fX3B1YmxpY0ZpZWxkKFlvdVR1YmUsIFwiY2FuUGxheVwiLCBpbXBvcnRfcGF0dGVybnMuY2FuUGxheS55b3V0dWJlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/YouTube.js\n"));

/***/ })

}]);