import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitskiOutline = ({
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
      d="M16.923 6.104A4.47 4.47 0 0 1 20.1 7.4a4.47 4.47 0 0 1 1.3 3.176 4.47 4.47 0 0 1-1.353 3.147l-5.204 5.204a.75.75 0 0 1-1.06-1.06l5.208-5.21.01-.01c.56-.539.891-1.307.898-2.085a2.97 2.97 0 0 0-.86-2.101 2.97 2.97 0 0 0-2.101-.858 2.97 2.97 0 0 0-2.085.9l-.01.01-5.205 5.205a.75.75 0 0 1-1.06-1.06l5.2-5.2a4.47 4.47 0 0 1 3.145-1.355"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.295 3.53a4.429 4.429 0 0 1 6.253 6.267.75.75 0 0 1-1.096-1.025A2.929 2.929 0 0 0 8.326 4.62L4.963 7.983l9.88 9.884a.75.75 0 0 1-1.061 1.06L3.372 8.513a.75.75 0 0 1 0-1.06l3.904-3.904zM3.372 12.657a.75.75 0 0 1 1.06 0l7.808 7.811a.75.75 0 0 1-1.06 1.061l-7.808-7.811a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitskiOutline;
