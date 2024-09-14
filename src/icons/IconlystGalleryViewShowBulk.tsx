import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewShowBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M4.253 7.99q-.003.088-.003.179v1.27h3.474a.3.3 0 0 1 .3.3v4.557a.3.3 0 0 1-.3.3H4.25v1.244q0 .105.004.206H7.72a.3.3 0 0 1 .3.303l-.041 3.583q.07.002.14.002h1.359v-3.593a.3.3 0 0 1 .3-.3h1.086c.149 0 .248.158.203.3a2.57 2.57 0 0 0 .1 1.73 9 9 0 0 0 1.239 2.068.8.8 0 0 1 .118.144q.147.173.3.336c.41.433-.627.815-.933.815H8.12c-1.607 0-2.969-.57-3.925-1.593-.951-1.018-1.445-2.424-1.445-4.001V8.169c0-1.578.494-2.985 1.444-4.006.956-1.026 2.318-1.599 3.926-1.599h8.13c1.613 0 2.974.573 3.93 1.6.949 1.02 1.44 2.428 1.44 4.005v3.358c0 .326-.514 1.17-.902.92-1-.645-2.12-.996-3.29-.996q-.495 0-.974.081a.318.318 0 0 1-.376-.305V9.74a.3.3 0 0 1 .3-.3h3.742V8.17l-.003-.18h-3.735a.3.3 0 0 1-.3-.302l.024-3.623H14.63V7.69a.3.3 0 0 1-.3.3H9.773a.3.3 0 0 1-.3-.3V4.064H8.12l-.141.002.041 3.62a.3.3 0 0 1-.3.303z" />
      <Path d="M14.628 9.741a.3.3 0 0 0-.3-.3h-4.55a.3.3 0 0 0-.3.3v4.56a.3.3 0 0 0 .3.3h2.04c.1 0 .193-.05.25-.132.667-.95 1.486-1.703 2.4-2.211a.31.31 0 0 0 .16-.269z" />
    </G>
    <Path
      fill={props.color}
      d="M16.702 17.101c0 .414.353.75.767.75a.75.75 0 0 0 0-1.5h-.033a.737.737 0 0 0-.734.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.776 17.376c.963 2.243 2.702 3.581 4.651 3.581 1.95 0 3.69-1.338 4.653-3.58a.75.75 0 0 0 0-.592c-.964-2.244-2.704-3.582-4.653-3.582s-3.687 1.338-4.65 3.582a.75.75 0 0 0 0 .591m4.652 2.081c-1.25 0-2.407-.882-3.138-2.377.732-1.495 1.888-2.377 3.137-2.377 1.251 0 2.407.882 3.14 2.377-.733 1.495-1.888 2.377-3.139 2.377"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewShowBulk;
