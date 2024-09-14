import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentVerifiedTwoTone = ({
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
      d="M10.688 20.028H8.236a3.897 3.897 0 0 1-3.897-3.896V6.897A3.897 3.897 0 0 1 8.236 3h6.713a3.897 3.897 0 0 1 3.897 3.897v3.184"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.038 16.723.92.921 1.897-1.897m-4.684-1.32c0-.566.458-1.024 1.023-1.025h.466c.27 0 .53-.107.722-.297l.325-.326a1.024 1.024 0 0 1 1.448-.005v.001l.004.004.327.325c.191.19.45.298.721.298h.467c.565 0 1.024.458 1.024 1.024v.465c0 .27.107.53.297.722l.326.326c.401.399.404 1.047.005 1.449l-.004.003-.326.327c-.191.192-.297.45-.297.72v.468c-.001.565-.46 1.023-1.025 1.022h-.468c-.27 0-.53.107-.721.298l-.327.326a1.024 1.024 0 0 1-1.447.006l-.001-.002-.004-.003-.326-.326a1.02 1.02 0 0 0-.72-.297h-.466a1.024 1.024 0 0 1-1.023-1.024v-.469c0-.27-.108-.528-.298-.72l-.325-.327a1.023 1.023 0 0 1-.008-1.446l.002-.002.005-.004.325-.326c.19-.191.298-.45.298-.722zM12.245 8.656H8.36m1.585 4.197H8.36"
    />
  </Svg>
);
export default IconlystDocumentVerifiedTwoTone;
