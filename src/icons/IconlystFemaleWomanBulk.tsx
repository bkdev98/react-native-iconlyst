import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFemaleWomanBulk = ({
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.177 10.972a6.912 6.912 0 1 1 13.823 0 6.912 6.912 0 0 1-13.823 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.85 15.09a1 1 0 0 1 0 1.414L6.983 18.37l.76.76a1 1 0 1 1-1.415 1.413l-.76-.759-.862.863a1 1 0 1 1-1.414-1.415l.863-.862-.761-.761a1 1 0 1 1 1.414-1.415l.761.762 1.865-1.865a1 1 0 0 1 1.415 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFemaleWomanBulk;
