import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncognitoBulk = ({
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
      d="M21.118 10.09a55 55 0 0 0-1.659-.235.3.3 0 0 1-.26-.268L18.98 7.39a4.36 4.36 0 0 0-4.354-3.94H9.376A4.36 4.36 0 0 0 5.023 7.39L4.806 9.58a.3.3 0 0 1-.26.268c-.557.073-1.113.151-1.668.242a.75.75 0 0 0 .244 1.48c5.785-.953 11.761-.95 17.761 0a.74.74 0 0 0 .858-.623.75.75 0 0 0-.623-.857"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.036 13.781a3.7 3.7 0 0 0-3.498 2.513.33.33 0 0 1-.375.22 6.1 6.1 0 0 0-2.322.011.33.33 0 0 1-.373-.221 3.7 3.7 0 0 0-3.502-2.523 3.714 3.714 0 0 0-3.71 3.71 3.715 3.715 0 0 0 3.71 3.71 3.71 3.71 0 0 0 3.611-2.905.31.31 0 0 1 .217-.234c.843-.217 1.641-.22 2.419-.007.108.03.186.122.21.232a3.71 3.71 0 0 0 3.613 2.914 3.715 3.715 0 0 0 3.71-3.71 3.714 3.714 0 0 0-3.71-3.71"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystIncognitoBulk;
