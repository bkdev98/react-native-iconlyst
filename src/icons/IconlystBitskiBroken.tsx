import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitskiBroken = ({
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
      d="m9.357 13.189 5.205-5.205a3.72 3.72 0 0 1 2.618-1.13c.98-.01 1.947.385 2.64 1.077a3.72 3.72 0 0 1 1.08 2.64c-.01.978-.423 1.938-1.129 2.618M14.563 18.397l2.604-2.604M13.25 9.284A3.679 3.679 0 0 0 8.056 4.08L4.152 7.983M14.562 18.396l-7.807-7.81M4.152 13.188l7.808 7.81"
    />
  </Svg>
);
export default IconlystBitskiBroken;
