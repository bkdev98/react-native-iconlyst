import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedLove1Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.073 7.225c.795 1.231 2.349 1.977 2.428 2.013a.5.5 0 0 0 .421.001c.077-.036 1.618-.772 2.423-2.015.581.097 1.798.346 3.262.79a.2.2 0 0 1 .141.19v3.355a.2.2 0 0 1-.206.201c-.21-.003-.45-.004-.746-.004H7.622c-.293 0-.533 0-.742.004a.2.2 0 0 1-.206-.201V8.205a.2.2 0 0 1 .141-.191 28 28 0 0 1 3.258-.789m12.036 7.203a3.49 3.49 0 0 0-1.861-2.31V4.945a.75.75 0 0 0-1.5 0v1.278c0 .133-.128.229-.256.192a29 29 0 0 0-2.676-.63 2.4 2.4 0 0 0-.244-1.182 2.03 2.03 0 0 0-1.213-1.024 2.2 2.2 0 0 0-1.024-.074 1.8 1.8 0 0 0-.623.265 1.7 1.7 0 0 0-.623-.256 2.1 2.1 0 0 0-1.025.065 2.06 2.06 0 0 0-1.297 1.205 2.45 2.45 0 0 0-.166 1.001c-.618.11-1.56.315-2.67.63a.2.2 0 0 1-.257-.193V4.945a.75.75 0 0 0-1.5 0v7.17a3.5 3.5 0 0 0-1.867 2.313c-.098.408-.098.852-.098 1.738 0 .475 0 .738.059.988a2.09 2.09 0 0 0 1.906 1.59v1.031a.75.75 0 0 0 1.5 0v-.819c0-.11.09-.2.2-.2h11.674c.11 0 .2.09.2.2v.82a.75.75 0 0 0 1.5 0v-1.032a2.087 2.087 0 0 0 1.901-1.591c.06-.248.06-.51.06-.987 0-.886 0-1.33-.1-1.738"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBedLove1Bold;
