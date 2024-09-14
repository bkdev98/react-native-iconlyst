import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonRainySnowyTwoTone = ({
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
      d="M12.58 6.741a4.19 4.19 0 0 1 3.827-3.767c-1.24 3.353 1.243 5.81 4.523 4.518a4.194 4.194 0 0 1-3.655 3.819"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.886 4.739 5.86 4.73M16.818 17.77a3.63 3.63 0 0 0 2.135-3.307c0-2.274-1.604-3.627-3.595-3.628 0-1.43-1.122-4.293-4.292-4.293s-4.29 2.863-4.29 4.293c-1.99.017-3.596 1.353-3.596 3.628 0 1.472.875 2.739 2.135 3.308"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.622 21.17.455-1M13.813 18.17l.454-1M16.547 21.175q.005 0 .005-.005t-.005-.005-.005.005.005.005M11.087 21.175q.005 0 .005-.005t-.005-.005q-.005 0-.005.005t.005.005M9.263 18.18q.004 0 .004-.005t-.004-.005-.005.005.005.005"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoonRainySnowyTwoTone;
