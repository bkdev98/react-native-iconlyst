import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashCircleBroken = ({
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
      d="M5.636 18.5a9 9 0 1 1 3.712 2.239"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.653 7.843-3.347 4.61a.497.497 0 0 0 .402.79h2.739v2.895c0 .482.617.683.9.292l3.348-4.61a.498.498 0 0 0-.403-.79h-2.739V8.135a.497.497 0 0 0-.9-.292"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashCircleBroken;
