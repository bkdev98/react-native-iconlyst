import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReduxLight = ({
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
      cx={11.691}
      cy={9.595}
      r={1.512}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={8.47}
      cy={15.665}
      r={1.512}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={15.389}
      cy={15.29}
      r={1.512}
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
      d="M14.642 16.625a9 9 0 0 1-2.888 2.608c-3.261 1.883-6.973 1.56-8.29-.72-1.018-1.764-.305-4.183 1.58-6.06"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.914 14.259a8.8 8.8 0 0 1-.88-3.9c0-3.767 2.134-6.82 4.767-6.82 2.134 0 3.94 2.005 4.548 4.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.218 9.773a8.9 8.9 0 0 1 3.795 1.203c3.262 1.883 4.839 5.258 3.522 7.539-1.045 1.811-3.602 2.387-6.244 1.603"
    />
  </Svg>
);
export default IconlystReduxLight;
