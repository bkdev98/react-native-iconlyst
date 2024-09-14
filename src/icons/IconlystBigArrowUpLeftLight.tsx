import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpLeftLight = ({
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
      d="M18.757 16.212a1.377 1.377 0 0 0 0-1.948l-5.393-5.393a.53.53 0 0 1 0-.749l1.756-1.757c.873-.872.246-2.367-.987-2.364-2.92.008-5.841-.005-8.762 0a1.373 1.373 0 0 0-1.37 1.374c-.002 2.922.005 5.845 0 8.768-.003 1.231 1.488 1.854 2.359.983l1.76-1.76a.53.53 0 0 1 .75 0l5.393 5.393c.537.538 1.41.538 1.947 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpLeftLight;
