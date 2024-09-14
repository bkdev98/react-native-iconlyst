import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownLeftLight = ({
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
      d="M18.597 6.788c.537.538.537 1.41 0 1.948l-5.394 5.393a.53.53 0 0 0 0 .75l1.757 1.756c.872.872.246 2.367-.988 2.364-2.92-.008-5.84.005-8.761 0a1.374 1.374 0 0 1-1.371-1.373c-.002-2.923.006-5.846 0-8.769-.003-1.231 1.488-1.854 2.36-.983l1.76 1.76a.53.53 0 0 0 .749 0l5.393-5.393a1.377 1.377 0 0 1 1.948 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownLeftLight;
