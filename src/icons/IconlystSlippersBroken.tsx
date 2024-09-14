import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippersBroken = ({
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
      d="M5.108 17.557c-.561-2.224-1.564-6.378-1.564-6.378a3.816 3.816 0 0 1 3.203-4.346 3.816 3.816 0 0 1 4.346 3.203s.272 4.264.394 6.554c.091 1.723-1.199 3.099-2.758 3.333a3.3 3.3 0 0 1-1.666-.183"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.319 13.683c-.758-4.607-7.629-3.393-6.87 1.215M19.89 14.808a838 838 0 0 0 1.566-6.377 3.816 3.816 0 0 0-3.203-4.346 3.816 3.816 0 0 0-4.347 3.203s-.272 4.264-.394 6.554c-.092 1.723 1.2 3.099 2.758 3.332.614.095 1.24.006 1.8-.237"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.68 10.935c.759-4.607 7.628-3.394 6.87 1.214"
    />
  </Svg>
);
export default IconlystSlippersBroken;
