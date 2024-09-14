import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageAiAltOutline = ({
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
      d="M6.208 9.014a2.417 2.417 0 1 1 4.835 0 2.417 2.417 0 0 1-4.835 0m2.418-.918a.917.917 0 1 0 0 1.835.917.917 0 0 0 0-1.835M17.776 11.752l3.516 3.364a.75.75 0 1 1-1.037 1.084l-3.516-3.365a1.6 1.6 0 0 0-2.252.04l-7.603 7.792a.75.75 0 0 1-1.073-1.047l7.603-7.794a3.1 3.1 0 0 1 4.362-.074"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.03 18.652c-.655-.703-1.054-1.732-1.054-3.012V7.894c0-1.28.397-2.31 1.051-3.012.649-.696 1.606-1.132 2.856-1.132h8.22c1.25 0 2.21.436 2.862 1.133.656.703 1.055 1.732 1.055 3.011v9.345a.75.75 0 1 0 1.5 0V7.894c0-1.59-.5-3.008-1.459-4.035-.964-1.033-2.337-1.609-3.957-1.609H7.883c-1.62 0-2.991.577-3.953 1.61-.957 1.027-1.454 2.445-1.454 4.034v7.746c0 1.592.5 3.009 1.458 4.035.963 1.032 2.333 1.609 3.949 1.609h3.148a.75.75 0 1 0 0-1.5H7.883c-1.245 0-2.203-.435-2.853-1.132"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.11 15.142a.75.75 0 0 0-.703.49l-.1.269a2.95 2.95 0 0 1-1.739 1.742l-.268.1a.75.75 0 0 0 0 1.406l.268.1a2.95 2.95 0 0 1 1.74 1.742l.1.269a.75.75 0 0 0 1.406 0l.1-.269a2.95 2.95 0 0 1 1.74-1.742l.267-.1a.75.75 0 0 0 0-1.406l-.268-.1a2.95 2.95 0 0 1-1.74-1.742l-.099-.269a.75.75 0 0 0-.703-.49m.91 3.304a4.5 4.5 0 0 0-.91.91 4.5 4.5 0 0 0-.91-.91c.347-.258.653-.565.91-.91.258.345.565.652.91.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageAiAltOutline;
