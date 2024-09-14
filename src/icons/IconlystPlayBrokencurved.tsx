import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayBrokencurved = ({
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
      d="M11.575 2.754C5.162 2.905 3 5.289 3 11.996c0 6.937 2.313 9.25 9.25 9.25s9.25-2.313 9.25-9.25c0-6.043-1.755-8.577-6.795-9.13"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.666 11.852c0-.904-4.584-3.796-5.104-3.276-.519.52-.57 5.983 0 6.552.571.571 5.104-2.372 5.104-3.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayBrokencurved;
