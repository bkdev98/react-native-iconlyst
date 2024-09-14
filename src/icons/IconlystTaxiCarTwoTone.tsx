import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTaxiCarTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 11.86c5.97.836 12.03.836 18 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.246 21.163v-5.646c0-.81-.26-1.6-.738-2.254l-1.166-1.565a1.8 1.8 0 0 1-.223-.427l-1.05-2.628a2.24 2.24 0 0 0-1.729-1.448 26.2 26.2 0 0 0-8.17 0 2.24 2.24 0 0 0-1.72 1.448L5.4 11.27q-.082.22-.223.409L3.992 13.31a3.78 3.78 0 0 0-.719 2.225l-.016 5.624"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.251 21.164v-.829a1 1 0 0 0-1-1H8.238a1 1 0 0 0-1 1v.829"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="m8.879 7.106.748-1.872a1 1 0 0 1 .929-.628h3.388a1 1 0 0 1 .928.628l.749 1.872"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.585 14.976h.2M6.803 16.846h.2M17.497 16.846h.2M12.15 14.976h.2M10.368 16.846h.2M15.714 14.976h.2M13.932 16.846h.2"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTaxiCarTwoTone;
