import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopCircleBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.276 10.024h-2.554c-.608 0-.699.484-.699.772v2.407c0 .352.121.772.7.772h2.553c.578 0 .7-.42.7-.772v-2.407c0-.352-.122-.772-.7-.772"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.475 13.203c0 1.338-.904 2.272-2.199 2.272h-2.554c-1.294 0-2.199-.934-2.199-2.272v-2.407c0-1.339.905-2.273 2.199-2.273h2.554c1.295 0 2.199.934 2.199 2.273zM12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopCircleBold;
