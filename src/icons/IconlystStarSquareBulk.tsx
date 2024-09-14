import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarSquareBulk = ({
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
      d="M20.75 15.97c0 1.524-.556 2.719-1.5 3.457V13.51a.75.75 0 0 0-1.5 0v6.617a4.7 4.7 0 0 1-1.034.123h-.534v-2.12a.75.75 0 0 0-1.5 0v2.12H13.25v-2.66a.75.75 0 0 0-1.5 0v2.66H8.282c-2.449 0-4.032-1.68-4.032-4.28V8.02c0-2.594 1.583-4.27 4.032-4.27h3.468v1.86a.75.75 0 0 0 1.5 0V3.75h1.432v4.21a.75.75 0 0 0 1.5 0V3.75h.535c.367 0 .707.049 1.033.122V8.61a.75.75 0 0 0 1.5 0V4.57c.944.737 1.5 1.929 1.5 3.45zM18.854 2.63a.7.7 0 0 0-.337-.097 6.1 6.1 0 0 0-1.8-.283H8.282c-3.309 0-5.532 2.319-5.532 5.77v7.95c0 3.457 2.223 5.78 5.532 5.78h8.434c3.31 0 5.534-2.323 5.534-5.78V8.02c0-2.638-1.306-4.605-3.396-5.39"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.125 10.44-1.846-.26a.34.34 0 0 1-.246-.173l-.826-1.655-.002-.003a.79.79 0 0 0-1.411.003l-.826 1.652a.34.34 0 0 1-.245.175l-1.85.262a.77.77 0 0 0-.456.236.77.77 0 0 0 .02 1.099l1.341 1.292a.31.31 0 0 1 .09.275L9.55 15.16a.78.78 0 0 0 .082.492.794.794 0 0 0 1.065.332l1.652-.86a.33.33 0 0 1 .303 0l1.651.859a.78.78 0 0 0 .492.08.78.78 0 0 0 .514-.314.78.78 0 0 0 .141-.592l-.316-1.815a.31.31 0 0 1 .091-.277l1.336-1.29a.775.775 0 0 0 .076-1.04.77.77 0 0 0-.512-.294"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarSquareBulk;
