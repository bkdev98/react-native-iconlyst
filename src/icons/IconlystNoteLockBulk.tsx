import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteLockBulk = ({
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
      d="M13.392 15.734a.33.33 0 0 0 .1-.211c.146-1.935 1.692-3.414 3.622-3.435.644.001 1.25.175 1.784.473.218.122.512-.024.512-.275V7.268a4.625 4.625 0 0 0-4.62-4.62H7.693a4.624 4.624 0 0 0-4.619 4.62v9.761a4.624 4.624 0 0 0 4.62 4.62h4.668c.24 0 .389-.274.29-.493a3.4 3.4 0 0 1-.306-1.408v-1.58c0-.957.406-1.816 1.046-2.434"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.564 9.727a.75.75 0 0 1 0-1.5h5.082a.75.75 0 0 1 0 1.5zM10.216 14.166H7.562a.75.75 0 1 1 0-1.5h2.654a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.8 15.841v.551a2.14 2.14 0 0 1 1.126 1.88v1.58A2.15 2.15 0 0 1 18.776 22h-2.82a2.15 2.15 0 0 1-2.15-2.149v-1.58c0-.814.46-1.515 1.127-1.88v-.54c.023-1.32 1.102-2.396 2.405-2.41h.026a2.44 2.44 0 0 1 2.436 2.4m-1.024 4.66c.364 0 .65-.286.65-.65v-1.58a.65.65 0 0 0-.65-.65h-2.82a.65.65 0 0 0-.65.65v1.58c0 .364.285.65.65.65zm-1.422-5.56a.94.94 0 0 0-.92.924v.256H18.3v-.27c-.007-.503-.448-.939-.946-.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoteLockBulk;
