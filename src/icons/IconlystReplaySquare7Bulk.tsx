import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare7Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 17.89h-1.9a3.08 3.08 0 0 1-2.195-.908 3.08 3.08 0 0 1-.909-2.192V8.015l1.291 1.292a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-2.997-3a1 1 0 0 0-1.419.005L2.293 7.893a.999.999 0 1 0 1.414 1.414l1.29-1.291v6.774c0 1.362.53 2.643 1.494 3.607a5.07 5.07 0 0 0 3.61 1.493h1.898a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.708 15.193a1 1 0 0 0-1.414-.001l-1.3 1.296V9.71A5.15 5.15 0 0 0 17.5 6.092 5.08 5.08 0 0 0 13.89 4.6H12a1 1 0 1 0 0 2h1.89c.83 0 1.61.322 2.195.907.578.577.91 1.38.91 2.203v6.775l-1.292-1.292a.999.999 0 1 0-1.413 1.413l2.997 3a.994.994 0 0 0 1.413.002l3.006-3a1 1 0 0 0 .002-1.415"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystReplaySquare7Bulk;
