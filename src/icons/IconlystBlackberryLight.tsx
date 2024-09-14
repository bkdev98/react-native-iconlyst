import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlackberryLight = ({
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
      d="M14.625 8.814c1.966-.81 2.702-2.48 2.702-3.537-2.404-.245-3.53.543-3.793.967.196-.58.162-2.043-1.534-3.244-1.697 1.201-1.73 2.663-1.534 3.244-.263-.424-1.39-1.212-3.793-.967 0 1.041.648 2.676 2.556 3.499M10.312 12.785a.976.976 0 1 1-1.953 0M15.64 12.52a.976.976 0 1 1-1.952 0M12.976 16.501a.976.976 0 1 1-1.952 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.621 10.846c.67-1.095 1.963-1.639 3.212-1.463.736-.719 2.028-1.246 3.215-1.214 1.187-.032 2.383.495 3.119 1.214 1.249-.176 2.542.368 3.211 1.463.535.873.549 1.894.134 2.746q.023.033.044.069c.962 1.572-.061 3.53-1.764 3.937-.112 1.413-1.38 2.448-2.755 2.482-1.033 1.204-2.923 1.249-4.074 0-1.375-.034-2.643-1.07-2.755-2.482-1.703-.406-2.726-2.365-1.764-3.937l.044-.07a2.84 2.84 0 0 1 .133-2.745"
    />
  </Svg>
);
export default IconlystBlackberryLight;
