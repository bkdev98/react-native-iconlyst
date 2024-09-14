import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFemaleWomanBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.088 5.06a5.912 5.912 0 1 0 0 11.824 5.912 5.912 0 0 0 0-11.823m-4.91 12.116A7.911 7.911 0 0 0 21 10.972a7.912 7.912 0 1 0-14.221 4.775L5.57 16.955l-.76-.76a1 1 0 0 0-1.415 1.413l.76.761-.862.863a1 1 0 1 0 1.414 1.414l.863-.862.759.759a1 1 0 1 0 1.414-1.414l-.759-.76z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFemaleWomanBold;
