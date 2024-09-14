import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchAppsBold = ({
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
      d="M14.973 5.136h-5.88c-.16 0-.3.03-.45.04l.33-1.55c.1-.51.56-.88 1.08-.88h3.96c.52 0 .97.37 1.08.88l.33 1.55c-.15-.01-.29-.04-.45-.04m-1.91 4.95c0-.5.4-.92.87-.92.5 0 .88.36.88.84v.08a.875.875 0 1 1-1.75 0m.87 2.9c.5 0 .88.36.88.83v.09c0 .48-.39.87-.88.87a.87.87 0 0 1-.87-.87c0-.5.4-.92.87-.92m-4.68-2.9c0-.5.4-.92.87-.92.5 0 .88.36.88.84v.08a.875.875 0 1 1-1.75 0m.87 2.9c.5 0 .88.36.88.83v.09c0 .48-.39.87-.88.87a.87.87 0 0 1-.87-.87c0-.5.4-.92.87-.92m4.97 7.38c-.11.51-.56.88-1.08.88h-3.96c-.52 0-.98-.37-1.08-.88l-.32-1.48c.15.01.29.03.44.03h5.87c.16 0 .3-.02.45-.03zm2.7-14.21a3.2 3.2 0 0 0-.75-.53c-.01-.02 0-.04 0-.06l-.48-2.25a2.63 2.63 0 0 0-2.55-2.07h-3.96c-1.22 0-2.3.87-2.55 2.07l-.48 2.25v.07c-1.1.6-1.74 1.72-1.74 3.22v6.28c0 1.54.64 2.67 1.74 3.28v.01l.48 2.25a2.62 2.62 0 0 0 2.55 2.07h3.96c1.22 0 2.29-.87 2.55-2.07l.48-2.25c1.1-.6 1.74-1.72 1.74-3.23v-6.33c0-1.12-.34-2.06-.99-2.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareAppleWatchAppsBold;
