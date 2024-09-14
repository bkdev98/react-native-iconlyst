import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDnaBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.26 19.1H6.637a1 1 0 1 0 0 2h4.623a1 1 0 1 0 0-2M17.361 19.1h-2.289a1 1 0 1 0 0 2h2.29a1 1 0 1 0 0-2M10.976 17.5h5.22a1 1 0 1 0 0-2h-5.22a1 1 0 1 0 0 2M6.64 4.9h2.288a1 1 0 1 0 0-2H6.64a1 1 0 1 0 0 2M12.74 4.9h4.623a1 1 0 1 0 0-2H12.74a1 1 0 1 0 0 2M13.942 7.5a1 1 0 0 0-1-1H7.744a1 1 0 1 0 0 2h5.198a1 1 0 0 0 1-1" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.553 12C15.985 9.918 18.4 7.414 18.4 3a1 1 0 1 0-2 0c0 3.697-2.059 5.72-4.4 7.695C9.66 8.72 7.6 6.697 7.6 3a1 1 0 1 0-2 0c0 4.414 2.415 6.918 4.847 9C8.015 14.082 5.6 16.586 5.6 21a1 1 0 1 0 2 0c0-3.697 2.06-5.72 4.4-7.695 2.341 1.975 4.4 3.998 4.4 7.695a1 1 0 1 0 2 0c0-4.414-2.415-6.918-4.847-9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDnaBulk;
