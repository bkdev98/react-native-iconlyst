import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAtomBroken = ({
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
      d="M15.598 15.215c4.64-4.64 6.963-9.843 5.188-11.618-1.775-1.777-6.978.547-11.619 5.188-4.64 4.64-6.963 9.842-5.188 11.619 1.37 1.37 4.78.3 8.399-2.393"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.39 5.998a29.5 29.5 0 0 1 3.208 2.787c4.641 4.64 6.963 9.842 5.188 11.619-1.776 1.775-6.977-.548-11.618-5.189-4.641-4.64-6.964-9.843-5.19-11.618.949-.948 2.873-.729 5.167.389"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.102}
      d="M12.385 11.986v.067m.273-.053a.274.274 0 1 1-.549 0 .274.274 0 0 1 .549 0"
    />
  </Svg>
);
export default IconlystAtomBroken;
