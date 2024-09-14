import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletDoubleOutline = ({
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
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.88 6.42c.517-.553 1.243-.85 2.067-.85h4.606c.827 0 1.554.296 2.07.85.51.549.758 1.288.758 2.08v.85a.75.75 0 0 1-1.5 0V8.5c0-.484-.149-.835-.356-1.058-.201-.216-.514-.372-.973-.372H9.948c-.453 0-.767.156-.97.373-.21.224-.359.575-.359 1.058v.848a.75.75 0 1 1-1.5 0v-.848c0-.795.251-1.534.763-2.082"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.339 9.352a.75.75 0 0 1 .75-.75h12.324a.75.75 0 0 1 0 1.5H6.09a.75.75 0 0 1-.75-.75M7.88 13.006c.517-.553 1.243-.85 2.067-.85h4.606c.827 0 1.554.296 2.07.85.51.55.758 1.289.758 2.082v.61a.75.75 0 0 1-1.5 0v-.61c0-.486-.149-.837-.356-1.06-.201-.216-.514-.372-.973-.372H9.948c-.453 0-.767.155-.97.373-.21.224-.359.576-.359 1.059v.61a.75.75 0 0 1-1.5 0v-.61c0-.796.251-1.535.763-2.082"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.34 15.695a.75.75 0 0 1 .75-.75h4.204a.75.75 0 0 1 .75.75v.03a1.2 1.2 0 0 0 1.206 1.205 1.2 1.2 0 0 0 1.204-1.205v-.027q0-.12.039-.237v-.003a.75.75 0 0 1 .712-.513h4.204a.75.75 0 0 1 0 1.5h-3.551a2.7 2.7 0 0 1-2.608 1.985 2.7 2.7 0 0 1-2.61-1.985H6.09a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardWalletDoubleOutline;
