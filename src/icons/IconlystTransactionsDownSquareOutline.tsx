import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTransactionsDownSquareOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.42 4.954c-.72.67-1.17 1.66-1.17 2.95v8.433c0 1.289.45 2.277 1.17 2.948.726.675 1.789 1.084 3.106 1.084h7.948c1.317 0 2.38-.41 3.106-1.087.72-.672 1.17-1.661 1.17-2.945V7.902c0-1.288-.45-2.277-1.17-2.948-.726-.676-1.789-1.085-3.106-1.085H8.526c-1.317 0-2.38.409-3.106 1.085M4.398 3.856c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.046v8.435c0 1.655-.591 3.058-1.647 4.042-1.05.979-2.501 1.49-4.13 1.49H8.527c-1.627 0-3.077-.508-4.128-1.486-1.057-.984-1.648-2.387-1.648-4.046V7.903c0-1.66.59-3.062 1.648-4.047"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.559 13.465a.75.75 0 0 1 .75-.75h2.723a.75.75 0 0 1 0 1.5H8.309a.75.75 0 0 1-.75-.75M7.559 16.898a.75.75 0 0 1 .75-.75h7.298a.75.75 0 0 1 0 1.5H8.31a.75.75 0 0 1-.75-.75M17.218 9.09a.75.75 0 0 1 .749.751l-.005 2.678a.75.75 0 0 1-.75.748l-2.678-.004a.75.75 0 1 1 .002-1.5l1.928.003.003-1.927a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.254 6.809a.75.75 0 0 1 1.06.001l1.912 1.918 1.703-1.698a.75.75 0 0 1 1.07.012l4.757 4.962a.75.75 0 0 1-1.082 1.038l-4.228-4.41-1.692 1.688a.75.75 0 0 1-1.061-.002L7.252 7.87a.75.75 0 0 1 .002-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTransactionsDownSquareOutline;
