import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumOldLight = ({
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
      d="M5.253 15.897V8.078M15.375 6.454v9.872a2 2 0 0 1-.21.894l-.89 1.78a.227.227 0 0 0 .203.329h6.31a.211.211 0 0 0 .17-.338l-1.245-1.66a2 2 0 0 1-.4-1.2V8.22a2 2 0 0 1 .642-1.47l.785-.727c.16-.147.25-.305.25-.522 0-.43-.35-.83-.78-.83h-2.812a2 2 0 0 0-1.916 1.425l-3.828 12.761a.66.66 0 0 1-1.235.081L5.93 8.967a2.3 2.3 0 0 0-.461-.668L3.233 6.062a.796.796 0 0 1 .563-1.358h3.52A2 2 0 0 1 9.143 5.89l3.825 8.586"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.04 18.99a.213.213 0 0 0 .173.337h4.074a.213.213 0 0 0 .174-.337l-2.21-3.092z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMediumOldLight;
