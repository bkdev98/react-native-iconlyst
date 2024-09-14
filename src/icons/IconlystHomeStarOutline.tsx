import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeStarOutline = ({
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
      d="M4.747 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.811a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.31 3.41a3.13 3.13 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.63 1.63 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.25 11.674-.33.665c-.147.29-.425.494-.749.546l-.01.001-.722.105.527.506c.233.23.345.561.288.893v.002l-.126.713.656-.343c.295-.157.65-.157.945 0l.648.34-.125-.706a1 1 0 0 1 .295-.905l.516-.5-.721-.104h-.003a1.01 1.01 0 0 1-.76-.55v-.002zm2.537.617.008-.007zm-2.85-2.674c.247-.079.522-.063.765.058l.005.003c.186.094.344.246.445.44l.006.012.65 1.31 1.456.21h.002c.255.036.498.17.665.39.309.405.267.982-.108 1.337l-1.048 1.013.252 1.436.004.022a1.01 1.01 0 0 1-.84 1.143h-.005c-.208.032-.422 0-.614-.094l-.018-.009-1.298-.68-1.318.69a1.02 1.02 0 0 1-1.36-.433 1 1 0 0 1-.1-.638v-.002l.252-1.435-1.057-1.017-.01-.01a1.01 1.01 0 0 1 .571-1.713l1.459-.211.65-1.31c.12-.238.327-.42.579-.507z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeStarOutline;
