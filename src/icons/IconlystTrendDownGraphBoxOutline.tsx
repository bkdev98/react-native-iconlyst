import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendDownGraphBoxOutline = ({
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
      d="M5.335 5.038c-.676.726-1.085 1.79-1.085 3.107v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.659 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.948-1.17.676-.726 1.085-1.789 1.085-3.107V8.145c0-1.317-.41-2.38-1.088-3.106-.672-.72-1.661-1.17-2.945-1.17H8.282c-1.289 0-2.277.45-2.947 1.17M4.237 4.016C5.22 2.96 6.623 2.37 8.282 2.37h8.435c1.655 0 3.058.59 4.042 1.647.98 1.05 1.491 2.5 1.491 4.129v7.947c0 1.628-.509 3.078-1.487 4.129-.984 1.057-2.387 1.648-4.046 1.648H8.283c-1.66 0-3.062-.591-4.046-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.145c0-1.627.508-3.078 1.487-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.658 14.793a.75.75 0 0 1 .75.75v.988a.75.75 0 0 1-1.5 0v-.988a.75.75 0 0 1 .75-.75M12.498 13.11a.75.75 0 0 1 .75.75v2.67a.75.75 0 1 1-1.5 0v-2.67a.75.75 0 0 1 .75-.75M8.34 11.43a.75.75 0 0 1 .75.75v4.354a.75.75 0 1 1-1.5 0V12.18a.75.75 0 0 1 .75-.75M7.29 7.23a.75.75 0 0 1 1.056-.104 14.6 14.6 0 0 0 8.255 3.272l.578.04a.75.75 0 0 1-.104 1.497l-.577-.04a16.1 16.1 0 0 1-9.102-3.609.75.75 0 0 1-.105-1.055"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.371 8.826a.75.75 0 0 1 1.05.154l1.308 1.758a.75.75 0 0 1-.154 1.05l-1.758 1.308a.75.75 0 1 1-.895-1.203l1.156-.86-.86-1.157a.75.75 0 0 1 .153-1.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendDownGraphBoxOutline;
