import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarForwardLight = ({
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
      d="M16.752 9.604H8.256M8.864 3v2.576M16.137 3v2.576"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.69 4.422h7.62c2.644 0 4.294 1.472 4.294 4.178v8.146c0 2.748-1.65 4.254-4.293 4.254H8.698c-2.651 0-4.294-1.48-4.294-4.186V8.6C4.397 5.894 6.04 4.422 8.69 4.422"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.888 15.26h-6.8M13.856 17.185l2.065-1.924-2.065-1.925"
    />
  </Svg>
);
export default IconlystCalendarForwardLight;
