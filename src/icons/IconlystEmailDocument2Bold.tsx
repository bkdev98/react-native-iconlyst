import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailDocument2Bold = ({
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
      d="M13.9 9.625c0 .41-.33.75-.75.75h-2.3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.3c.42 0 .75.34.75.75m-4.25-2.35c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.7a.749.749 0 1 1 0 1.5zm1.76 6.42c.36.24.83.24 1.18.01l3.74-2.38.389-.251a.2.2 0 0 0 .091-.168V4.125c0-.88-.78-1.65-1.66-1.65h-6.3c-.87 0-1.65.77-1.65 1.65v6.78a.2.2 0 0 0 .093.168l.397.252z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.581 5.073a.19.19 0 0 0-.271.177v4.596c0 .13.126.226.256.236a.745.745 0 0 1 .344 1.372l-5.5 3.5c-.42.28-.91.42-1.4.42-.5 0-1-.14-1.42-.43l-5.49-3.49a.745.745 0 0 1 .344-1.372c.13-.01.256-.105.256-.236V5.25a.19.19 0 0 0-.271-.177C3.643 5.92 2.5 7.795 2.5 10.024v6.1c0 3.08 2.15 5.4 5 5.4h9c2.86 0 5-2.32 5-5.4v-6.1c0-2.229-1.134-4.104-2.919-4.951"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailDocument2Bold;
