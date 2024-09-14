import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToilet1Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M15.629 3.35c2.76 0 4.615 1.936 4.615 4.819v9.36c0 2.883-1.854 4.82-4.614 4.82H8.37c-2.762 0-4.616-1.937-4.616-4.82V8.17c0-2.883 1.854-4.82 4.616-4.82z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M3.755 10.607h2.466a.75.75 0 0 0 0-1.5H3.755zM3.755 13.604H6.21a.75.75 0 0 0 0-1.5H3.755zM3.755 16.602h2.487a.75.75 0 1 0 0-1.5H3.755zM20.245 15.102v1.5h-2.492a.75.75 0 1 1 0-1.5zM20.245 12.104v1.5h-2.46a.75.75 0 0 1 0-1.5zM20.245 9.107v1.5h-2.472a.75.75 0 0 1 0-1.5z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.611 10.336a4.389 4.389 0 0 1 8.778 0v5.027a4.39 4.39 0 0 1-8.778 0zm4.39-1.236a1.151 1.151 0 0 0 0 2.3 1.151 1.151 0 0 0 0-2.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystToilet1Bulk;
