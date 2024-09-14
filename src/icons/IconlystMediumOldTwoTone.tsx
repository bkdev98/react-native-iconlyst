import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumOldTwoTone = ({
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
      d="M5.253 15.897V8.078M15.375 16.326v-9.5c0-.246.036-.492.107-.729a2 2 0 0 1 1.916-1.425h2.811c.431 0 .78.4.78.83 0 .217-.09.375-.25.522l-.784.727a2 2 0 0 0-.643 1.47v7.91a2 2 0 0 0 .4 1.2l1.245 1.66a.211.211 0 0 1-.169.338h-6.31a.227.227 0 0 1-.204-.33l.89-1.78a2 2 0 0 0 .211-.893"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.04 18.99a.213.213 0 0 0 .173.337h4.074a.213.213 0 0 0 .174-.337l-2.21-3.092z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.968 14.475 9.143 5.89a2 2 0 0 0-1.827-1.186h-3.52a.796.796 0 0 0-.563 1.358L5.47 8.298c.193.193.349.42.46.668l4.489 9.972a.66.66 0 0 0 1.235-.08l3.828-12.762"
    />
  </Svg>
);
export default IconlystMediumOldTwoTone;
