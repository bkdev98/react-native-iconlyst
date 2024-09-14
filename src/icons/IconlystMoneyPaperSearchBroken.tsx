import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSearchBroken = ({
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
      d="M6.215 8.516h1.403M19.78 17.895l1.22 1.22m-1.22-1.22a2.27 2.27 0 1 1 .662-1.607c0 .627-.252 1.19-.662 1.607M12.412 19.112H6.189C4.223 19.112 3 17.725 3 15.762v-7.4c0-1.963 1.223-3.35 3.188-3.35h1.298M21 10.361V8.363c0-1.964-1.23-3.351-3.189-3.351H10.59"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 9.777a2.287 2.287 0 1 0 2.289 2.288"
    />
  </Svg>
);
export default IconlystMoneyPaperSearchBroken;
