import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarKeyProtectionTwoTone = ({
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
      d="m18.392 16.524-.01.01M13.34 19.599l2.163-2.162a2.6 2.6 0 0 1-.067-.558 2.618 2.618 0 1 1 1.813 2.492l-.54.538-1.38 1.358c-.126.125-.265.319-.44.319h-1.324a.32.32 0 0 1-.318-.319v-1.443c0-.085.034-.166.093-.225M15.334 11.84h1.613M7.363 11.84h1.613M4.084 8.081c5.351.76 10.782.76 16.133 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.234 11.596c0-.727-.233-1.436-.663-2.023L18.525 8.17a1.6 1.6 0 0 1-.2-.383l-.943-2.616a2.01 2.01 0 0 0-1.552-1.3 23.5 23.5 0 0 0-7.333 0c-.7.117-1.31.63-1.544 1.3l-.942 2.616a1.5 1.5 0 0 1-.2.366L4.747 9.616c-.42.581-.647 1.28-.645 1.997l-.015 4.673c-.002.497.4.9.898.9h1.778a.9.9 0 0 0 .898-.897v-.368c0-.496.401-.898.897-.898h4.42"
    />
  </Svg>
);
export default IconlystCarKeyProtectionTwoTone;
