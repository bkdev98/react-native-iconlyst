import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunglassesBroken = ({
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
      d="M12.273 3.367H8.227c-2.82 0-4.587 1.997-4.587 4.822v7.623c0 2.826 1.76 4.822 4.587 4.822h8.09c2.83 0 4.59-1.996 4.59-4.822V8.19c0-2.825-1.76-4.822-4.588-4.822h-.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.163 11.785h-2.26a.72.72 0 0 1-.71-.617l-.295-2.1a.717.717 0 0 1 .71-.816h2.815c.431 0 .764.377.711.805l-.26 2.099a.716.716 0 0 1-.711.629M16.676 11.785h-2.26a.72.72 0 0 1-.71-.617l-.295-2.1a.717.717 0 0 1 .71-.816h2.815c.431 0 .765.377.711.805l-.26 2.099a.716.716 0 0 1-.711.629"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.435 15.055c.69.899 1.708 1.46 2.837 1.46.841 0 1.62-.312 2.249-.841M13.543 9.953h-2.52M17.538 9.953h3.712m-14.231 0H3.25"
    />
  </Svg>
);
export default IconlystSunglassesBroken;
