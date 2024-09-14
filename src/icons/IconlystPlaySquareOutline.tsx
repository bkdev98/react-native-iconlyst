import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaySquareOutline = ({
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
      d="M10.693 10.076a18.3 18.3 0 0 0 0 3.85c.037.278.156.406.253.461.101.058.298.104.611-.02a9.4 9.4 0 0 0 2.754-1.744c.248-.231.323-.456.322-.629-.001-.175-.08-.395-.32-.615l-.003-.002a9.2 9.2 0 0 0-2.76-1.747l-.006-.003c-.256-.108-.457-.08-.578-.015-.11.058-.235.187-.273.464m1.434-1.83c-.614-.26-1.291-.262-1.863.04-.583.309-.966.888-1.059 1.602l-.002.014a19.7 19.7 0 0 0 0 4.185l.001.016c.084.675.426 1.262 1.002 1.59.573.324 1.26.325 1.909.067l.005-.002a10.9 10.9 0 0 0 3.205-2.03l.005-.004c.51-.473.806-1.083.803-1.738-.004-.652-.305-1.254-.806-1.713a10.7 10.7 0 0 0-3.2-2.028"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaySquareOutline;
