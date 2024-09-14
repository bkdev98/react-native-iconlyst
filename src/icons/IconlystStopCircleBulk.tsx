import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopCircleBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5c5.24 0 9.5-4.262 9.5-9.5s-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.045 13.202c0 1.338-.904 2.272-2.199 2.272h-2.554c-1.294 0-2.199-.934-2.199-2.272v-2.407c0-1.338.905-2.272 2.199-2.272h2.554c1.295 0 2.199.934 2.199 2.272zm-4.753-3.178h2.554c.578 0 .7.42.7.772v2.407c0 .352-.122.772-.7.772h-2.554c-.578 0-.699-.42-.699-.772v-2.407c0-.288.091-.772.7-.772"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopCircleBulk;
