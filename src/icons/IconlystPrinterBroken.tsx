import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinterBroken = ({
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
      d="M3 10.295a3.33 3.33 0 0 1 3.33-3.32h11.35a3.324 3.324 0 0 1 3.32 3.32v4.015a3.32 3.32 0 0 1-3.32 3.32h-1.053M7.41 17.63H6.33A3.327 3.327 0 0 1 3 14.31v-1.468"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.412 14.809v3.77a2.08 2.08 0 0 0 2.08 2.08h5.015a2.08 2.08 0 0 0 2.08-2.08v-3.77M11.158 17.574h1.685M15.375 10.55h.01M17.607 10.55h.01M7.412 6.988V5.42a2.08 2.08 0 0 1 2.08-2.08h1.825M14.507 3.34a2.08 2.08 0 0 1 2.08 2.08v1.568M17.463 14.809H6.535"
    />
  </Svg>
);
export default IconlystPrinterBroken;
