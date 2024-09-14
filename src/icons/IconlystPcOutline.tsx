import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPcOutline = ({
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
      d="M2.5 7.451a4.51 4.51 0 0 1 4.512-4.513h8.606a4.514 4.514 0 0 1 4.423 3.616.75.75 0 0 1-1.47.297 3.014 3.014 0 0 0-2.953-2.413H7.012A3.01 3.01 0 0 0 4 7.451v5.095a3.01 3.01 0 0 0 3.012 3.012h3.843a.75.75 0 1 1 0 1.5H7.012A4.51 4.51 0 0 1 2.5 12.546zM5.916 19.96a.75.75 0 0 1 .75-.75h4.853a.75.75 0 0 1 0 1.5H6.666a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.429 15.564a.75.75 0 0 1 .62.86l-.596 3.658a.75.75 0 0 1-1.48-.241l.595-3.658a.75.75 0 0 1 .861-.62M12.838 11.673a2.925 2.925 0 0 1 2.924-2.924h3.314a2.925 2.925 0 0 1 2.923 2.923v6.467a2.923 2.923 0 0 1-2.923 2.924h-3.314a2.923 2.923 0 0 1-2.923-2.924zm1.5 0v6.466c0 .786.638 1.424 1.425 1.424h3.313c.786 0 1.423-.637 1.423-1.424v-6.466a1.425 1.425 0 0 0-1.423-1.424H15.76c-.785 0-1.423.638-1.423 1.424"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.42 16.923a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPcOutline;
