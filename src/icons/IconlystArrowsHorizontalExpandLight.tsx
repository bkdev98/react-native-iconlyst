import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizontalExpandLight = ({
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
      d="M14.727 7.527a1.8 1.8 0 0 1 2.546 0l3.2 3.2a1.8 1.8 0 0 1 0 2.546l-3.2 3.2a1.8 1.8 0 1 1-2.546-2.546l.127-.127H9.147l.127.127a1.8 1.8 0 0 1-2.546 2.546l-3.2-3.2a1.8 1.8 0 0 1 0-2.546l3.2-3.2a1.8 1.8 0 1 1 2.546 2.546l-.127.127h5.708l-.127-.127a1.8 1.8 0 0 1 0-2.546"
    />
  </Svg>
);
export default IconlystArrowsHorizontalExpandLight;
