import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownLeftLGOutline = ({
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
      d="M18.895 5.105a.75.75 0 0 1 0 1.061L7.447 17.614h5.26a.75.75 0 0 1 0 1.5h-7.07a.75.75 0 0 1-.75-.75v-7.071a.75.75 0 0 1 1.5 0v5.26L17.834 5.105a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownLeftLGOutline;
