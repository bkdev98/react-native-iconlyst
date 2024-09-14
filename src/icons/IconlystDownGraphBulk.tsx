import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownGraphBulk = ({
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
      d="M14.341 13.524a1 1 0 0 0-1.414-.001l-2.907 2.903-6.314-6.312a.999.999 0 1 0-1.414 1.414l7.02 7.019a1 1 0 0 0 1.414 0l2.908-2.903 5.317 5.314a1 1 0 0 0 1.414-1.414z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.717 8.263a1 1 0 0 0-1.415-.02l-1.446 1.409V3.75a1 1 0 0 0-2 0v5.9l-1.444-1.407a1.001 1.001 0 0 0-1.396 1.434l3.132 3.049.003.002.008.009c.03.029.07.04.101.065.07.053.137.108.22.142a1 1 0 0 0 .358.072q.009.002.018.004a1 1 0 0 0 .38-.077c.063-.025.111-.07.166-.107.051-.034.108-.055.153-.099l3.143-3.06a1 1 0 0 0 .02-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownGraphBulk;
