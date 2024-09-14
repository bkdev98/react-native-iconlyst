import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeCreativeCloudSquareOutline = ({
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
      d="M13.643 8.95a3 3 0 0 0-.87.125.75.75 0 0 1-.428-1.438 4.55 4.55 0 1 1 1.298 8.911c-1.13 0-2.017-.423-2.755-.983-.569-.432-1.085-.977-1.55-1.468l-.33-.346a.75.75 0 0 1 1.077-1.044l.384.402c.456.48.864.91 1.326 1.26.556.423 1.132.68 1.848.68a3.05 3.05 0 0 0 0-6.1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.562 10.543a2.254 2.254 0 0 0-.34 4.483A.75.75 0 0 1 9 16.509a3.755 3.755 0 0 1 .563-7.466c1.774 0 2.769 1.21 3.54 2.15l.003.004a.75.75 0 1 1-1.159.952c-.822-1-1.4-1.606-2.384-1.606"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeCreativeCloudSquareOutline;
