import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoopSmellBulk = ({
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
      d="M19.09 14.198c-.04-1.83-1.25-3.4-2.9-3.89.14-1.92-1-3.56-3.31-4.69-.44-.22-.98-.48-1.53-.58a.76.76 0 0 0-.68.24c-.17.19-.23.45-.17.7.01.04.04.1.05.14.29.63-.18 1.55-1.26 2.45-.53.44-.93 1.02-1.14 1.64-1.84.36-3.21 2.02-3.26 4-1.56.59-2.64 2.14-2.64 3.91 0 2.08 1.48 3.68 3.91 4.18 1.67.25 3.97.35 6.14.35 2.59 0 5-.15 5.9-.37 2.16-.54 3.55-2.18 3.55-4.16 0-1.78-1.08-3.34-2.66-3.92"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.827 10.104a.75.75 0 0 0 1.34.674 2.66 2.66 0 0 0-.003-2.406 1.16 1.16 0 0 1 .026-1.107.75.75 0 0 0-1.3-.748 2.65 2.65 0 0 0-.062 2.536c.167.325.166.718 0 1.051M5.013 6.998a.751.751 0 0 0 1.334.686 2.66 2.66 0 0 0-.002-2.416 1.14 1.14 0 0 1 .028-1.093.75.75 0 1 0-1.3-.748A2.63 2.63 0 0 0 5.01 5.95c.171.338.173.721.004 1.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoopSmellBulk;
