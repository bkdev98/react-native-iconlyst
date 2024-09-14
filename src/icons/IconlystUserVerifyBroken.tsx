import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserVerifyBroken = ({
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
      d="m15.288 16.72.92.922 1.897-1.897m-4.684-1.32c0-.566.458-1.024 1.023-1.025h.466c.27 0 .53-.107.722-.297l.325-.326a1.024 1.024 0 0 1 1.448-.005l.004.005.327.325c.191.19.45.298.721.298h.467c.565 0 1.024.458 1.024 1.024v.465c0 .27.107.53.297.722l.326.326c.401.4.404 1.047.005 1.449l-.004.003-.326.327c-.191.192-.297.45-.297.72v.468c-.001.565-.46 1.023-1.025 1.022h-.468c-.27 0-.53.107-.721.298l-.327.326a1.024 1.024 0 0 1-1.447.006l-.001-.002-.004-.003-.326-.325a1.02 1.02 0 0 0-.72-.298h-.466a1.024 1.024 0 0 1-1.023-1.024v-.468c0-.27-.108-.529-.298-.721l-.325-.326a1.023 1.023 0 0 1-.008-1.447l.002-.002.005-.004.325-.326c.19-.191.298-.45.298-.721zM3.928 19.03c0-2.094 1.652-4.7 6.41-4.7M6.404 7.273a4.015 4.015 0 1 0 .98-2.629"
    />
  </Svg>
);
export default IconlystUserVerifyBroken;
