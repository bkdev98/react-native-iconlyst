import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystButtonsLight = ({
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
      strokeWidth={1.5}
      d="M11.635 2.175 8.87 5.633a.467.467 0 0 0 .365.76h5.532c.392 0 .61-.454.365-.76l-2.766-3.458a.467.467 0 0 0-.73 0ZM11.635 21.826 8.87 18.37a.467.467 0 0 1 .365-.76h5.532c.392 0 .61.454.365.76l-2.766 3.457a.467.467 0 0 1-.73 0ZM21.825 11.635 18.367 8.87a.467.467 0 0 0-.76.365v5.532c0 .392.454.61.76.365l3.458-2.766a.467.467 0 0 0 0-.73ZM2.174 11.635 5.63 8.87a.467.467 0 0 1 .76.365v5.532c0 .392-.454.61-.76.365l-3.457-2.766a.467.467 0 0 1 0-.73ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
);
export default IconlystButtonsLight;
