import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFtxTokenOutline = ({
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
      d="M7 16.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 7 21zm1.5.75v3h3v-3zM7.9 3a.75.75 0 0 1 .75-.75h12.6A.75.75 0 0 1 22 3v4.5a.75.75 0 0 1-.75.75H8.65a.75.75 0 0 1-.75-.75zm1.5.75v3h11.1v-3zM10.197 9.84a.75.75 0 0 1 .75-.75h6.703a.75.75 0 0 1 .75.75v4.23a.75.75 0 0 1-.75.75h-6.703a.75.75 0 0 1-.75-.75zm1.5.75v2.73H16.9v-2.73zM2.5 9.75A.75.75 0 0 1 3.25 9h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75zm1.5.75v3h3v-3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFtxTokenOutline;
