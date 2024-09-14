import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardLight = ({
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
      d="M3 9.834h17.998M6.9 15.17h1.428M10.783 15.17h1.428"
    />
  </Svg>
);
export default IconlystBankCardLight;
