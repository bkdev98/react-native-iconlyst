import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThetaNetworkOutline = ({
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
      d="M10.214 7.066c-.628 0-1.05.422-1.05 1.05v7.769c0 .602.49 1.05 1.05 1.05h3.979c.627 0 1.073-.432 1.144-.997V8.116c0-.602-.49-1.05-1.05-1.05zm-2.55 1.05c0-1.456 1.093-2.55 2.55-2.55h4.073c1.336 0 2.55 1.069 2.55 2.55v7.864l-.004.074a2.62 2.62 0 0 1-2.64 2.38h-3.979c-1.336 0-2.55-1.068-2.55-2.55z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.252 12.67a.75.75 0 0 1 .75.75v1.895a.75.75 0 0 1-1.5 0V13.42a.75.75 0 0 1 .75-.75M12.252 7.934a.75.75 0 0 1 .75.75v1.895a.75.75 0 1 1-1.5 0V8.684a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.08 13.42a.75.75 0 0 1 .75-.75h2.842a.75.75 0 0 1 0 1.5H10.83a.75.75 0 0 1-.75-.75M10.08 10.578a.75.75 0 0 1 .75-.75h2.842a.75.75 0 0 1 0 1.5H10.83a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThetaNetworkOutline;
