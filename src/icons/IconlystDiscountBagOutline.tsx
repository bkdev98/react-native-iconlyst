import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBagOutline = ({
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
      fillRule="evenodd"
      d="M10.226 4.115A2.206 2.206 0 0 0 8.02 6.32v2.627a.75.75 0 1 1-1.5 0V6.321a3.706 3.706 0 0 1 7.412 0v2.627a.75.75 0 0 1-1.5 0V6.321a2.206 2.206 0 0 0-2.206-2.206"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.666 3.566a.75.75 0 0 1-.278 1.024 2.43 2.43 0 0 0-1.228 2.115v.308a.75.75 0 0 1-1.5 0v-.308c0-1.464.8-2.74 1.983-3.417a.75.75 0 0 1 1.023.278M13.964 3.453a.75.75 0 0 1 .96-.452 3.94 3.94 0 0 1 2.605 3.704v.323a.75.75 0 0 1-1.5 0v-.323a2.44 2.44 0 0 0-1.612-2.293.75.75 0 0 1-.453-.959"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.68 8.37a2.25 2.25 0 0 1 2.243-2.082h11.78a2.25 2.25 0 0 1 2.238 2.01l1.261 11.828a2.25 2.25 0 0 1-2.237 2.489H5.035a2.25 2.25 0 0 1-2.243-2.419zm2.243-.582a.75.75 0 0 0-.747.693l-.889 11.827a.75.75 0 0 0 .748.807h13.93a.75.75 0 0 0 .746-.83L18.449 8.458a.75.75 0 0 0-.746-.67z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.604 7.038a.75.75 0 0 1 .75-.75h2.128a2.25 2.25 0 0 1 2.244 2.081l.888 11.827a2.25 2.25 0 0 1-2.244 2.419h-3.016a.75.75 0 0 1 0-1.5h3.016a.75.75 0 0 0 .748-.806L15.23 8.48a.75.75 0 0 0-.748-.693h-2.128a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.72 12.52a.75.75 0 0 1 0 1.061l-3.923 3.922a.75.75 0 1 1-1.06-1.06l3.922-3.923a.75.75 0 0 1 1.06 0M11.653 16.429a.75.75 0 0 1 1.06 0l.007.006a.75.75 0 0 1-1.06 1.06l-.007-.006a.75.75 0 0 1 0-1.06M7.51 13.05a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 0 1.5H8.26a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountBagOutline;
