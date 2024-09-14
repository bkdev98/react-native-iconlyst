import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandcampSquareOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.02c0-3.45 2.22-5.77 5.53-5.77h8.43c3.31 0 5.53 2.32 5.53 5.77v7.95c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.27v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.02c0-2.59-1.58-4.27-4.03-4.27z"
    />
    <Path
      fill={props.color}
      d="M13.285 16.06h-4.6c-.57 0-1.1-.28-1.41-.75-.32-.48-.37-1.08-.15-1.61l2.03-4.74c.27-.63.88-1.03 1.56-1.03h4.6c.58 0 1.11.29 1.42.77.31.46.36 1.07.14 1.6l-2.03 4.74c-.27.62-.88 1.02-1.56 1.02m-2.57-6.63c-.08 0-.15.05-.18.12l-2.03 4.73c-.03.06-.02.13.02.19.03.05.1.08.16.08h4.6c.08 0 .15-.04.18-.11l2.03-4.74c.02-.06.02-.13-.01-.18-.04-.06-.1-.1-.17-.1h-4.6z"
    />
  </Svg>
);
export default IconlystBandcampSquareOutline;
