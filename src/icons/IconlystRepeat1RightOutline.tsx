import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeat1RightOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.292 7.897a.75.75 0 0 1 .399.983l-1.443 3.412a.75.75 0 0 1-.983.399l-3.393-1.435a.75.75 0 0 1 .584-1.381l2.703 1.142 1.15-2.72a.75.75 0 0 1 .983-.4"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12c0-4.844 3.933-8.776 8.776-8.776 4.773 0 8.656 3.802 8.777 8.537a.75.75 0 1 1-1.5.038c-.1-3.922-3.318-7.075-7.277-7.075A7.28 7.28 0 0 0 3.75 12a7.275 7.275 0 0 0 7.276 7.276 7.29 7.29 0 0 0 6.001-3.146.75.75 0 0 1 1.232.856 8.79 8.79 0 0 1-7.233 3.79A8.775 8.775 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.394 8.154a.75.75 0 0 1 .382.653v6.388a.75.75 0 0 1-1.5 0v-5.056l-.75.455a.75.75 0 1 1-.778-1.283l1.89-1.145a.75.75 0 0 1 .756-.012"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeat1RightOutline;
