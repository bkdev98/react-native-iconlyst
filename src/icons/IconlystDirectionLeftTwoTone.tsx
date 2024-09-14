import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionLeftTwoTone = ({
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
      d="m9.687 19.77-4.958-4.958C3 13.084 3.14 10.777 4.872 9.045l4.672-4.671c1.732-1.732 4.033-1.877 5.766-.144l4.958 4.958c1.734 1.734 1.59 4.036-.142 5.767l-4.672 4.672c-1.732 1.732-4.034 1.876-5.767.143"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.858 10.79h4.8a1.58 1.58 0 0 1 1.58 1.58v3.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.048 8.605-2.19 2.182 2.19 2.18"
    />
  </Svg>
);
export default IconlystDirectionLeftTwoTone;
