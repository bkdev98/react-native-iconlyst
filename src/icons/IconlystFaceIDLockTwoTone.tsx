import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLockTwoTone = ({
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
      d="M3.499 15.815v1.576a3.893 3.893 0 0 0 3.893 3.892h1.257M21.501 15.815v1.576a3.893 3.893 0 0 1-3.893 3.892H16.32M3.499 8.752V7.175a3.893 3.893 0 0 1 3.893-3.892h1.289M21.5 8.752V7.175a3.893 3.893 0 0 0-3.892-3.892H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.31 16.793h-3.62a1.8 1.8 0 0 1-1.798-1.797v-2.033c0-.993.805-1.797 1.798-1.797h3.62c.994 0 1.798.804 1.798 1.797v2.033c0 .992-.804 1.797-1.797 1.797"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.662 11.197v-1.29a2.162 2.162 0 0 0-4.323-.01v1.3"
    />
  </Svg>
);
export default IconlystFaceIDLockTwoTone;
