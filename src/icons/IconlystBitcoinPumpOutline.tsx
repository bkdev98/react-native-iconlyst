import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinPumpOutline = ({
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
      d="M7.142 18.207a.75.75 0 0 1-.419-.128 8.654 8.654 0 1 1 13.493-7.176.75.75 0 0 1-1.5 0 7.154 7.154 0 1 0-11.153 5.932.75.75 0 0 1-.42 1.372M20.842 16.8a.75.75 0 0 1-.721-.543l-.407-1.415-1.416.407a.748.748 0 0 1-.974-.804.75.75 0 0 1 .56-.636l2.136-.615a.75.75 0 0 1 .928.512l.614 2.138a.75.75 0 0 1-.72.957"
    />
    <Path
      fill={props.color}
      d="M10.231 21.749a.74.74 0 0 1-.608-.313.75.75 0 0 1-.028-.832l2.254-3.635a.75.75 0 0 1 .852-.324l4.36 1.306 2.518-4.41a.75.75 0 1 1 1.3.745l-2.815 4.926a.75.75 0 0 1-.866.346l-4.38-1.311-1.95 3.147a.75.75 0 0 1-.637.355M12.266 13.986h-1.951a.75.75 0 0 1-.75-.75v-2.709a.75.75 0 0 1 .75-.75h1.893a2.153 2.153 0 0 1 2.152 1.9 2.106 2.106 0 0 1-2.094 2.31m-1.2-1.5h1.2a.6.6 0 0 0 .574-.418.6.6 0 0 0 .027-.253.643.643 0 0 0-.66-.54h-1.142z"
    />
    <Path
      fill={props.color}
      d="M12.266 11.28h-1.951a.75.75 0 0 1-.75-.75V7.82a.75.75 0 0 1 .75-.75h1.893a2.153 2.153 0 0 1 2.152 1.9 2.106 2.106 0 0 1-2.094 2.31m-1.2-1.5h1.2a.6.6 0 0 0 .447-.2.6.6 0 0 0 .154-.472.643.643 0 0 0-.66-.54h-1.142zM11.725 14.788a.75.75 0 0 1-.75-.75v-.8a.75.75 0 1 1 1.5 0v.8a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M11.725 8.57a.75.75 0 0 1-.75-.75v-.8a.75.75 0 1 1 1.5 0v.8a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBitcoinPumpOutline;
