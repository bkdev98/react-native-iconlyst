import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelBagOutline = ({
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
      d="M5.648 8.015c.784-.821 1.897-1.232 3.201-1.232h6.806c1.305 0 2.417.413 3.2 1.236.776.817 1.144 1.95 1.144 3.233v4.684c0 1.285-.367 2.419-1.145 3.236-.782.823-1.894 1.233-3.199 1.233H8.85c-1.304 0-2.417-.41-3.2-1.233-.78-.817-1.148-1.951-1.148-3.237v-4.683c0-1.286.369-2.42 1.147-3.237M6.734 9.05C6.286 9.52 6 10.245 6 11.252v4.683c0 1.007.285 1.733.733 2.203.443.464 1.13.767 2.115.767h6.806c.986 0 1.67-.303 2.112-.767.447-.47.732-1.195.732-2.202v-4.684c0-1.003-.285-1.73-.732-2.2-.442-.465-1.127-.769-2.112-.769H8.849c-.986 0-1.672.303-2.115.767"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.852 10.323a.75.75 0 0 1 .75.75v5.177a.75.75 0 0 1-1.5 0v-5.177a.75.75 0 0 1 .75-.75M12.252 10.323a.75.75 0 0 1 .75.75v5.177a.75.75 0 0 1-1.5 0v-5.177a.75.75 0 0 1 .75-.75M15.658 10.323a.75.75 0 0 1 .75.75v5.177a.75.75 0 0 1-1.5 0v-5.177a.75.75 0 0 1 .75-.75M8.85 18.905a.75.75 0 0 1 .75.75V21a.75.75 0 1 1-1.5 0v-1.345a.75.75 0 0 1 .75-.75m6.806 0a.75.75 0 0 1 .75.75V21a.75.75 0 1 1-1.5 0v-1.345a.75.75 0 0 1 .75-.75M8.467 4.63a2.38 2.38 0 0 1 2.38-2.38h2.808a2.38 2.38 0 0 1 2.38 2.38v2.903a.75.75 0 0 1-1.5 0V4.631a.88.88 0 0 0-.88-.881h-2.808a.88.88 0 0 0-.88.88v2.903a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWheelBagOutline;
