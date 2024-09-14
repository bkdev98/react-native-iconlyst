import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst360Broken = ({
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
      d="M12 19.043h5.339c2.257 0 3.661-1.593 3.661-3.847V8.803c0-2.253-1.404-3.846-3.66-3.846H6.66C4.41 4.957 3 6.55 3 8.803v6.393c0 2.254 1.404 3.847 3.66 3.847h1.947"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.976 14.356a1.543 1.543 0 1 0 1.092-2.633l1.547-1.916H5.923M10.755 12.362l2.035-2.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.511 13.217a1.51 1.51 0 1 0-3.02 0 1.51 1.51 0 0 0 3.02 0M16.731 14.73a1.347 1.347 0 0 1-1.347-1.347v-2.23a1.346 1.346 0 0 1 2.694 0v2.23c0 .744-.604 1.347-1.347 1.347"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.288 7.955v.039"
    />
  </Svg>
);
export default Iconlyst360Broken;
