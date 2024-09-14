import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBandcampCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M13.28 16.06h-4.6c-.57 0-1.1-.28-1.41-.75-.32-.48-.37-1.08-.15-1.61l2.03-4.74c.27-.63.88-1.03 1.56-1.03h4.6c.58 0 1.11.29 1.42.77.31.46.36 1.08.14 1.6l-2.03 4.74c-.26.62-.88 1.02-1.56 1.02m-2.57-6.63c-.08 0-.15.05-.18.12L8.5 14.28c-.03.06-.02.13.02.19.03.05.1.08.16.08h4.6c.08 0 .15-.04.18-.11l2.03-4.74c.02-.06.02-.13-.01-.18-.04-.06-.1-.1-.17-.1h-4.6z"
    />
  </Svg>
);
export default IconlystBandcampCircleOutline;
