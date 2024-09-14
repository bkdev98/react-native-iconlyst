import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPartyingBulk = ({
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
      d="M13.1 22.137a9.522 9.522 0 1 0 0-19.044 9.522 9.522 0 0 0 0 19.044"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.341 10.986a.75.75 0 0 1-1.052-.138c-.076-.099-.242-.266-.493-.266s-.417.167-.493.266a.75.75 0 0 1-1.19-.913c.832-1.084 2.534-1.084 3.366 0a.75.75 0 0 1-.138 1.051M16.597 15.329c-.865 1.129-2.132 1.776-3.475 1.776-1.34 0-2.606-.647-3.474-1.775a.751.751 0 0 1 1.189-.915c.581.756 1.414 1.19 2.285 1.19s1.705-.433 2.285-1.189a.75.75 0 0 1 1.19.913M8.784 10.987a.75.75 0 0 1-.139-1.051c.83-1.088 2.536-1.086 3.366 0a.75.75 0 0 1-1.191.911c-.077-.099-.241-.265-.493-.265-.251 0-.415.166-.491.265a.75.75 0 0 1-1.052.14M2.598 2.083a.75.75 0 0 1 .688-.203l7 1.5a.8.8 0 0 1 .201.075 9.5 9.5 0 0 0-2.311 1.007l-1.1-.236-2.335 2.335.233 1.087a9.5 9.5 0 0 0-1.017 2.3.8.8 0 0 1-.062-.178l-1.5-7a.75.75 0 0 1 .203-.687M4.105 3.59l1.224.262-.962.962z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPartyingBulk;
