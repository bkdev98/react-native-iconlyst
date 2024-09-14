import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEBikeDisconnectOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.72 3.354a.75.75 0 0 1 1.06 0l18 18a.75.75 0 0 1-1.06 1.061l-18-18a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.708 11.402a2.793 2.793 0 0 0-2.749 3.29.75.75 0 0 1-1.476.264 4.293 4.293 0 1 1 4.234 3.531 3 3 0 0 1-.962-.159.75.75 0 0 1 .498-1.415 1.4 1.4 0 0 0 .419.075h.035a2.793 2.793 0 0 0 0-5.586M7.646 8.907a.75.75 0 0 1 .75-.75h7.726a.75.75 0 0 1 0 1.5H8.396a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.894 3.678a.75.75 0 0 1-.397.984l-1.617.688 2.546 8.487a.75.75 0 0 1-1.437.43l-2.738-9.129a.75.75 0 0 1 .424-.905l2.235-.951a.75.75 0 0 1 .984.396M5.245 6.406a.75.75 0 0 1 .75-.75h3.01a.75.75 0 0 1 0 1.5h-3.01a.75.75 0 0 1-.75-.75M6.183 10.78a.75.75 0 0 1-.318 1.011A3.46 3.46 0 0 0 4 14.863c0 2.983 2.395 4.994 5.566 4.994h.35a.75.75 0 1 1 0 1.5h-.35c-3.806 0-7.066-2.501-7.066-6.494a4.96 4.96 0 0 1 2.672-4.402.75.75 0 0 1 1.011.319"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.107 20.167a.44.44 0 0 0 0 .88h.44v-.88zm1.94 0h.637a.75.75 0 0 0 0-1.5h-2.577a1.94 1.94 0 1 0 0 3.88h2.577a.75.75 0 0 0 0-1.5h-.637zM10.841 15.362a.75.75 0 0 1 .245 1.032 4.26 4.26 0 0 1-3.627 2.026.75.75 0 0 1 0-1.5c.992 0 1.863-.524 2.35-1.314a.75.75 0 0 1 1.032-.244M8.39 12.653a.75.75 0 0 1 .119 1.054 10 10 0 0 1-.796.879.75.75 0 0 1-1.054-1.067 9 9 0 0 0 .677-.747.75.75 0 0 1 1.054-.12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEBikeDisconnectOutline;
