import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSquareBulk = ({
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
      d="M16.217 2.563H7.782c-3.16 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.122 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.078 16.102h-.328v.25a.75.75 0 0 1-1.5 0v-.25h-.543a2.11 2.11 0 0 1-2.106-2.11.75.75 0 0 1 1.5 0c0 .337.272.61.606.61h.543v-1.649h-.26a2.394 2.394 0 0 1-2.39-2.39 2.393 2.393 0 0 1 2.39-2.39h.26v-.39a.75.75 0 0 1 1.5 0v.39h.546c1.161 0 2.106.946 2.106 2.11a.75.75 0 0 1-1.5 0 .61.61 0 0 0-.606-.61h-.546v1.78h.328a2.324 2.324 0 1 1 0 4.65m-2.978-5.54a.89.89 0 0 1 .89-.89h.26v1.78h-.26a.89.89 0 0 1-.89-.89m2.65 2.39h.328c.455 0 .825.368.825.82 0 .458-.37.83-.825.83h-.328z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarSquareBulk;
