import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendOutlinesharp = ({
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
      d="m21.739 1.82.652.675-5.772 19.553h-.986l-5.38-8.05-8.05-5.38v-.99zM4.667 8.46l6.667 4.456 4.45 6.66 4.668-15.81z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.543 8.826 11.04 14.33l-1.061-1.06 5.503-5.503z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendOutlinesharp;
