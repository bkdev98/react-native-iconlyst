import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsdCoinLight = ({
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.59 7.545c-2.43 2.43-2.43 6.48 0 8.91M16.41 16.453c2.43-2.43 2.43-6.48 0-8.91M13.568 8.719h-1.962a1.643 1.643 0 1 0 0 3.285h.788a1.643 1.643 0 1 1 0 3.286h-1.962M12 15.29v1.165m0-8.91v1.178"
    />
  </Svg>
);
export default IconlystUsdCoinLight;