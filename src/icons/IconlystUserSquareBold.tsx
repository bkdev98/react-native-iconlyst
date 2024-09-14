import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSquareBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.15 17.445c-1.07 0-4.325 0-4.325-1.968 0-1.753 2.47-1.956 4.325-1.956 1.07 0 4.325 0 4.325 1.968 0 1.753-2.468 1.956-4.325 1.956m0-10.892a2.885 2.885 0 0 1 2.883 2.881 2.885 2.885 0 0 1-2.883 2.88 2.885 2.885 0 0 1-2.883-2.88 2.885 2.885 0 0 1 2.883-2.88m8.1-2.504c-1-1-2.3-1.6-3.9-1.6h-8.4c-1.6 0-3 .6-3.9 1.6-1 1-1.4 2.4-1.4 4v7.9c0 1.6.5 3 1.4 4 1 1 2.3 1.6 3.9 1.6h8.4c1.6 0 3-.6 3.9-1.6s1.4-2.4 1.4-4v-7.9c0-1.6-.5-3-1.4-4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSquareBold;
