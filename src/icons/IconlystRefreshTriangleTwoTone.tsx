import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshTriangleTwoTone = ({
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
      d="m19.23 14.219.94 1.646c.664 1.16-.18 2.61-1.52 2.61h-7.095"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.338 16.688-1.787 1.786 1.777 1.778M8.246 18.472H6.353c-1.347 0-2.192-1.46-1.519-2.62l.947-1.645"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.098 6.737.93-1.612c.673-1.168 2.362-1.168 3.036.009l.912 1.603M7.01 12.078 8.87 8.87M16.186 8.871l1.825 3.198"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRefreshTriangleTwoTone;
