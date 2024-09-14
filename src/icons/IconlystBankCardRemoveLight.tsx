import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardRemoveLight = ({
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
      d="M5.142 4.957C3.79 5.589 3 6.968 3 8.723v6.593999999999999c0 2.442 1.519 4.162 3.96 4.162h10.07c.572 0 1.09-.096 1.554-.271M21 15.318V8.725c0-2.441-1.528-4.162-3.969-4.162h-6.567M21 9.858h-5.54M9.76 9.858H3M7.173 15.194h2.968M19.689 20.383 3.874 3.617"
    />
  </Svg>
);
export default IconlystBankCardRemoveLight;
