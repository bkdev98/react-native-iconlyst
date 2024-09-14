import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeviantartCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.033 6.688a.76.76 0 0 1 .623-.329h1.497c.546 0 .989.443.989.99v1.883c0 .246-.074.486-.212.69l-1.221 1.797h.444c.546 0 .989.443.989.99v1.767a.99.99 0 0 1-.99.989h-2.91l-1.276 1.845a.76.76 0 0 1-.623.328H8.846a.99.99 0 0 1-.989-.99v-1.883c0-.246.074-.486.213-.69l1.22-1.797h-.443a.99.99 0 0 1-.99-.99V9.522c0-.546.443-.989.99-.989h2.91zm1.014 1.171-1.208 1.747a.99.99 0 0 1-.813.426H9.357v.746h1.17c.678 0 1.08.76.699 1.32l-1.869 2.75v1.29h.596l1.207-1.747a.99.99 0 0 1 .814-.426h2.668v-.746h-1.17a.846.846 0 0 1-.698-1.32l1.868-2.75v-1.29z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeviantartCircleOutline;
