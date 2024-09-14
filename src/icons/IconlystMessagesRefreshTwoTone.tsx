import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesRefreshTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.777 21.207a8.97 8.97 0 0 0 6.92-3.22c2.72-3.227 2.807-8.071.194-11.386a8.988 8.988 0 0 0-13.448-.812c-2.75 2.76-3.345 6.849-1.804 10.191.13.322.626 1.204.96 1.784.189.33.17.737-.05 1.048-.22.31-.497.706-.715 1.033a.874.874 0 0 0 .723 1.362c2.348 0 6.326-.004 7.22 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.855 13.862a3.241 3.241 0 0 0 6.02-1.685 3.25 3.25 0 0 0-3.243-3.255c-1.268 0-2.366.73-2.9 1.793"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.529 10.714-1.797.001V8.922"
    />
  </Svg>
);
export default IconlystMessagesRefreshTwoTone;
