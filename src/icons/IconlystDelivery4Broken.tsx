import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery4Broken = ({
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
      d="m12.85 20.978 5.554.007c2.374.006 3.426-1.665 3.432-4.037l.014-7.71a6.3 6.3 0 0 0-.459-2.371l-.848-2.107a2.79 2.79 0 0 0-2.585-1.745H7.748c-1.14 0-2.166.693-2.588 1.752l-.846 2.116a6.3 6.3 0 0 0-.452 2.334l-.012 7.696c-.006 2.373 1.07 4.051 3.446 4.057H8.61M7.955 16.478h2.996M3.988 8.007h14.757M12.85 8.007V3.015"
    />
  </Svg>
);
export default IconlystDelivery4Broken;
