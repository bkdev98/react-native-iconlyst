import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarTimeBulk = ({
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
      d="M9.96 14.529c-.42 0-.77-.35-.77-.78s.35-.78.77-.78a.781.781 0 0 1 0 1.56m-3.68 0a.781.781 0 0 1 0-1.56.781.781 0 0 1 0 1.56m0 3.35c-.43 0-.78-.35-.78-.78s.35-.77.78-.77.78.34.78.77-.35.78-.78.78m11.52-6c.617 0 1.212.103 1.766.283a.208.208 0 0 0 .274-.193v-1.39a.2.2 0 0 0-.2-.2H2.99a.2.2 0 0 0-.2.2v5.59c0 2.95 1.78 4.72 4.75 4.72h4.955c.158 0 .255-.175.179-.313a5.862 5.862 0 0 1 5.126-8.697"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.845 8.1c0-1.398-.416-2.568-1.22-3.371-.723-.713-1.744-1.12-2.954-1.23v-.951a.743.743 0 0 0-1.487 0v3.52c-.07.02-.128.039-.198.039a.74.74 0 0 1-.743-.743V3.66a.2.2 0 0 0-.2-.2H8.454v-.912a.74.74 0 0 0-.743-.743.75.75 0 0 0-.744.743v3.52a.6.6 0 0 1-.198.039.75.75 0 0 1-.743-.743v-1.45a.193.193 0 0 0-.247-.188C3.888 4.293 2.794 5.828 2.794 8.1v.593c0 .11.09.2.2.2h16.65a.2.2 0 0 0 .2-.2zM19.69 19.229a.754.754 0 0 1-1.03.25l-1.22-.73a.74.74 0 0 1-.36-.64v-1.57a.749.749 0 1 1 1.5 0v1.15l.85.51c.36.21.47.67.26 1.03m-1.84-5.76a4.366 4.366 0 0 0 0 8.73c2.4 0 4.36-1.96 4.36-4.36 0-2.41-1.96-4.37-4.36-4.37M9.96 14.529c-.42 0-.77-.35-.77-.78s.35-.78.77-.78a.78.78 0 0 1 0 1.56m-3.68 0a.781.781 0 0 1 0-1.56.78.78 0 0 1 0 1.56m0 3.35c-.43 0-.78-.35-.78-.78s.35-.77.78-.77.78.34.78.77-.35.78-.78.78"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarTimeBulk;
