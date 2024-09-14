import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRemoveTwoTone = ({
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
      d="M5.642 4.957C4.29 5.589 3.5 6.968 3.5 8.723v6.593999999999999c0 2.442 1.519 4.162 3.96 4.162h10.07c.572 0 1.09-.096 1.554-.271M21.5 15.318V8.725c0-2.441-1.528-4.162-3.969-4.162h-6.567"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 9.858h-5.54M10.26 9.858H3.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.673 15.194h2.968M20.189 20.383 4.374 3.617"
    />
  </Svg>
);
export default IconlystBankCardRemoveTwoTone;
