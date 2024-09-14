import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenSquareOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 3.96c.985-1.056 2.388-1.647 4.043-1.647h8.435c1.66 0 3.062.59 4.045 1.647C21.492 5.011 22 6.461 22 8.09v7.947c0 1.627-.508 3.078-1.487 4.129-.984 1.057-2.386 1.648-4.046 1.648H8.033c-1.66 0-3.062-.591-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.129V8.09c0-1.629.511-3.079 1.49-4.13m1.098 1.023C4.41 5.709 4 6.773 4 8.089v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.79 1.085-3.107V8.09c0-1.318-.409-2.38-1.084-3.107-.67-.72-1.66-1.17-2.948-1.17H8.033c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.999 12.17a.75.75 0 0 1 .75-.75h5.006a.75.75 0 0 1 0 1.5H9.749a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 11.418a.75.75 0 0 1 .75.75v4.29a.75.75 0 0 1-1.5 0v-4.29a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.923 8.008a.75.75 0 0 1 1.054.118l2.272 2.845 2.275-2.846a.75.75 0 1 1 1.172.937l-2.86 3.579a.75.75 0 0 1-1.173 0L8.805 9.06a.75.75 0 0 1 .118-1.053"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYenSquareOutline;
