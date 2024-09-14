import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraPlayBold = ({
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
      d="M11.562 11.49c.12.11.26.29.27.5 0 .22-.15.41-.27.52-.72.66-1.57 1.2-2.46 1.56-.2.08-.38.08-.49.02-.14-.08-.18-.27-.19-.36-.12-1.2-.12-2.37 0-3.45.01-.13.06-.29.2-.37a.4.4 0 0 1 .19-.04c.08 0 .18.02.28.07.92.37 1.75.89 2.47 1.55"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.516 4.25h6.79c2.603 0 4.352 1.828 4.352 4.55v6.4c0 2.722-1.749 4.55-4.353 4.55H6.516c-2.602 0-4.35-1.828-4.35-4.55V8.8c0-2.722 1.748-4.55 4.35-4.55m6.066 9.36h-.01c-.85.79-1.86 1.42-2.91 1.85-.3.12-.59.17-.87.17-.34 0-.66-.08-.94-.25-.51-.3-.84-.82-.92-1.48-.13-1.32-.13-2.6 0-3.8.08-.66.43-1.2.95-1.49.53-.3 1.18-.32 1.8-.06 1.07.44 2.05 1.06 2.9 1.84.48.44.74 1 .75 1.59 0 .6-.27 1.18-.75 1.63"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M20.577 6.813a1.796 1.796 0 0 1 2.52.25c.264.318.407.724.406 1.14l-.012 7.597a1.797 1.797 0 0 1-1.794 1.79c-.415 0-.818-.144-1.134-.405l-1.214-.998a1.03 1.03 0 0 1-.358-.864q.003-.06.003-.123V8.8q0-.06-.003-.116c-.016-.333.102-.656.36-.867z"
    />
  </Svg>
);
export default IconlystVideoCameraPlayBold;
