import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSquareLineTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.718 21.313H8.283c-2.948 0-4.783-2.082-4.783-5.027V8.34c0-2.945 1.835-5.026 4.783-5.026h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.945-1.844 5.026-4.782 5.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.774 17.012h5.451M15.54 11.184l-3.041 3.05-3.038-3.05M12.5 14.236V7.613"
    />
  </Svg>
);
export default IconlystDownSquareLineTwoTone;
