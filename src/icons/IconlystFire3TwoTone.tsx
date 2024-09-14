import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFire3TwoTone = ({
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
      d="M13.957 20.811C6.661 22.41 1.793 13.501 7.275 8.278c.293-.289 1.1-1.037 1.436-1.277 0 .5.442 4.373 1.132 4.08"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.957 20.81c5.572-.918 7.523-7.24 5.098-11.96C17.78 6.2 15.615 4.336 13.056 3c.393 3-.37 8.081-3.212 8.081"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFire3TwoTone;
