import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonTwoTone = ({
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
      d="M7.69 4.99h1c.58 0 1.137-.23 1.55-.638l.699-.7m3.11-.01h.002l.009.008.7.7c.411.41.969.64 1.55.64h1.002m2.2 2.2v1c0 .58.23 1.137.639 1.55l.7.7m.01 3.11-.71.71c-.409.412-.638.969-.638 1.55v1.003m-2.201 2.196h-1.005c-.58 0-1.138.23-1.55.64l-.7.699m-3.11.014-.71-.71a2.2 2.2 0 0 0-1.549-.64H7.69m-2.198-2.2v-1.005c0-.58-.231-1.137-.64-1.548l-.7-.7m-.014-3.109.712-.712c.41-.413.64-.97.64-1.55V7.19"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.49 7.19a2.2 2.2 0 0 1 2.2-2.2m3.248-1.339a2.2 2.2 0 0 1 3.112-.01M17.31 4.99a2.2 2.2 0 0 1 2.2 2.2m1.34 3.25a2.2 2.2 0 0 1 .01 3.112m-1.349 3.262a2.2 2.2 0 0 1-2.2 2.196m-3.255 1.339a2.2 2.2 0 0 1-3.11.014m-3.258-1.35a2.2 2.2 0 0 1-2.199-2.2M4.151 13.56a2.2 2.2 0 0 1-.015-3.109"
    />
  </Svg>
);
export default IconlystPolygonTwoTone;
