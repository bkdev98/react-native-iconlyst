import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBadgeBulk = ({
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
      d="M19.901 6.99c0-2.773-1.586-4.43-4.243-4.43h-7.3c-2.631 0-4.266 1.698-4.266 4.43l-.01 12.25c-.001.59.296 1.13.793 1.445a1.7 1.7 0 0 0 1.643.099l.76-.361.005-.003a1.26 1.26 0 0 1 1.034-.037l2.146.882a4.1 4.1 0 0 0 1.537.3c.521 0 1.043-.1 1.54-.302l2.147-.88a1.28 1.28 0 0 1 1.039.039l.754.36a1.69 1.69 0 0 0 1.645-.099c.497-.314.794-.855.793-1.444z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 15.26v-.311a2.02 2.02 0 0 0 1.995-2.018c0-1.114-.906-2.02-2.02-2.02h-1.45a.52.52 0 0 1 0-1.04h.677c.017.002.031.01.048.01s.031-.008.048-.01h1.584a.75.75 0 1 0 0-1.5h-.882v-.32a.75.75 0 0 0-1.5 0v.323a2.02 2.02 0 0 0-1.994 2.017c0 1.113.906 2.02 2.02 2.02h1.45a.52.52 0 0 1 0 1.04h-2.358a.75.75 0 0 0 0 1.5h.882v.31a.75.75 0 0 0 1.5 0"
    />
  </Svg>
);
export default IconlystDollarBadgeBulk;
