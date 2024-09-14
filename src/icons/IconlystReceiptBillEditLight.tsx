import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillEditLight = ({
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
      d="m10.227 20.59-2.125-.868a1.77 1.77 0 0 0-1.432.042l-.753.36a1.192 1.192 0 0 1-1.709-1.076l.009-12.156C4.217 4.49 5.555 3 7.953 3h7.24c2.405 0 3.713 1.49 3.713 3.892v4.193M13.614 8.906H8.758m3.237 3.772H8.758"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.185 20.847-.834.14a.935.935 0 0 1-1.084-1.023l.094-.86a2 2 0 0 1 .497-1.118l3.18-3.513a1.144 1.144 0 0 1 1.619-.062l.766.71c.464.429.493 1.154.064 1.618l-3.141 3.468a2 2 0 0 1-1.161.64"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillEditLight;
