import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftOnenoteBulk = ({
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
      d="M17.785 3.068h-7.95c-1.628 0-2.816 1.064-3.049 2.641a4 4 0 0 0-.034.37.29.29 0 0 0 .293.3h2.48c1.97 0 3.34 1.43 3.34 3.47v4.3c0 2.05-1.37 3.47-3.34 3.47h-2.78c0 .272.015.544.065.813.281 1.503 1.446 2.496 3.025 2.496h5.01a.3.3 0 0 0 .3-.3V9.018c0-.96.78-1.75 1.74-1.75h3.69a.3.3 0 0 0 .3-.3v-.68c0-1.89-1.27-3.22-3.09-3.22"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.365 14.149v-4.3c0-1.23-.69-1.97-1.84-1.97h-4.56c-1.14 0-1.84.76-1.84 1.97v4.3c0 1.22.7 1.97 1.84 1.97h4.56c1.14 0 1.84-.75 1.84-1.97"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.795 14.578c.09 0 .17-.01.26-.04a.76.76 0 0 0 .49-.71v-3.66a.749.749 0 1 0-1.5 0v1.62l-.32-.38-.48-.56-.99-1.16a.74.74 0 0 0-.83-.22c-.29.11-.49.39-.49.7v3.6c0 .42.34.75.75.75.42 0 .75-.33.75-.75v-1.55l1.79 2.1c.14.17.35.26.57.26"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.645 9.018v2.578a.3.3 0 0 0 .3.3h3.63a.3.3 0 0 0 .3-.3V9.073a.3.3 0 0 0-.3-.3h-3.69a.24.24 0 0 0-.24.245M16.645 16.524a.3.3 0 0 0 .3.3h3.63a.3.3 0 0 0 .3-.3v-2.828a.3.3 0 0 0-.3-.3h-3.63a.3.3 0 0 0-.3.3zM16.645 20.633a.3.3 0 0 0 .3.3h.845c1.52 0 2.625-.88 2.967-2.267.044-.178-.097-.342-.28-.342h-3.532a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftOnenoteBulk;
