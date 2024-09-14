import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperBlockTwoTone = ({
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
      d="M12.912 18.938H6.689c-1.966 0-3.189-1.39-3.189-3.356V8.173c0-1.965 1.223-3.355 3.188-3.355h11.624c1.96 0 3.188 1.39 3.188 3.355v2.002"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.713 8.324h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.21 11.877a2.29 2.29 0 0 1 2.288-2.291 2.29 2.29 0 0 1 2.289 2.291 2.29 2.29 0 0 1-2.289 2.292 2.29 2.29 0 0 1-2.287-2.292M15.875 16.515a2.79 2.79 0 0 1 2.787-2.79 2.79 2.79 0 0 1 2.787 2.79 2.79 2.79 0 0 1-2.787 2.792 2.79 2.79 0 0 1-2.787-2.792"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.746 14.596 3.833 3.837"
    />
  </Svg>
);
export default IconlystMoneyPaperBlockTwoTone;
