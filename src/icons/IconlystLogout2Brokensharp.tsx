import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogout2Brokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M2.525 14.091V2.961H13.05v4.624M13.05 16.836v4.625H2.524V18.16M21.975 12.212H8.035M17.379 7.615c0 2.363 2.08 4.596 4.595 4.596M17.379 16.807c0-2.362 2.08-4.595 4.595-4.595"
    />
  </Svg>
);
export default IconlystLogout2Brokensharp;
