import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashCircleDisableLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.365 5.773A9 9 0 1 1 5.637 18.5 9 9 0 0 1 18.365 5.773"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.654 7.843-3.347 4.61a.497.497 0 0 0 .402.79h2.739v2.895c0 .482.617.683.9.292l3.347-4.61a.498.498 0 0 0-.402-.79h-2.739V8.135a.497.497 0 0 0-.9-.292"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.678 5.813 4.298 4.298M18.28 18.413l-4.195-4.194"
    />
  </Svg>
);
export default IconlystFlashCircleDisableLight;
