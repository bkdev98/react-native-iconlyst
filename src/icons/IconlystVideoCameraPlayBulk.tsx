import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraPlayBulk = ({
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
      d="M6.516 4.25h6.79c2.603 0 4.352 1.828 4.352 4.55v6.4c0 2.722-1.749 4.55-4.353 4.55H6.516c-2.602 0-4.35-1.828-4.35-4.55V8.8c0-2.722 1.748-4.55 4.35-4.55"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M20.576 6.818a1.796 1.796 0 0 1 2.52.25c.264.318.407.724.406 1.14l-.012 7.597a1.797 1.797 0 0 1-1.794 1.79c-.415 0-.818-.144-1.134-.405l-1.214-.998a1.03 1.03 0 0 1-.358-.865q.003-.06.003-.122v-6.4q0-.06-.003-.117c-.016-.332.102-.655.36-.866z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.572 13.608h.01c.48-.45.75-1.03.75-1.63-.01-.59-.27-1.15-.75-1.59-.85-.78-1.83-1.4-2.9-1.84-.62-.26-1.27-.24-1.8.06-.52.29-.87.83-.95 1.49-.13 1.2-.13 2.48 0 3.8.08.66.41 1.18.92 1.48.28.17.6.25.94.25.28 0 .57-.05.87-.17a9.7 9.7 0 0 0 2.91-1.85m-1.01-2.12c.12.11.26.29.27.5 0 .22-.15.41-.27.52-.72.66-1.57 1.2-2.46 1.56-.2.08-.38.08-.49.02-.14-.08-.18-.27-.19-.36-.12-1.2-.12-2.37 0-3.45.01-.13.06-.29.2-.37a.4.4 0 0 1 .19-.04c.08 0 .18.02.28.07.92.37 1.75.89 2.47 1.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCameraPlayBulk;
