import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperAddBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.412 19.114H6.189C4.223 19.114 3 17.727 3 15.764v-7.4c0-1.963 1.223-3.35 3.188-3.35h1.298M21 10.361V8.363c0-1.964-1.23-3.351-3.189-3.351H10.59M6.213 8.516h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 9.777a2.287 2.287 0 1 0 2.289 2.288M18.4 16.584h2.353m-2.353 0-2.353-.001m2.353 0 .002 2.354m-.002-2.353V14.23"
    />
  </Svg>
);
export default IconlystMoneyPaperAddBroken;
