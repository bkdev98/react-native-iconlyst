import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp2Outline = ({
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
      d="M2.5 20.492a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.375 17.484a2.885 2.885 0 0 1 5.77 0v2.936a.75.75 0 0 1-1.5 0v-2.936a1.384 1.384 0 1 0-2.77 0v2.936a.75.75 0 0 1-1.5 0zM13.61 2.848a.75.75 0 0 1 .304 1.016l-.968 1.795-.032.067-8.127 15.067a.75.75 0 0 1-1.32-.712l8.095-15.009.032-.066 1-1.854a.75.75 0 0 1 1.016-.304"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.89 2.848a.75.75 0 0 1 1.016.303l1.008 1.863 8.119 15.067a.75.75 0 0 1-1.32.712L10.587 3.864a.75.75 0 0 1 .302-1.017"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.969 11.94a.75.75 0 0 1 .75-.75h6.907a.75.75 0 0 1 0 1.5H8.719a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp2Outline;
