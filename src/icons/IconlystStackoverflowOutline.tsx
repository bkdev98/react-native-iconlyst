import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStackoverflowOutline = ({
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
      d="M6.783 17.3a.75.75 0 0 1 .75-.75h8.186a.75.75 0 0 1 0 1.5H7.533a.75.75 0 0 1-.75-.75M6.964 13.134a.75.75 0 0 1 .898-.565l7.982 1.82a.75.75 0 0 1-.334 1.462L7.53 14.032a.75.75 0 0 1-.565-.898M8.38 9.218a.75.75 0 0 1 .988-.385l7.496 3.29a.75.75 0 0 1-.603 1.373l-7.496-3.29a.75.75 0 0 1-.385-.988M10.836 5.486a.75.75 0 0 1 1.056-.106l6.338 5.182a.75.75 0 1 1-.95 1.16l-6.338-5.18a.75.75 0 0 1-.106-1.056M13.978 2.403a.75.75 0 0 1 1.05.143l4.955 6.517a.75.75 0 1 1-1.194.907l-4.954-6.516a.75.75 0 0 1 .143-1.051"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.613 14.625a.75.75 0 0 1 .75.75v2.732c0 .916.275 1.383.643 1.657.414.308 1.096.486 2.122.486h7.188c1.027 0 1.709-.178 2.123-.486.368-.274.643-.741.643-1.657v-2.732a.75.75 0 1 1 1.5 0v2.732c0 1.25-.399 2.229-1.247 2.86-.802.597-1.878.783-3.019.783H8.128c-1.14 0-2.216-.186-3.018-.783-.848-.631-1.247-1.61-1.247-2.86v-2.732a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStackoverflowOutline;
