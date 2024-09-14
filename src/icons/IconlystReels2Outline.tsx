import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.198 3.76c.903-.97 2.19-1.51 3.706-1.51h8.695c1.515 0 2.801.54 3.704 1.51.898.964 1.361 2.292 1.361 3.776v8.928c0 1.485-.466 2.812-1.364 3.776-.904.97-2.19 1.51-3.701 1.51H7.903c-1.516 0-2.802-.54-3.705-1.51-.898-.964-1.362-2.292-1.362-3.776V7.536c0-1.484.464-2.812 1.362-3.776m1.097 1.022c-.595.64-.96 1.58-.96 2.754v8.928c0 1.174.365 2.114.96 2.754.59.633 1.463 1.032 2.608 1.032h8.696c1.14 0 2.013-.399 2.604-1.033.596-.64.961-1.58.961-2.753V7.536c0-1.174-.364-2.114-.959-2.754-.59-.633-1.461-1.032-2.606-1.032H7.904c-1.146 0-2.019.4-2.609 1.032"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.941 16.606a.75.75 0 0 1 .75.75v3.621a.75.75 0 0 1-1.5 0v-3.622a.75.75 0 0 1 .75-.75m4.287 0a.75.75 0 0 1 .75.75v3.621a.75.75 0 0 1-1.5 0v-3.622a.75.75 0 0 1 .75-.75m4.287 0a.75.75 0 0 1 .75.75v3.621a.75.75 0 0 1-1.5 0v-3.622a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.95 17.352a.75.75 0 0 1 .75-.75h17.104a.75.75 0 1 1 0 1.5H3.698a.75.75 0 0 1-.75-.75M2.947 6.648a.75.75 0 0 1 .75-.75h17.105a.75.75 0 0 1 0 1.5H3.697a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.941 2.25a.75.75 0 0 1 .75.75v3.646a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m4.287 0a.75.75 0 0 1 .75.75v3.646a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75m4.287 0a.75.75 0 0 1 .75.75v3.646a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M10.925 10.33a15.6 15.6 0 0 0 0 3.342c.03.215.119.299.177.331.062.035.21.079.467-.022a8.2 8.2 0 0 0 2.402-1.508c.203-.188.254-.36.253-.478 0-.12-.054-.287-.25-.465l-.004-.003a8 8 0 0 0-2.408-1.51l-.007-.003c-.206-.087-.357-.06-.438-.017-.07.037-.163.122-.192.334m1.209-1.7c-.561-.235-1.185-.239-1.714.04-.542.284-.897.817-.983 1.472l-.002.013a17 17 0 0 0 0 3.68l.001.015c.077.617.394 1.16.93 1.46.532.3 1.164.298 1.755.066l.006-.003a9.7 9.7 0 0 0 2.853-1.79l.005-.005c.465-.428.742-.986.739-1.59s-.284-1.153-.742-1.568a9.5 9.5 0 0 0-2.848-1.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReels2Outline;
