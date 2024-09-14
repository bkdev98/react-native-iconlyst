import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortUpBold = ({
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
      d="M7.013 19.16a1 1 0 0 1-1-1V8.264L4.71 9.574a.999.999 0 1 1-1.418-1.41l3.013-3.03a1.001 1.001 0 0 1 1.71.706v12.32a1 1 0 0 1-1 1M13.475 7.96h-2.37a1 1 0 1 1 0-2h2.37a1 1 0 1 1 0 2m2.659 5.11h-5.029a1 1 0 1 1 0-2h5.029a1 1 0 0 1 0 2M20 18.18h-8.895a1 1 0 0 1 0-2H20a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortUpBold;
