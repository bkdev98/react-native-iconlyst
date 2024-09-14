import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperBlockLight = ({
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
      d="M12.412 18.938H6.189C4.223 18.938 3 17.548 3 15.582V8.173c0-1.965 1.223-3.355 3.188-3.355h11.624c1.96 0 3.188 1.39 3.188 3.355v2.002M6.213 8.324h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.71 11.877a2.29 2.29 0 0 1 2.288-2.291 2.29 2.29 0 0 1 2.289 2.291 2.29 2.29 0 0 1-2.289 2.292 2.29 2.29 0 0 1-2.287-2.292M15.375 16.515a2.79 2.79 0 0 1 2.787-2.79 2.79 2.79 0 0 1 2.787 2.79 2.79 2.79 0 0 1-2.787 2.792 2.79 2.79 0 0 1-2.787-2.792"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.246 14.596 3.833 3.837"
    />
  </Svg>
);
export default IconlystMoneyPaperBlockLight;
