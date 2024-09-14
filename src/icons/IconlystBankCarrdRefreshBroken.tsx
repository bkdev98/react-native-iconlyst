import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRefreshBroken = ({
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
      d="M14.76 18.348a3.149 3.149 0 1 0-.12-3.044"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.384 15.302h-1.743v-1.734M21.25 11.596V8.301c0-2.442-1.52-4.167-3.965-4.167H12.25M10.542 19.054H7.214c-2.444 0-3.965-1.725-3.965-4.167V8.3c0-2.442 1.528-4.167 3.965-4.167h1.517M3.25 9.433h15.097"
    />
  </Svg>
);
export default IconlystBankCarrdRefreshBroken;
