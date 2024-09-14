import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCometBulk = ({
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
      d="M21.653 11.555a1.136 1.136 0 0 0-.637-1.947l-2.992-.43a.65.65 0 0 1-.489-.344L16.2 6.164v-.002a1.2 1.2 0 0 0-.497-.5 1.15 1.15 0 0 0-.884-.074 1.15 1.15 0 0 0-.676.575l-1.339 2.669a.65.65 0 0 1-.49.346l-2.98.439c-.26.026-.502.146-.678.334a1.136 1.136 0 0 0 .03 1.604l2.167 2.082c.15.142.22.354.184.556l-.51 2.942a1.13 1.13 0 0 0 .117.718c.207.39.608.615 1.021.615.18 0 .36-.042.53-.131l2.675-1.39a.64.64 0 0 1 .605 0l2.662 1.376c.22.125.47.169.73.129a1.15 1.15 0 0 0 .95-1.32l-.513-2.941a.62.62 0 0 1 .186-.555z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.729 14.818c-1.021-.075-2.117.117-3.266.569a.752.752 0 0 0 .274 1.448.8.8 0 0 0 .274-.052c.939-.369 1.816-.526 2.61-.47a.733.733 0 0 0 .802-.693.75.75 0 0 0-.694-.802M6.674 11.668a.754.754 0 0 0-.868-.612c-.743.129-1.54.383-2.364.756a.75.75 0 1 0 .617 1.367c.71-.321 1.383-.538 2.002-.644a.75.75 0 0 0 .612-.867M5.06 8.726a.75.75 0 0 0 .388-.108c1.636-.99 3.436-1.475 5.209-1.433a.745.745 0 0 0 .772-.727.75.75 0 0 0-.727-.772c-2.058-.057-4.145.509-6.031 1.648a.75.75 0 0 0 .389 1.392"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCometBulk;
