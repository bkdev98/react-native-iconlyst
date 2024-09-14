import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageCloseRemoveLight = ({
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
      d="M20.87 12.862V7.93c0-2.89-1.799-4.93-4.692-4.93H7.906c-2.882 0-4.69 2.04-4.69 4.93v7.794c0 2.89 1.799 4.931 4.69 4.931h1.718M20.87 9.367H3.215M6.497 6.482H6.44m2.494 0h-.056m2.494 0h-.055M19.276 17.016 15.293 21m0-3.984L19.276 21"
    />
  </Svg>
);
export default IconlystWebPageCloseRemoveLight;
