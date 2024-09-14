import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale5Outline = ({
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
      d="M6.644 8.555a8.44 8.44 0 0 1 11.213 0 .75.75 0 0 1 .138.957l-2.122 3.406a.75.75 0 0 1-1.134.164 3.746 3.746 0 0 0-4.976 0 .75.75 0 0 1-1.135-.164L6.506 9.512a.75.75 0 0 1 .138-.957m1.485.725 1.341 2.153a5.25 5.25 0 0 1 5.561 0l1.342-2.153a6.94 6.94 0 0 0-8.244 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 9.097a.75.75 0 0 1 .75.75v1.539a.75.75 0 0 1-1.5 0v-1.54a.75.75 0 0 1 .75-.75M12.25 16.448a.75.75 0 0 1 .75.75V21a.75.75 0 1 1-1.5 0v-3.802a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale5Outline;
