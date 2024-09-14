import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletAddFundsBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.705 12.588c0 1.52 1.23 2.75 2.74 2.75 1.181 0 3.493-.006 4.324-.009.168 0 .304.138.292.305a5.19 5.19 0 0 1-5.176 4.784h-6.85c-2.87 0-5.2-2.33-5.2-5.2v-6.43c0-2.87 2.33-5.21 5.2-5.21h6.85a5.197 5.197 0 0 1 5.175 4.783.287.287 0 0 1-.292.306c-.832-.002-3.143-.009-4.323-.009-1.51 0-2.74 1.23-2.74 2.75zm-6.334.16h1.074v1.08a.75.75 0 0 0 1.5 0v-1.08h1.079a.75.75 0 0 0 0-1.5h-1.08v-1.08a.75.75 0 0 0-1.5 0v1.08H6.372a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.445 10.158h4.47c.69 0 1.25.56 1.25 1.25v1.18c0 .69-.56 1.25-1.25 1.25h-4.47c-.69 0-1.24-.56-1.24-1.25v-1.18c0-.69.55-1.25 1.24-1.25m.08 1.84a.715.715 0 0 0 1.43 0 .715.715 0 0 0-1.43 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletAddFundsBold;
