import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectedCableOutline = ({
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
      d="M15.757 8.372a3.005 3.005 0 0 0-4.25 0L9.882 9.997a.75.75 0 0 1-1.06-1.06l1.624-1.625a4.505 4.505 0 0 1 6.371 6.371l-1.624 1.625a.75.75 0 0 1-1.06-1.06l1.624-1.625a3.005 3.005 0 0 0 0-4.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.521 2.606a.75.75 0 0 1 0 1.061l-4.7 4.7a.75.75 0 1 1-1.06-1.06l4.7-4.7a.75.75 0 0 1 1.06 0M9.868 8.966a.75.75 0 0 1 0 1.06l-1.624 1.625a3.005 3.005 0 0 0 4.25 4.25l.482.482-.482-.482 1.624-1.624a.75.75 0 1 1 1.061 1.06l-1.625 1.625a4.505 4.505 0 1 1-6.371-6.371l1.625-1.625a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.184 8.321a.75.75 0 0 1 1.06 0l6.572 6.572a.75.75 0 1 1-1.06 1.06L8.183 9.383a.75.75 0 0 1 0-1.06M8.24 15.907a.75.75 0 0 1 0 1.06l-4.7 4.7a.75.75 0 1 1-1.06-1.06l4.7-4.7a.75.75 0 0 1 1.06 0M18.279 14.244a.75.75 0 0 1 .918-.53l1.474.394a.75.75 0 0 1-.389 1.45l-1.473-.396a.75.75 0 0 1-.53-.918M2.786 9.107a.75.75 0 0 1 .919-.53l1.473.394a.75.75 0 0 1-.388 1.45l-1.473-.396a.75.75 0 0 1-.53-.918M13.898 18.441a.75.75 0 0 1 .967.436l.54 1.427a.75.75 0 1 1-1.403.53l-.54-1.426a.75.75 0 0 1 .436-.967M9.02 2.865a.75.75 0 0 1 .967.436l.54 1.427a.75.75 0 1 1-1.403.53l-.54-1.426a.75.75 0 0 1 .436-.967"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystConnectedCableOutline;
