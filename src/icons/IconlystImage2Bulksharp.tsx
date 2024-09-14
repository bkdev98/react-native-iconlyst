import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImage2Bulksharp = ({
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
      d="M2.5 22.354H22v-19.5H2.5z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M4.368 20.803h15.919l.206-.392-5.57-8.078-.41-.003-3.824 5.37-2.491-2.084-.357.04L4.17 20.4zM11.203 9.179a2.31 2.31 0 0 0-2.307-2.305 2.307 2.307 0 0 0-2.304 2.305 2.31 2.31 0 0 0 2.304 2.306 2.31 2.31 0 0 0 2.307-2.306"
    />
  </Svg>
);
export default IconlystImage2Bulksharp;
