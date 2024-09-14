import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMaskTwoTone = ({
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
      d="m18.376 15.819.797-7.618c-1.21-.329-2.729-.87-4.565-1.687a3.93 3.93 0 0 0-3.173 0A29.7 29.7 0 0 1 6.67 8.2l.764 7.618"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.27 14.008h3.278M10.74 10.68h4.339"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.671 8.2 4.783 7.028m14.39 1.174 1.86-1.163M3.91 11.148c1.667 3.959 5.063 6.676 9 6.676 3.927 0 7.334-2.718 9-6.676"
    />
  </Svg>
);
export default IconlystMaskTwoTone;
