import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxSqaureBold = ({
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
      d="M13.598 12.41v3.408l2.653-1.537a.55.55 0 0 0 .28-.482v-3.088zM12.098 12.413l-2.932-1.698V13.8a.55.55 0 0 0 .275.478l2.657 1.539zM12.846 11.113l2.913-1.688-2.632-1.515a.55.55 0 0 0-.28-.08.5.5 0 0 0-.268.075L9.935 9.427z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.03 13.8c0 .737-.395 1.419-1.031 1.782l-3.121 1.807c-.282.16-.594.238-.908.256-.041.007-.078.025-.122.025-.041 0-.077-.017-.117-.024a2.04 2.04 0 0 1-.906-.255l-3.131-1.812A2.05 2.05 0 0 1 7.667 13.8v-3.61c0-.37.1-.726.28-1.035l.004-.011c.01-.017.026-.026.037-.042.176-.281.414-.524.71-.694l3.124-1.798a2.02 2.02 0 0 1 2.063.005l3.117 1.795a2.05 2.05 0 0 1 1.029 1.78zm4.3-5.791c-.003-1.64-.553-3.087-1.547-4.076-.948-.943-2.288-1.419-3.742-1.433l-8.426.02h-.001c-3.155.011-5.271 2.234-5.263 5.531l.019 7.94c.004 1.59.497 2.956 1.428 3.952.952 1.019 2.28 1.557 3.839 1.557h.023l8.426-.02c3.157-.011 5.272-2.234 5.263-5.531z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxSqaureBold;
