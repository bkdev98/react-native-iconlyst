import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasGiftBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.694 16.37a.75.75 0 0 1-.75 1.299l-1.194-.69v1.379a.75.75 0 0 1-1.5 0V16.98l-1.195.69a.747.747 0 0 1-1.024-.275.75.75 0 0 1 .274-1.024l1.195-.69-1.195-.69a.75.75 0 0 1 .75-1.3l1.195.69v-1.38a.75.75 0 0 1 1.5 0v1.38l1.194-.69a.75.75 0 0 1 .75 1.299l-1.194.69zM8.396 4.274c1.45 0 2.245 1.595 2.611 2.643h-2.61c-.69 0-1.253-.593-1.253-1.32 0-.73.562-1.323 1.252-1.323m4.666 4.143c.28.685.74 1.433 1.428 1.692a.75.75 0 0 1-.529 1.405c-1.13-.428-1.809-1.444-2.204-2.34l-1.36 2.052a.75.75 0 0 1-1.25-.83l1.312-1.98zm2.54-4.143c.69 0 1.25.593 1.25 1.323 0 .727-.56 1.32-1.25 1.32h-2.61c.365-1.048 1.161-2.643 2.61-2.643m2.322 2.819c.267-.435.428-.946.428-1.496 0-1.557-1.234-2.823-2.75-2.823-1.855 0-2.969 1.369-3.603 2.639-.634-1.27-1.748-2.64-3.603-2.64-1.517 0-2.752 1.267-2.752 2.824 0 .55.161 1.062.43 1.497C4.287 7.54 3.14 9.12 3.14 11.322v6.118c0 2.615 1.602 4.37 3.987 4.37h9.746c2.383 0 3.985-1.755 3.985-4.37v-6.118c0-2.204-1.148-3.784-2.935-4.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasGiftBold;
