import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCutTweezersOutline = ({
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
      d="M4.371 7.348a3.098 3.098 0 1 1 6.196 0 3.098 3.098 0 0 1-6.196 0M7.47 5.75a1.598 1.598 0 1 0 0 3.196 1.598 1.598 0 0 0 0-3.196m0 9.305a1.598 1.598 0 1 0 0 3.195 1.598 1.598 0 0 0 0-3.195M4.37 16.652a3.098 3.098 0 1 1 6.196 0 3.098 3.098 0 0 1-6.196 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.75 8.295a.75.75 0 0 1 1.06-.04l9.748 9.037a.75.75 0 0 1-1.02 1.1L8.791 9.355a.75.75 0 0 1-.04-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.598 5.646a.75.75 0 0 1-.04 1.06l-9.747 9.037a.75.75 0 1 1-1.02-1.1l9.747-9.037a.75.75 0 0 1 1.06.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCutTweezersOutline;
