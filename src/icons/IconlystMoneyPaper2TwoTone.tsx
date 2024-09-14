import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.688 4.95h11.624c1.965 0 3.188 1.387 3.188 3.35V15.7c0 1.963-1.223 3.35-3.19 3.35H6.689c-1.965 0-3.188-1.387-3.188-3.35V8.3c0-1.963 1.229-3.35 3.188-3.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.715 15.549h1.403M18.286 8.45h-1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.789 11.998a2.287 2.287 0 1 0-4.575 0 2.287 2.287 0 0 0 4.575 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper2TwoTone;
