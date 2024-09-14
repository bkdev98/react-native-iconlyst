import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallTennis1Bold = ({
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
      d="M8.013 12c0-2.39-.966-4.678-2.655-6.355a.286.286 0 0 0-.414.012 9.453 9.453 0 0 0 0 12.687c.11.122.299.128.415.012A8.97 8.97 0 0 0 8.013 12M19.056 5.657a.286.286 0 0 0-.415-.012A8.97 8.97 0 0 0 15.986 12c0 2.391.966 4.68 2.655 6.356.117.116.305.11.415-.012a9.454 9.454 0 0 0 0-12.687"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.487 12c0-2.74 1.089-5.362 2.996-7.31a.3.3 0 0 0-.034-.455 9.43 9.43 0 0 0-10.899 0 .3.3 0 0 0-.033.455A10.47 10.47 0 0 1 9.513 12c0 2.74-1.09 5.363-2.996 7.31a.3.3 0 0 0 .033.456 9.43 9.43 0 0 0 10.899 0 .3.3 0 0 0 .034-.455A10.47 10.47 0 0 1 14.487 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallTennis1Bold;
