import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBrokensharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M21.5 7.934c-1.961 4.128-5.444 6.605-9.252 6.605h.004c-3.808 0-7.291-2.477-9.252-6.605M20.428 13.375l.523.539M5.581 11.802l-2.11 2.111M15.427 17.12l-.845-2.91M8.993 17.12l.145-.69"
    />
  </Svg>
);
export default IconlystHideBrokensharp;
