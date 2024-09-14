import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardInformationLight = ({
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
      d="M17.036 4.54H6.966c-2.437 0-3.964 1.724-3.964 4.165v6.587c0 2.442 1.52 4.166 3.963 4.166h10.07c2.445 0 3.965-1.724 3.965-4.166V8.705c0-2.441-1.52-4.166-3.964-4.166"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9.123h17.998M6.43 15.436h3.413M6.43 12.717h2.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.306 15.69h1.275a.99.99 0 0 0 .989-.989V13.45a.99.99 0 0 0-.989-.988h-1.275a.99.99 0 0 0-.989.988v1.252c0 .546.443.989.989.989"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardInformationLight;
