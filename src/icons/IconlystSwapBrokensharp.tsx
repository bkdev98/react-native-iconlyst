import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapBrokensharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M16.9 20.15V6.21M12.31 15.555c2.36 0 4.59 2.08 4.59 4.596M21.5 15.555a4.43 4.43 0 0 0-2.215.617M7.6 3.85v13.939M3 8.446c.747 0 1.483-.21 2.139-.574M12.19 8.445c-2.36 0-4.59-2.08-4.59-4.596"
    />
  </Svg>
);
export default IconlystSwapBrokensharp;
