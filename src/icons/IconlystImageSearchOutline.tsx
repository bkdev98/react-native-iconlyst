import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageSearchOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m17.737 12.099 3.95 2.867a.75.75 0 0 1-.882 1.213l-3.95-2.867a3.11 3.11 0 0 0-3.877.18l-7.691 6.9a.75.75 0 0 1-1.002-1.117l7.7-6.908a4.61 4.61 0 0 1 5.752-.268"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.158 14.993c-.518.225-.964.632-1.4 1.033a.75.75 0 0 1-1.015-1.104q.022-.022.048-.044c.403-.371 1.011-.931 1.769-1.26.84-.366 1.853-.446 2.966.153h.001c.944.511 1.773 1.042 2.236 1.353a.75.75 0 0 1-.837 1.245 27 27 0 0 0-2.112-1.278c-.663-.356-1.19-.3-1.656-.098"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.398 3.008a.75.75 0 0 1 .75-.75h3.324c1.653 0 3.054.59 4.038 1.644C21.489 4.952 22 6.4 22 8.028v7.948c0 1.627-.508 3.076-1.486 4.126-.983 1.055-2.385 1.645-4.042 1.645H8.038c-1.657 0-3.06-.59-4.046-1.644-.98-1.05-1.492-2.5-1.492-4.128v-3.072a.75.75 0 0 1 1.5 0v3.073c0 1.316.41 2.377 1.088 3.103.672.72 1.663 1.168 2.95 1.168h8.434c1.287 0 2.275-.449 2.944-1.168.675-.724 1.084-1.786 1.084-3.104V8.029c0-1.316-.41-2.377-1.087-3.103-.671-.719-1.66-1.167-2.941-1.167h-3.324a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.313 3.758a2.313 2.313 0 1 0 0 4.625 2.313 2.313 0 0 0 0-4.625M2.5 6.07a3.813 3.813 0 1 1 7.625 0 3.813 3.813 0 0 1-7.625 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.867 7.783a.75.75 0 0 1 1.06-.001L10.47 9.32a.75.75 0 1 1-1.06 1.062L7.868 8.843a.75.75 0 0 1-.001-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageSearchOutline;
