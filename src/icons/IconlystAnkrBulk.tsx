import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnkrBulk = ({
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
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.87 11.67a.75.75 0 0 0 .75-.75v-.67c0-.877-.506-1.69-1.277-2.069l-2.787-1.419a2.32 2.32 0 0 0-2.109 0L8.668 8.175a2.32 2.32 0 0 0-1.285 2.074v.67a.75.75 0 0 0 1.5 0v-.67c0-.309.174-.594.455-.732l2.792-1.42a.82.82 0 0 1 .743 0l2.8 1.425a.81.81 0 0 1 .446.727v.67c0 .414.336.75.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.62 13.8c0 .891-.517 1.714-1.315 2.097l-2.785 1.357a2.331 2.331 0 0 1-2.037.001l-2.792-1.36A2.33 2.33 0 0 1 7.383 13.8v-.71a.75.75 0 0 1 1.5 0v.71c0 .317.18.61.461.743l2.406 1.173v-.958a2.875 2.875 0 0 1-2.13-2.768 2.883 2.883 0 0 1 2.88-2.88 2.883 2.883 0 0 1 2.88 2.88 2.88 2.88 0 0 1-2.13 2.768v.96l2.402-1.173a.83.83 0 0 0 .467-.745v-.71a.75.75 0 0 1 1.5 0zm-5.121-3.19c.76 0 1.38.619 1.38 1.38s-.62 1.38-1.38 1.38c-.761 0-1.38-.62-1.38-1.38 0-.761.619-1.38 1.38-1.38"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAnkrBulk;
