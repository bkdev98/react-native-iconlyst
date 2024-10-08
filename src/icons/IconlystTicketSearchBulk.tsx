import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketSearchBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.364 9.33h-3.25a.75.75 0 0 1 0-1.5h3.25a.75.75 0 0 1 0 1.5m7.018.145c.934 0 1.816.231 2.595.631.366-.293.48-.387.534-.446l.07-.073c.195-.209.24-.3.297-.68.012-.088.017-.228.017-.51v-.424c0-.544 0-.817-.04-1.07a3.325 3.325 0 0 0-2.782-2.785c-.256-.04-.53-.04-1.079-.04-.152 0-.227.001-.297.006a2.4 2.4 0 0 0-1.301.494c-.053.04-.102.083-.227.193-.194.173-.287.26-.382.323a1.385 1.385 0 0 1-1.55 0c-.095-.063-.188-.15-.383-.323a4 4 0 0 0-.224-.192 2.37 2.37 0 0 0-1.299-.494 4 4 0 0 0-.3-.007H7.195c-.957 0-1.437 0-1.876.123A3.35 3.35 0 0 0 3 6.522c-.12.437-.12.91-.12 1.908 0 .26.005.392.032.571.041.282.085.375.28.582l.07.075c.072.078.233.208.982.808a1.287 1.287 0 0 1 .024 1.993c-.842.707-.967.814-1.03.888l-.083.091c-.17.185-.215.28-.247.531l-.018.125a4 4 0 0 0-.014.48c0 .943 0 1.418.118 1.853a3.36 3.36 0 0 0 2.334 2.333c.434.12.908.12 1.852.12h3.852c.151 0 .228-.002.294-.007a2.4 2.4 0 0 0 1.304-.494l.019-.016a5.68 5.68 0 0 1-.973-3.18 5.713 5.713 0 0 1 5.708-5.708" />
      <Path d="M10.364 9.33h-3.25a.75.75 0 0 1 0-1.5h3.25a.75.75 0 0 1 0 1.5m7.018.145c.934 0 1.816.231 2.595.631.366-.293.48-.387.534-.446l.07-.073c.195-.209.24-.3.297-.68.012-.088.017-.228.017-.51v-.424c0-.544 0-.817-.04-1.07a3.325 3.325 0 0 0-2.782-2.785c-.256-.04-.53-.04-1.079-.04-.152 0-.227.001-.297.006a2.4 2.4 0 0 0-1.301.494c-.053.04-.102.083-.227.193-.194.173-.287.26-.382.323a1.385 1.385 0 0 1-1.55 0c-.095-.063-.188-.15-.383-.323a4 4 0 0 0-.224-.192 2.37 2.37 0 0 0-1.299-.494 4 4 0 0 0-.3-.007H7.195c-.957 0-1.437 0-1.876.123A3.35 3.35 0 0 0 3 6.522c-.12.437-.12.91-.12 1.908 0 .26.005.392.032.571.041.282.085.375.28.582l.07.075c.072.078.233.208.982.808a1.287 1.287 0 0 1 .024 1.993c-.842.707-.967.814-1.03.888l-.083.091c-.17.185-.215.28-.247.531l-.018.125a4 4 0 0 0-.014.48c0 .943 0 1.418.118 1.853a3.36 3.36 0 0 0 2.334 2.333c.434.12.908.12 1.852.12h3.852c.151 0 .228-.002.294-.007a2.4 2.4 0 0 0 1.304-.494l.019-.016a5.68 5.68 0 0 1-.973-3.18 5.713 5.713 0 0 1 5.708-5.708" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.363 9.328H7.114a.75.75 0 0 1 0-1.5h3.25a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.363 9.328H7.114a.75.75 0 0 1 0-1.5h3.25a.75.75 0 0 1 0 1.5M14.926 15.183a2.46 2.46 0 0 1 2.456-2.456 2.46 2.46 0 0 1 2.455 2.456c0 .65-.255 1.27-.713 1.737h-.002l-.001.003a2.46 2.46 0 0 1-4.195-1.74m6.979 3.46-1.247-1.247c.44-.653.679-1.417.679-2.213a3.96 3.96 0 0 0-3.955-3.956 3.96 3.96 0 0 0-3.956 3.956 3.96 3.96 0 0 0 6.174 3.276l1.245 1.245a.749.749 0 0 0 1.06-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.926 15.183a2.46 2.46 0 0 1 2.456-2.456 2.46 2.46 0 0 1 2.455 2.456c0 .65-.255 1.27-.713 1.737h-.002l-.001.003a2.46 2.46 0 0 1-4.195-1.74m6.979 3.46-1.247-1.247c.44-.653.679-1.417.679-2.213a3.96 3.96 0 0 0-3.955-3.956 3.96 3.96 0 0 0-3.956 3.956 3.96 3.96 0 0 0 6.174 3.276l1.245 1.245a.749.749 0 0 0 1.06-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketSearchBulk;
