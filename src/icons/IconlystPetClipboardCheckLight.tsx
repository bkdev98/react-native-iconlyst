import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetClipboardCheckLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.323 6.586H9.677c-.75 0-1.357-.607-1.357-1.356v-.573c0-.75.607-1.356 1.357-1.356h4.646c.75 0 1.357.607 1.357 1.356v.573c0 .75-.607 1.356-1.357 1.356"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.68 4.895a3.755 3.755 0 0 1 3.755 3.754v8.898A3.755 3.755 0 0 1 15.68 21.3H8.321a3.755 3.755 0 0 1-3.755-3.754V8.649a3.755 3.755 0 0 1 3.755-3.754"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 10.205v-.052m-.006-.152a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.263 11.863v-.051m-.007-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.748 11.863v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.03 16.788c1.368 0 3.102 1.185 3.077-.64-.01-1.367-1.434-2.651-3.077-2.653-1.652 0-3.293 1.395-3.065 2.818.252 1.649 1.853.475 3.065.475Z"
    />
  </Svg>
);
export default IconlystPetClipboardCheckLight;
