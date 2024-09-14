import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftCardBold = ({
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
      fill={props.color}
      d="M9.346 9.151c0 .728.316 1.392.849 1.936H2.55a.3.3 0 0 1-.3-.3V9.23c0-2.858 1.75-4.778 4.355-4.778h6.405a.3.3 0 0 1 .3.3V7.96c-.575-.46-1.265-.75-2.021-.75a1.945 1.945 0 0 0-1.943 1.942M17.276 9.152c0 .838-1.081 1.589-2.454 1.798.1-1.256.964-2.241 2.01-2.241.245 0 .444.199.444.443"
    />
    <Path
      fill={props.color}
      d="M14.81 7.96c.575-.462 1.266-.75 2.023-.75 1.07 0 1.943.871 1.943 1.941 0 .728-.316 1.392-.85 1.936h3.524a.3.3 0 0 0 .3-.3V9.23c0-2.858-1.754-4.778-4.365-4.778H15.11a.3.3 0 0 0-.3.3zM17.557 14.486l-1.727-1.899h5.62a.3.3 0 0 1 .3.3v3.114c0 2.857-1.754 4.777-4.365 4.777H15.11a.3.3 0 0 1-.3-.3v-6.783l1.638 1.801a.75.75 0 1 0 1.109-1.01M10.846 9.152c0 .838 1.08 1.589 2.454 1.798-.1-1.256-.964-2.24-2.011-2.24a.443.443 0 0 0-.443.442"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m11.672 15.496 1.638-1.8v6.783a.3.3 0 0 1-.3.3H6.605C4 20.779 2.25 18.859 2.25 16v-3.114a.3.3 0 0 1 .3-.3h9.74l-1.727 1.899a.75.75 0 1 0 1.109 1.01m-5.425 1.829h1.715a.75.75 0 0 0 0-1.5H6.247a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftCardBold;
