import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenHideBold = ({
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
      d="M20.175 11.53c-.43 1.47-1.77 2.52-3.4 2.52-.64 0-1.23-.16-1.75-.45-.39-.21-.73-.5-1.01-.84-.49-.61-.79-1.39-.79-2.26 0-1.99 1.56-3.55 3.55-3.55.28 0 .56.03.82.09 1.58.36 2.73 1.75 2.73 3.46 0 .36-.05.71-.15 1.03m-6.4 3.07c-.8.6-1.7.9-2.6.9s-1.8-.3-2.6-.9l-5-4.1q.15-.6.6-1.2l5.4 4.3c.96.76 2.28.8 3.26.09.27.34.6.65.95.9zm3-9.15q-.645 0-1.23.15l-2.57-1.8c-1.1-.8-2.5-.8-3.6 0l-5.7 4c-.9.7-1.5 1.7-1.5 2.9v5.4c0 1.4.4 2.6 1.3 3.4.9.9 2.1 1.3 3.6 1.3h8.2c1.5 0 2.7-.5 3.6-1.3.8-.8 1.3-2 1.3-3.4v-1.84c1.02-.91 1.65-2.25 1.65-3.76 0-2.83-2.22-5.05-5.05-5.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.275 9.75h-2.9a.75.75 0 0 0 0 1.5h2.9a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailOpenHideBold;
