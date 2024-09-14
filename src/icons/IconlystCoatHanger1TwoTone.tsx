import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger1TwoTone = ({
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
      d="m14.555 12.048 5.53 2.29a2.29 2.29 0 0 1-.875 4.407m-13.42 0a2.29 2.29 0 0 1-2.29-2.292v-.086c0-.92.55-1.75 1.398-2.11 0 0 7.986-4.42 8.426-4.684.94-.566 1.628-1.476 1.257-2.771-.204-.715-.74-1.28-1.458-1.472-1.47-.389-2.794.793-2.794 2.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.21 18.745H5.79"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCoatHanger1TwoTone;
