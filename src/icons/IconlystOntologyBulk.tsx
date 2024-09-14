import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOntologyBulk = ({
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
      d="M13.33 2.51c-2.136-.091-4.29.684-5.92 2.126a.502.502 0 0 0-.023.726l13.482 13.65a.5.5 0 0 0 .856-.352l.001-7.22c0-4.84-3.772-8.846-8.396-8.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.13 4.989a.498.498 0 0 0-.855.352l-.001 7.219c0 4.841 3.77 8.846 8.394 8.93q.171.007.342.007a8.5 8.5 0 0 0 5.579-2.133.5.5 0 0 0 .023-.725z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOntologyBulk;
