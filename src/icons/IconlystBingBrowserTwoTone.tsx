import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBingBrowserTwoTone = ({
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
      d="m15.034 13.981-1.815-.907a.5.5 0 0 1-.264-.33l-.742-2.97a.506.506 0 0 1 .629-.608l5.87 1.677c.217.062.366.26.366.486v4.362a.51.51 0 0 1-.279.452l-9.606 4.804a.5.5 0 0 1-.452 0l-3.54-1.77a.51.51 0 0 1-.28-.452"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.034 13.981 9.698 16.65a.506.506 0 0 1-.731-.452V4.264a.506.506 0 0 0-.383-.49L5.55 3.015a.506.506 0 0 0-.628.49v15.22"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBingBrowserTwoTone;
