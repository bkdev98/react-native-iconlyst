import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandiCameraBulk = ({
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
      d="M17.344 10.264c-.21-1.92-1.48-3.25-3.32-3.48-.2-.04-.4-.05-.61-.05h-6.11c-2.37 0-3.97 1.67-3.97 4.14v5.11c0 2.49 1.6 4.15 3.97 4.15h6.11c2.37 0 3.97-1.66 3.97-4.15v-5.11c0-.21-.01-.41-.04-.61"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.704 11.337c0 .56-.45 1-1 1s-1-.44-1-1c0-.55.45-1 1-1s1 .45 1 1M14.024 6.787c-.2-.04-.4-.05-.61-.05h-1.07l-.21-.47c-.25-.54-.8-.9-1.4-.9h-2.91a.749.749 0 1 1 0-1.5h2.91c1.18 0 2.26.7 2.76 1.77zM22.334 9.708l-.01 6.83c0 .92-.75 1.66-1.66 1.66-.38 0-.75-.13-1.05-.38l-2.23-1.83v-5.11c0-.21-.01-.41-.04-.61l2.28-1.85c.34-.29.78-.41 1.22-.37s.84.25 1.12.6c.24.3.37.67.37 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.704 12.337c-.55 0-1-.44-1-1 0-.55.45-1 1-1s1 .45 1 1c0 .56-.45 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandiCameraBulk;
