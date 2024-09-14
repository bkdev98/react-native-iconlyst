import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGemLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m12.172 20.078 3.127-9.828M11.77 20.078 8.643 10.25M7.67 3.926l3.892 6.324M16.273 3.926 12.38 10.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.816 19.551 3.51 11.524A1.96 1.96 0 0 1 3.34 9.1l2.95-4.323a1.96 1.96 0 0 1 1.62-.855h8.186c.648 0 1.255.321 1.62.856L20.66 9.1c.51.75.44 1.752-.17 2.423l-7.308 8.028a1.6 1.6 0 0 1-2.366 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.041 10.246h17.96"
    />
  </Svg>
);
export default IconlystGemLight;
