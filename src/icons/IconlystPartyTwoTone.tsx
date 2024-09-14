import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyTwoTone = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.197 13.508c-1.173 1.777-1.608 3.355-.966 3.955.892.833 3.524-.537 5.878-3.06 2.355-2.521 3.54-5.24 2.647-6.073-.713-.667-2.542.078-4.45 1.695"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.911 8.527 3.555 11.163a.695.695 0 0 1-.84.883l-11.062-2.91M3.5 6.813h.023m2.8 10.378h.023"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.204 5.899a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.961 13.887s-1.878.037-3.316 1.928"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.046 12.689s-3.283-3.39-8.314-1.957"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.268 3.402s-1.901 2.604.204 5.734"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPartyTwoTone;
