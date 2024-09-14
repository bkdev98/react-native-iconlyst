import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKitchenHat2Outline = ({
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
      d="m15.742 13.857-.077 1.056a2.166 2.166 0 0 1-2.156 2.01h-3.017a2.165 2.165 0 0 1-2.155-2.01l-.076-1.055a3.2 3.2 0 0 1-1.786-2.665c-.102-1.47.9-2.67 2.114-3.19a2.7 2.7 0 0 1 1-.24 3.04 3.04 0 0 1 4.815 0c.227.009.473.048.772.14 1.151.359 2.158 1.335 2.33 2.64a3.21 3.21 0 0 1-1.764 3.314m-6.554-1.244a.76.76 0 0 1 .534.67l.112 1.53c.024.34.312.61.658.61h3.017c.346 0 .634-.27.66-.61l.107-1.49a.755.755 0 0 1 .537-.71c.774-.23 1.32-.99 1.205-1.87-.08-.62-.59-1.19-1.289-1.41a1.26 1.26 0 0 0-.613-.06.75.75 0 0 1-.754-.38 1.548 1.548 0 0 0-2.729.01c-.15.26-.45.41-.756.37a1.2 1.2 0 0 0-.698.11c-.783.33-1.255 1.02-1.208 1.71.05.73.548 1.33 1.217 1.52"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 3.653c.986-1.06 2.388-1.65 4.043-1.65h8.435c1.659 0 3.062.59 4.045 1.65.979 1.05 1.487 2.5 1.487 4.13v7.94c0 1.63-.508 3.08-1.487 4.13-.984 1.06-2.387 1.65-4.046 1.65H7.783c-1.659 0-3.062-.59-4.046-1.65-.978-1.05-1.487-2.5-1.487-4.13v-7.94c0-1.63.512-3.08 1.49-4.13m1.098 1.02c-.678.73-1.088 1.79-1.088 3.11v7.94c0 1.32.409 2.38 1.085 3.11.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.675-.73 1.084-1.79 1.084-3.11v-7.94c0-1.32-.409-2.38-1.084-3.11-.67-.72-1.66-1.17-2.948-1.17H7.783c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKitchenHat2Outline;
