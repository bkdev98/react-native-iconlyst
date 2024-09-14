import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeGlobeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.574 13.823-3.909-3.208a1.05 1.05 0 0 0-1.33 0l-3.91 3.208M8.181 13.2l.672 4.91M9.117 12.42v-1.845M16.127 8.65h.01M11.514 6.701h.01M6.832 9.751h.01M12 15.92v2.19M15.169 18.11l.65-4.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3.365a7.839 7.839 0 0 0-3.645 14.78h7.29a7.84 7.84 0 0 0-.553-14.147M8.374 18.18l-.794 1.237c-.505.79-.758 1.184-.738 1.51a1 1 0 0 0 .408.745c.264.193.732.193 1.67.193H12M15.083 21.865c.937 0 1.406 0 1.67-.193a1 1 0 0 0 .407-.745c.02-.326-.233-.72-.738-1.51l-.797-1.243"
    />
  </Svg>
);
export default IconlystHomeGlobeBroken;
