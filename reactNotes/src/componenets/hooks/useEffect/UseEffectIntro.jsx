import React from "react";
import UseEffectEx1 from "./examples/UseEffectEx1";
import UseEffectEx7 from "./examples/UseEffectEx7";
import UseEffectEx2 from "./examples/UseEffectEx2";
import UseEffectEx3 from "./examples/UseEffectEx3";
import UseEffectEx4 from "./examples/UseEffectEx4";
import UseEffectEx5 from "./examples/UseEffectEx5";
import UseEffectEx6 from "./examples/UseEffectEx6";
import UserList from "./task/UserList";
import WindowResizeListener from "./task/WindowResizeListener";
import CountdownTimer from "./task/CountdownTimer";
import ThemeSwitcher from "./task/ThemeSwitcher";
import DynamicBackgroundColor from "./task/DynamicBackgroundColor";
import ScrollPositionTracker from "./task/ScrollPositionTracker";
import WeatherFetcher from "./task/WeatherFetcher";
import NotificationPopup from "./task/NotificationPopup";
import AutoSaveForm from "./task/AutoSaveForm";
import ApiErrorRetry from "./task/ApiErrorRetry";

const UseEffectIntro = () => {
  return (
    <div>
      {/* Examples */}

      {/* <UseEffectEx1 /> */}
      {/* <UseEffectEx2 /> */}
      {/* <UseEffectEx3 /> */}
      {/* <UseEffectEx4 /> */}
      {/* <UseEffectEx5 /> */}
      {/* <UseEffectEx6 /> */}
      {/* <UseEffectEx7 /> */}

      {/* Tasks */}

      {/* <UserList /> */}
      {/* <WindowResizeListener /> */}
      {/* <CountdownTimer /> */}
      {/* <ThemeSwitcher /> */}
      {/* <DynamicBackgroundColor /> */}
      {/* <ScrollPositionTracker /> */}
      {/* <WeatherFetcher /> */}
      {/* <NotificationPopup /> */}
      {/* <AutoSaveForm /> */}
      <ApiErrorRetry />
    </div>
  );
};

export default UseEffectIntro;
