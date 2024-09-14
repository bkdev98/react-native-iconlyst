import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKiwiHalfLight = ({
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
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 7.71.17.755a1.463 1.463 0 0 0 2.209.915l.655-.414-.414.655a1.463 1.463 0 0 0 .915 2.208l.756.171-.756.17a1.463 1.463 0 0 0-.915 2.209l.414.655-.655-.414a1.463 1.463 0 0 0-2.208.915L12 16.29l-.17-.756a1.463 1.463 0 0 0-2.209-.915l-.655.414.414-.655a1.463 1.463 0 0 0-.915-2.208L7.71 12l.756-.172a1.463 1.463 0 0 0 .915-2.208l-.414-.655.655.414c.855.54 1.986.071 2.208-.915zM18.175 9.557v.01M5.886 9.557v.01M14.406 17.842v.01M10.009 17.842v.01M10.009 6.02v.01"
    />
  </Svg>
);
export default IconlystKiwiHalfLight;
