import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella1Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M14.778 14.108a.2.2 0 0 0 .2-.203c-.083-4.649-1.85-7.477-2.83-8.685a.19.19 0 0 0-.297 0c-.978 1.208-2.748 4.034-2.83 8.685a.2.2 0 0 0 .2.203zM11.013 3.884c.127-.139.02-.369-.167-.345-4.164.523-7.575 3.842-8.32 8.288a1.967 1.967 0 0 0 1.942 2.281h2.85c.11 0 .2-.091.201-.201.089-5.662 2.441-8.869 3.494-10.023M21.473 11.826c-.745-4.444-4.155-7.762-8.32-8.287-.186-.023-.294.207-.167.346 1.053 1.154 3.405 4.36 3.494 10.022.002.11.091.201.201.201h2.851a1.968 1.968 0 0 0 1.941-2.282"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 14.104v4.88a2.734 2.734 0 0 0 2.73 2.73 2.733 2.733 0 0 0 2.731-2.73.75.75 0 0 0-1.5 0 1.231 1.231 0 0 1-2.462 0v-4.88z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrella1Bulk;
