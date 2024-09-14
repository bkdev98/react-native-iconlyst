import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeat1LeftOutline = ({
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
      d="M2.708 7.897a.75.75 0 0 1 .983.4l1.15 2.72 2.703-1.142a.75.75 0 1 1 .584 1.381l-3.393 1.435a.75.75 0 0 1-.983-.399L2.309 8.88a.75.75 0 0 1 .4-.983"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.974 4.724c-3.96 0-7.177 3.153-7.277 7.075a.75.75 0 0 1-1.5-.038c.12-4.735 4.004-8.537 8.777-8.537 4.843 0 8.776 3.932 8.776 8.776a8.775 8.775 0 0 1-8.776 8.776 8.79 8.79 0 0 1-7.233-3.79.75.75 0 0 1 1.232-.856 7.29 7.29 0 0 0 6 3.146A7.275 7.275 0 0 0 20.25 12a7.28 7.28 0 0 0-7.276-7.276"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.797 8.154a.75.75 0 0 1 .382.653v6.388a.75.75 0 0 1-1.5 0v-5.056l-.75.455a.75.75 0 0 1-.778-1.283l1.89-1.145a.75.75 0 0 1 .756-.012"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeat1LeftOutline;
