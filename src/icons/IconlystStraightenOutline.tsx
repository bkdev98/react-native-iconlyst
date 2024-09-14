import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStraightenOutline = ({
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
      d="M13.524 1.836a4.11 4.11 0 0 1 5.034 2.907l1.05 3.918a.75.75 0 1 1-1.45.388L17.11 5.131a2.61 2.61 0 0 0-3.197-1.846L5.78 5.464A2.61 2.61 0 0 0 3.935 8.66a.75.75 0 1 1-1.45.388 4.11 4.11 0 0 1 2.907-5.034zM20.374 14.42a.75.75 0 0 1 .918.53 4.11 4.11 0 0 1-2.906 5.035l-8.132 2.178a4.11 4.11 0 0 1-5.034-2.906L4.17 15.34a.75.75 0 1 1 1.45-.388l1.049 3.918a2.61 2.61 0 0 0 3.197 1.846l8.132-2.18a2.61 2.61 0 0 0 1.845-3.196.75.75 0 0 1 .53-.919M12.853 12a.75.75 0 0 1 .75-.75H15.7a.75.75 0 0 1 0 1.5h-2.097a.75.75 0 0 1-.75-.75M18.153 12a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-2.097a.75.75 0 0 1-.75-.75M7.55 12a.75.75 0 0 1 .75-.75h2.098a.75.75 0 0 1 0 1.5H8.3a.75.75 0 0 1-.75-.75M2.25 12a.75.75 0 0 1 .75-.75h2.097a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStraightenOutline;
