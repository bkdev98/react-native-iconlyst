import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSquareOutline = ({
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
      d="M13.264 7.484a3.36 3.36 0 0 1 1.586.113h.001c2.049.659 2.657 2.855 2.1 4.593l-.002.004c-.459 1.403-1.61 2.483-2.546 3.179a12.3 12.3 0 0 1-1.786 1.098l-.033.015-.01.005-.003.002h-.001l-.318-.68-.317.68h-.002l-.003-.002-.01-.005-.033-.016-.117-.058a12.483 12.483 0 0 1-1.686-1.049c-.94-.697-2.098-1.779-2.535-3.176-.557-1.741.062-3.926 2.102-4.59l.009-.002a3.4 3.4 0 0 1 1.581-.107c.38.064.728.242 1.01.422.282-.182.631-.362 1.013-.426m-1.012 8.33-.317.679a.75.75 0 0 0 .634 0zm0-.844q.067-.035.145-.08c.294-.166.692-.41 1.11-.721.863-.641 1.704-1.487 2.016-2.44.384-1.2-.101-2.373-1.13-2.704a1.86 1.86 0 0 0-.878-.062h-.002c-.2.034-.445.191-.81.466a.75.75 0 0 1-.897.002c-.368-.273-.612-.43-.814-.464h-.002a1.9 1.9 0 0 0-.879.059c-1.032.338-1.516 1.51-1.133 2.706l.002.005c.29.93 1.125 1.774 1.998 2.421a11 11 0 0 0 1.274.812"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartSquareOutline;