import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePreludeSquareOutline = ({
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
      d="M8.344 9.370000000000001a5 5 0 0 1 1.168-.015c.428.05.764.171.982.355.188.159.361.424.361.96 0 .534-.174.809-.368.977-.223.193-.563.32-.99.38a5 5 0 0 1-1.153.01zm0 4.173c.385.03.866.038 1.359-.03.574-.08 1.237-.274 1.766-.732.558-.483.886-1.19.886-2.112s-.328-1.627-.893-2.104c-.533-.451-1.2-.632-1.775-.7a6.6 6.6 0 0 0-1.559.02 8 8 0 0 0-.65.11l-.043.01-.013.003h-.004l-.002.001.178.729-.179-.729a.75.75 0 0 0-.571.729v6.6850000000000005a.75.75 0 0 0 1.5 0zM15.02 8.227a.75.75 0 0 1 .75.75v5.693h.638a.75.75 0 0 1 0 1.5h-.789a1.35 1.35 0 0 1-1.35-1.35V8.977a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePreludeSquareOutline;
