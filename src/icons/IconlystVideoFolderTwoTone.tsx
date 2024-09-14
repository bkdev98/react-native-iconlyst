import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoFolderTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.975 20.985c3.356 0 5.333-1.978 5.333-5.332l.026-4.656c0-3.423-1.241-5.135-4.605-5.135h-2.653a2.15 2.15 0 0 1-1.713-.857l-.856-1.138a2.14 2.14 0 0 0-1.71-.855H7.922c-3.356 0-4.588 1.977-4.588 5.327v7.314c0 3.354 1.981 5.332 5.345 5.332z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.453 14.196a9.8 9.8 0 0 1-2.864 1.797c-.924.364-1.699-.09-1.813-1.001a18 18 0 0 1 0-3.83c.124-.947.977-1.349 1.813-.997a9.6 9.6 0 0 1 2.864 1.797c.713.646.73 1.563 0 2.234"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoFolderTwoTone;
