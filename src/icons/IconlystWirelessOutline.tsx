import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessOutline = ({
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
      d="m5.008 12.921-.005-.005a.7.7 0 0 1-.135-.16L3.014 10.55a2.2 2.2 0 0 1 .142-2.98c5.246-5.19 12.943-5.19 18.188 0 .81.8.884 2.1.142 2.98l-1.89 2.249a1 1 0 0 1-.102.111l-2.706 3.226a1 1 0 0 1-.083.094l-2.78 3.31a2.19 2.19 0 0 1-3.35 0l-2.776-3.3a.7.7 0 0 1-.12-.142zm4.335 2.83 2.38 2.83a.7.7 0 0 0 1.054 0l2.385-2.835c-1.758-1.462-4.07-1.463-5.82.006m6.784-1.152 1.862-2.215c-3.337-3.276-8.144-3.277-11.474.005l1.86 2.213c2.31-1.938 5.438-1.93 7.752-.003m2.83-3.366 1.382-1.642a.703.703 0 0 0-.05-.95c-4.66-4.62-11.416-4.62-16.078 0a.703.703 0 0 0-.05.95l1.385 1.646c3.883-3.75 9.523-3.748 13.412-.004"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessOutline;
