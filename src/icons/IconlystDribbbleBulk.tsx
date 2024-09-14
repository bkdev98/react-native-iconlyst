import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDribbbleBulk = ({
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
      d="M21.5 11.95V12c0 .5-.04 1-.11 1.48a9.59 9.59 0 0 1-4.16 6.46c-.44.28-.9.54-1.39.76-1.18.51-2.48.8-3.84.8a9.42 9.42 0 0 1-7.07-3.16A9.42 9.42 0 0 1 2.5 12c0-.12 0-.24.01-.36.02-.51.08-1.01.17-1.5.6-3.02 2.64-5.52 5.36-6.78.47-.22.97-.39 1.48-.53A9.2 9.2 0 0 1 12 2.5a9.46 9.46 0 0 1 7.33 3.46v.01a9.4 9.4 0 0 1 2.17 5.98"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 11.95V12c0 .5-.04 1-.11 1.48-1.98-.54-4.08-.6-6.1-.25.85 2.19 1.5 4.43 1.94 6.71-.44.28-.9.54-1.39.76-.43-2.43-1.12-4.8-2.04-7.14-3.46.94-6.46 3.05-7.72 5.87-.41-.33-.8-.7-1.15-1.09 1.55-2.98 4.68-5.18 8.29-6.21-.27-.59-.55-1.17-.85-1.76-3.51 1.1-7.14 1.28-9.11 1.28-.29 0-.54 0-.75-.01.02-.51.08-1.01.17-1.5 1.62.04 5.38-.03 8.99-1.11-1.03-1.9-2.23-3.79-3.63-5.67.47-.22.97-.39 1.48-.53 1.38 1.9 2.56 3.79 3.6 5.71 2.02-.79 3.89-1.95 5.17-3.66.37.33.72.69 1.04 1.08v.01c-1.41 1.81-3.4 3.05-5.53 3.9.31.63.62 1.27.9 1.92 2.22-.42 4.57-.41 6.8.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDribbbleBulk;
