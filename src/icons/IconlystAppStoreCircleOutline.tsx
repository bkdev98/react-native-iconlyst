import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppStoreCircleOutline = ({
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
      d="M6.512 14.043a.75.75 0 0 1 .75-.75h5.323a.75.75 0 1 1 0 1.5H7.262a.75.75 0 0 1-.75-.75m7.537 0a.75.75 0 0 1 .75-.75h1.937a.75.75 0 1 1 0 1.5h-1.937a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.328 6.85a.75.75 0 0 1 .277 1.023L9.85 14.416a.75.75 0 0 1-1.3-.747l3.754-6.542a.75.75 0 0 1 1.024-.277m-4.862 8.47a.75.75 0 0 1 .277 1.024l-.303.53a.75.75 0 1 1-1.301-.747l.303-.529a.75.75 0 0 1 1.024-.277"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.672 6.85a.75.75 0 0 1 1.023.277l.956 1.663a.75.75 0 1 1-1.3.747l-.956-1.664a.75.75 0 0 1 .277-1.023m2.061 3.592a.75.75 0 0 1 1.024.277l3.104 5.408a.75.75 0 0 1-1.301.747l-3.104-5.408a.75.75 0 0 1 .277-1.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAppStoreCircleOutline;
