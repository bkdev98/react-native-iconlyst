import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeight1TwoTone = ({
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
      d="M20.994 9.138c.645.655.68 1.439.069 2.112q-.543.598-1.141 1.14c-.6.544-1.525.52-2.098-.05a2832 2832 0 0 1-5.677-5.678 1.506 1.506 0 0 1-.02-2.104c.37-.384.744-.763 1.13-1.127.618-.583 1.438-.57 2.05.022.323.312 5.385 5.378 5.687 5.685M9.637 20.493c.656.645 1.44.68 2.113.069q.597-.544 1.14-1.141c.543-.6.52-1.525-.052-2.098q-2.834-2.842-5.677-5.677a1.505 1.505 0 0 0-2.103-.02 33 33 0 0 0-1.128 1.13c-.583.618-.57 1.438.023 2.05z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.828 18.161 2.518 2.518M18.66 3.328l2.518 2.518M16.202 10.872l-4.862 4.863m.033-.033 4.862-4.862M8.771 13.166l4.862-4.862m.032-.032-4.862 4.863"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWeight1TwoTone;
