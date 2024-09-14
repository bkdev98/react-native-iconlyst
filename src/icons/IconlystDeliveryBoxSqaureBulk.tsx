import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxSqaureBulk = ({
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
      d="M22.33 8.009c-.003-1.64-.553-3.087-1.547-4.076-.948-.943-2.288-1.419-3.742-1.433l-8.426.02h-.001c-3.155.011-5.271 2.234-5.263 5.531l.019 7.94c.004 1.59.497 2.956 1.428 3.952.952 1.019 2.28 1.557 3.839 1.557h.023l8.426-.02c3.157-.011 5.272-2.234 5.263-5.531z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.03 13.8c0 .736-.396 1.418-1.032 1.781l-3.12 1.807c-.283.16-.594.238-.909.256-.04.007-.077.025-.121.025-.042 0-.078-.017-.118-.024a2.04 2.04 0 0 1-.905-.255l-3.131-1.812A2.05 2.05 0 0 1 7.666 13.8v-3.61c0-.37.1-.726.28-1.035q.003-.006.005-.01c.01-.018.026-.027.037-.043.176-.28.414-.524.71-.694l3.124-1.798a2.02 2.02 0 0 1 2.063.005l3.117 1.795a2.05 2.05 0 0 1 1.029 1.78zm-4.432 2.017V12.41l2.933-1.7V13.8a.55.55 0 0 1-.28.48zm-4.432-5.103 2.932 1.698v3.404L9.44 14.277a.55.55 0 0 1-.275-.478zm6.593-1.29-2.913 1.688-2.911-1.686 2.644-1.522a.5.5 0 0 1 .267-.075q.143 0 .281.08z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxSqaureBulk;
