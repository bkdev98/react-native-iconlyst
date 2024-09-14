import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageRecognitionTwoTone = ({
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
      d="M3.5 8.47V6.891A3.89 3.89 0 0 1 7.393 3h1.29M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M21.5 15.531v1.577A3.89 3.89 0 0 1 17.608 21h-1.29M21.5 8.47V6.891A3.89 3.89 0 0 0 17.607 3H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.527 12.47c1.989-4.311 7.957-4.311 9.946 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 14.788a1.44 1.44 0 0 1-1.437-1.438 1.44 1.44 0 0 1 1.437-1.438 1.44 1.44 0 0 1 1.438 1.438 1.44 1.44 0 0 1-1.438 1.438"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageRecognitionTwoTone;
