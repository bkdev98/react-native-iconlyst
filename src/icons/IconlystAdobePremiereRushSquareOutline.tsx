import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePremiereRushSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.645 9.455a4.8 4.8 0 0 1 1.088-.011c.409.048.725.162.929.334.173.146.336.392.336.899 0 .506-.164.761-.343.917-.208.18-.528.301-.937.358a4.8 4.8 0 0 1-1.073.012zm0 4.015a6.2 6.2 0 0 0 1.28-.033c.554-.077 1.198-.264 1.712-.71.543-.47.861-1.157.861-2.05 0-.894-.318-1.58-.868-2.044-.519-.439-1.166-.613-1.72-.679a6.4 6.4 0 0 0-1.506.02 7 7 0 0 0-.628.105l-.04.01-.013.002-.004.001h-.002c0 .001-.001.001.178.73l-.179-.729a.75.75 0 0 0-.571.728v6.423a.75.75 0 0 0 1.5 0zM13.605 10.14a.75.75 0 0 1 .75.75v2.607a1 1 0 1 0 2 0V10.89a.75.75 0 0 1 1.5 0v2.606a2.5 2.5 0 0 1-5 0V10.89a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.127 11.975a.75.75 0 0 1 .995.368l1.204 2.615a.75.75 0 1 1-1.363.627L8.76 12.97a.75.75 0 0 1 .368-.995"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePremiereRushSquareOutline;
