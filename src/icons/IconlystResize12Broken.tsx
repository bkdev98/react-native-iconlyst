import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize12Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.677 19.24 5 19.246l.008-3.677M8.677 5.258 5 5.25l.008 3.677M15.322 19.24l3.678.007-.009-3.677M15.322 5.258 19 5.25l-.008 3.677M5 5.25l14 13.997M5 19.246l7-6.998m3.5-3.499L19 5.25"
    />
  </Svg>
);
export default IconlystResize12Broken;
