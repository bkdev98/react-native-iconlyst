import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBingBrowserLight = ({
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
      d="M9.698 16.65a.506.506 0 0 1-.731-.453V4.264a.506.506 0 0 0-.383-.49L5.55 3.015a.506.506 0 0 0-.628.49v15.22c0 .191.108.366.28.452l3.539 1.77c.142.07.31.07.452 0l9.606-4.803a.51.51 0 0 0 .28-.453V11.33a.51.51 0 0 0-.367-.486l-5.87-1.677a.506.506 0 0 0-.63.609l.743 2.97a.5.5 0 0 0 .264.33l1.815.906z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBingBrowserLight;
