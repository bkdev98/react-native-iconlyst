import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForefingerBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.818 11.606c1.005 2.712.016 6.302-1.745 8.063-2.018 2.018-6.303 2.354-8.973 1.078-1.706-.814-3.494-2.09-4.563-2.904a1.96 1.96 0 0 1-.708-1.998 2.058 2.058 0 0 1 3.039-1.336l1.294.747a.677.677 0 0 0 1.014-.585V4.265a1.764 1.764 0 0 1 3.529-.028l.07 4.566c2.47.235 6.045.107 7.043 2.803"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForefingerBold;
