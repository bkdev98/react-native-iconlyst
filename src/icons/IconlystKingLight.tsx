import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingLight = ({
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
      d="m20.039 5.41-3.904 3.164c-.186-.207-2.668-2.999-3.695-4.154a.59.59 0 0 0-.88 0L7.866 8.574 3.96 5.41a.59.59 0 0 0-.951.56c.247 1.405.777 5.017 1.125 7.423A2.69 2.69 0 0 0 6.803 15.7h10.394c1.34 0 2.476-.981 2.668-2.307.348-2.406.878-6.018 1.126-7.424a.59.59 0 0 0-.952-.56"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.334 19.781h13.33"
    />
  </Svg>
);
export default IconlystKingLight;
