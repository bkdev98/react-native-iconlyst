import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeoOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.961 5.973a.75.75 0 0 1 .75.75l-.002 10.483 5.16 2.58.002-10.042a.75.75 0 0 1 1.5 0L12.369 21a.75.75 0 0 1-1.086.671l-6.66-3.33a.75.75 0 0 1-.414-.671l.002-10.946a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.61 2.32a.75.75 0 0 1 .629-.003l6.611 3.004a.75.75 0 0 1 .01 1.36l-7.919 3.742a.75.75 0 0 1-.64-1.356l6.455-3.05-4.823-2.191-7.654 3.577a.75.75 0 0 1-.635-1.36z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.54 5.336a.75.75 0 0 1 .75.75v11.259a.75.75 0 0 1-1.084.67l-7.922-3.956a.75.75 0 1 1 .67-1.342l6.837 3.415V6.086a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNeoOutline;
