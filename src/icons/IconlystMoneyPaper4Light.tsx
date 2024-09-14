import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper4Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.188 4.95h11.624C19.777 4.95 21 6.336 21 8.3V15.7c0 1.963-1.223 3.35-3.19 3.35H6.189C4.223 19.05 3 17.662 3 15.7V8.3c0-1.963 1.229-3.35 3.188-3.35"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.289 12a2.287 2.287 0 1 0-4.575 0 2.287 2.287 0 0 0 4.575 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.68 12.006v-.01M17.322 12.006v-.01"
    />
  </Svg>
);
export default IconlystMoneyPaper4Light;
