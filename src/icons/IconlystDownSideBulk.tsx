import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSideBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.2 14.709a.3.3 0 0 0 .3-.3V7.784c0-3.16-2.22-5.284-5.526-5.284H8.027C4.721 2.5 2.5 4.623 2.5 7.783v6.626a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.8 16.218a.29.29 0 0 0-.293.3c.136 2.993 2.32 4.982 5.52 4.982h7.947c3.2 0 5.383-1.99 5.52-4.982a.29.29 0 0 0-.294-.3zM8.886 7.802a.75.75 0 0 1 1.061.04L12 10.054l2.054-2.212a.75.75 0 0 1 1.061-.04c.302.282.32.756.039 1.06l-2.604 2.804a.75.75 0 0 1-1.1 0L8.847 8.862a.75.75 0 0 1 .039-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSideBulk;
