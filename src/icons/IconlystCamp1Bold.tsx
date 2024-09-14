import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp1Bold = ({
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
      d="M12.826 13.563h-1.652a.75.75 0 0 1 0-1.5h1.652a.75.75 0 0 1 0 1.5M21 20.61h-.41L12.85 6.24l.81-1.5c.19-.37.06-.82-.31-1.02a.745.745 0 0 0-1.01.31l-.34.63-.34-.63c-.2-.37-.65-.5-1.02-.31-.36.2-.5.65-.3 1.02l.81 1.5-7.74 14.37H3a.749.749 0 1 0 0 1.5h5.721a.2.2 0 0 0 .2-.2v-4.893c0-.915.728-1.66 1.623-1.66h2.911c.895 0 1.624.745 1.624 1.66v4.893c0 .11.09.2.2.2H21a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.455 16.856h-2.91c-.068 0-.125.073-.125.16v4.893c0 .11.09.2.2.2h2.76a.2.2 0 0 0 .2-.2v-4.893c0-.088-.057-.16-.125-.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp1Bold;
