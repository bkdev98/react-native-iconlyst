import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBarBulk = ({
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
      d="M17.173 4.8H6.827C3.64 4.8 1.5 7.038 1.5 10.37v3.26c0 3.332 2.14 5.57 5.327 5.57h10.347c3.185 0 5.326-2.238 5.326-5.57v-3.26c0-3.332-2.141-5.57-5.327-5.57"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.24 15.62a.747.747 0 0 1-1.061.002l-.947-.945a3.5 3.5 0 0 1-1.804.513 3.524 3.524 0 0 1-3.52-3.519 3.524 3.524 0 0 1 3.52-3.52 3.525 3.525 0 0 1 3.522 3.52 3.5 3.5 0 0 1-.618 1.985l.906.903a.75.75 0 0 1 .002 1.061m-3.811-5.97c1.114 0 2.02.907 2.02 2.021s-.906 2.02-2.02 2.02a2.023 2.023 0 0 1-2.021-2.02c0-1.114.906-2.02 2.02-2.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchBarBulk;