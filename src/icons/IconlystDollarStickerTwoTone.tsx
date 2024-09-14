import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarStickerTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.351 20.319a2.42 2.42 0 0 1-1.745.744H8.282c-2.94 0-4.782-2.081-4.782-5.026V8.09c0-2.945 1.834-5.027 4.782-5.027h8.434c2.95 0 4.784 2.082 4.784 5.027v5.893c0 .624-.241 1.224-.674 1.675z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.176 20.99v-3.413a3.02 3.02 0 0 1 3.014-3.022h3.233"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.984 8.488H9.53a1.322 1.322 0 0 0 0 2.643h1.51a1.32 1.32 0 1 1 0 2.642H8.587M10.285 7.371v1.12m0 5.281v1.11z"
    />
  </Svg>
);
export default IconlystDollarStickerTwoTone;
