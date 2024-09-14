import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperTotalTwoTone = ({
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
      d="M6.688 8.637h11.624c1.965 0 3.188 1.387 3.188 3.35v5.557c0 1.964-1.223 3.351-3.19 3.351H6.689c-1.965 0-3.188-1.387-3.188-3.35v-5.557c0-1.964 1.229-3.351 3.188-3.351"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.455 17.652h1.403M18.544 11.879H17.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.787 14.766a2.287 2.287 0 1 0-4.575 0 2.287 2.287 0 0 0 4.575 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.254 5.893h10.493M9.191 3.23h6.618"
    />
  </Svg>
);
export default IconlystMoneyPaperTotalTwoTone;
