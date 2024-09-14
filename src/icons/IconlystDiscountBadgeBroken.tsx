import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBadgeBroken = ({
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
      strokeWidth={1.5}
      d="M4.99 7.12c0-1.216.985-2.2 2.199-2.2h1a2.2 2.2 0 0 0 1.55-.64l.7-.7a2.2 2.2 0 0 1 3.11-.01l.002.002.008.007.7.7c.412.41.969.64 1.55.64h1.002a2.2 2.2 0 0 1 2.2 2.2M4.35 14.186l-.7-.7a2.197 2.197 0 0 1-.014-3.108l.003-.004.708-.709c.41-.412.64-.969.64-1.55V7.12M19.65 9.738l.7.7a2.2 2.2 0 0 1 .011 3.112h0l-.71.71c-.41.411-.64.968-.64 1.548v1.003a2.2 2.2 0 0 1-2.2 2.197h-1.004c-.581 0-1.139.23-1.55.64l-.7.698a2.2 2.2 0 0 1-3.11.015l-.002-.003-.008-.009-.7-.7a2.2 2.2 0 0 0-1.55-.638H7.19a2.2 2.2 0 0 1-2.199-2.2M9.527 14.451l4.897-4.896"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.305 14.373v.048m.194-.037a.196.196 0 1 1-.392 0 .196.196 0 0 1 .393 0M9.54 9.608v.048m.196-.038a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0"
    />
  </Svg>
);
export default IconlystDiscountBadgeBroken;
