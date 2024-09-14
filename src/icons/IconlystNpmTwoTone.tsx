import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNpmTwoTone = ({
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
      d="M8.373 20.5h2.872a1 1 0 0 0 1-1V8.722a1 1 0 0 1 1-1h2.593a1 1 0 0 1 1 1V19.5a1 1 0 0 0 1 1H19.5a1 1 0 0 0 1-1v-14a2 2 0 0 0-2-2H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.372 20.5H5.5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2H12"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNpmTwoTone;
