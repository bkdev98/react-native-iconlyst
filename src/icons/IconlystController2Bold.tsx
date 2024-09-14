import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController2Bold = ({
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
      d="M16.665 16.367a.802.802 0 1 1 0-1.604.802.802 0 0 1 0 1.604m-1.743-3.171a.802.802 0 1 1 .001-1.603.802.802 0 0 1-.001 1.603m-4.072 1.579H9.9v.95a.75.75 0 0 1-1.5 0v-.95H7.35a.75.75 0 1 1 0-1.5H8.4v-.95a.75.75 0 0 1 1.5 0v.95h.95a.75.75 0 0 1 0 1.5m3.8-7.35H13v-.7c0-1.511-1.14-2.65-2.65-2.65h-1c-.188 0-.45-.171-.45-.45a.75.75 0 0 0-1.5 0c0 1.057.893 1.95 1.95 1.95h1c.687 0 1.15.462 1.15 1.15v.7H9.35c-3.75 0-6.8 3.05-6.8 6.8v.1c0 3.75 3.05 6.8 6.8 6.8h5.3c3.749 0 6.8-3.05 6.8-6.8v-.1c0-3.75-3.051-6.8-6.8-6.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystController2Bold;
