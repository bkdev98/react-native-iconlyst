import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartPhoneAiTwoTone = ({
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
      d="M11.033 3h3.724a3.62 3.62 0 0 1 3.618 3.618v10.764A3.62 3.62 0 0 1 14.758 21H9.243a3.62 3.62 0 0 1-3.618-3.617v-5.791"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.33v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5M7.168 8.784l-.1-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.221-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101A3.76 3.76 0 0 0 7.269 8.51zM12.479 10.026a1.77 1.77 0 0 0-1.177-1.179A1.77 1.77 0 0 0 12.48 7.67a1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.179"
    />
  </Svg>
);
export default IconlystSmartPhoneAiTwoTone;
