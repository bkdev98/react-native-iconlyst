import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpGraphBoxLight = ({
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
      d="M16.718 3.119H8.283c-2.94 0-4.783 2.08-4.783 5.026v7.947c0 2.946 1.835 5.027 4.783 5.027h8.434c2.949 0 4.783-2.081 4.783-5.027V8.145c0-2.945-1.834-5.026-4.782-5.026"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.342 16.998v-.987M12.5 16.998v-2.671M16.658 16.997v-4.354M16.66 7.239l-.376.439a15.37 15.37 0 0 1-7.942 4.908"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.467 7.239h2.192v2.19"
    />
  </Svg>
);
export default IconlystTrendUpGraphBoxLight;
